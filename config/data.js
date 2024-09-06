export function createDatabase(dbName, storeName) {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(dbName, 1); 

        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            if (!db.objectStoreNames.contains(storeName)) {
                db.createObjectStore(storeName, { keyPath: "id" });
            }
        };

        request.onsuccess = (event) => {
            resolve(event.target.result); // Résoudre avec l'objet de base de données
        };

        request.onerror = (event) => {
            reject(event.target.error); 
        };
    });
}

export function insertData(db, storeName, data) {
    return new Promise((resolve, reject) => {
        // Vérifier si db est un objet de type IDBDatabase
        if (!(db instanceof IDBDatabase)) {
            reject("L'objet db n'est pas valide.");
            return;
        }

        const transaction = db.transaction([storeName], 'readwrite');
        
        transaction.oncomplete = () => {
            console.log("Transaction terminée avec succès !");
        };

        transaction.onerror = (event) => {
            reject("Erreur dans la transaction : " + event.target.error);
        };

        const store = transaction.objectStore(storeName);
        
        // Vérification que les données contiennent un id
        if (!data.id) {
            reject("Les données doivent contenir un 'id'.");
            return;
        }

        const request = store.add(data); 

        request.onsuccess = () => {
            resolve("Données insérées avec succès !");
        };

        request.onerror = (event) => {
            reject(event.target.error);
        };
    });
}

export function isUserConnected(db, userId) {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction('MyStore', 'readonly');
        const store = transaction.objectStore('MyStore');

        const request = store.get(userId); 

        request.onsuccess = (event) => {
            if (event.target.result) {
                resolve(true); 
            } else {
                resolve(false); 
            }
        };

        request.onerror = (event) => {
            reject(event.target.error);
        };
    });
}
