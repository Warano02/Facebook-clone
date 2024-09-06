import { createDatabase, insertData, isUserConnected } from "../../../../config/data.js"

const test = async () => {
    try {
        const db = await createDatabase('User', 'MyStore');
        const isConnected = await isUserConnected(db, 1);
        if (isConnected) window.location.href = "../../public"
    } catch (error) {
        console.error("Error " + error)
        alert("Une erreur est survenue lors du chargement de la page !")
    }
}
test()
let annee = document.getElementById("annee");
for (let j = 1950; j < 2024; j++) {
    const donne = `<option value="${j}">${j}</option>`;
    annee.insertAdjacentHTML("beforebegin", donne);
}
let jour = document.getElementById("jour");
for (let i = 1; i < 31; i++) {
    const donne = `<option value="${i}">${i}</option>`;
    jour.insertAdjacentHTML("beforebegin", donne);
}
let chekboxs = document.querySelectorAll('.ch')
chekboxs.forEach(chekbox => {
    chekbox.addEventListener('change', () => {
        if (chekbox.checked) {
            chekboxs.forEach(item => {
                if (item != chekbox) {
                    item.checked = false
                }
            });
        }
    })
});
let create = document.getElementById('create')
let close = document.getElementById("close")
let container = document.getElementById("container")
close.addEventListener('click', () => container.style.display = "none")
create.addEventListener('click', () => container.style.display = "flex")

let FormLogin = document.getElementById('login')
let identifiant = document.getElementById('identifiant')
let password = document.getElementById('password')


FormLogin.addEventListener('submit', (e) => {
    e.preventDefault()
    const data = {
        "identifiant": identifiant.value,
        "password": password.value
    }
    const xhr = new XMLHttpRequest();
    xhr.open('POST', "http://localhost:3000/post/loginAccount", true)
    xhr.setRequestHeader('Content-type', 'application/json')
    xhr.onloadend = async () => {
        const response = JSON.parse(xhr.responseText)
        console.log(response);

        if (xhr.status !== 201 && xhr.readyState === 4) {
            alert(response.msg)
        } else {
            console.log("ALL is good")
            try {
                const db = await createDatabase('User', 'MyStore');
                const successMessage = await insertData(db, 'MyStore', { id: 1, data: response.msg });
                window.location.href = "../../public"
                console.log(successMessage);
            } catch (error) {
                console.error("Erreur : ", error);
            }
        }
    }
    xhr.send(JSON.stringify(data))
})


let FormCreateAccount = document.getElementById('Form2')
let firstName = document.getElementById('firstName')
let lastName = document.getElementById('lastName')
let jours = document.getElementById('jours')
let date = document.getElementById('date')
let mois = document.getElementById('mois')
let psw = document.getElementById('pswd')
let contact = document.getElementById('contact')

FormCreateAccount.addEventListener("submit", (e) => {
    e.preventDefault();
    let cc = contact.value;

    if (!/^\d{3,}$/.test(cc) && !/^\w+@\w+\.(com|cm|fr)$/.test(cc)) { // Amélioration de la regex
        alert(`L'adresse ${cc} que vous avez entré est incorrecte !`);
        return;
    }

    // Valider la date et le sexe
    let birthday = `${jours.value}/${mois.value}/${date.value}`;
    let sex = [...chekboxs].map(el => el.checked ? el.getAttribute('data-sex') : undefined).filter(e => e !== undefined)[0];

    let data = JSON.stringify({
        "contact": cc,
        "firstName": firstName.value,
        "lastName": lastName.value,
        "email": cc,
        "sex": sex,
        "password": psw.value,
        "birthday": birthday
    });

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:3000/post/createuser", true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.onloadend = async () => {
        const response = JSON.parse(xhr.responseText);
        if (xhr.status !== 201) {
            alert(response.msg);
        } else {
            try {
                const db = await createDatabase('User', 'MyStore');
                const successMessage = await insertData(db, 'MyStore', { id: 1, data: response.msg });
                alert("Votre compte vient d'être créer avec succès !")
                window.location.href = "../../public"
                console.log(successMessage);
            } catch (error) {
                console.error("Erreur : ", error);
            }
        }
    }

    xhr.send(data);
});