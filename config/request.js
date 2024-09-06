
export class ALL_REQUEST {
    getRequest(url) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open("GET", url, true)
            xhr.setRequestHeader("Content-type", "application/json")
            xhr.onloadend = () => {
                if (xhr.readyState === 4 && xhr.status == 200) {
                    resolve(xhr.responseText)
                } else {
                    let response = xhr.responseText
                    reject({ error: true, code: xhr.status, msg: response.msg })
                }
            }
            xhr.send()
        })
    }
    
    putRequest(url, data) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open("PUT", url, true)
            xhr.setRequestHeader("Content-type", "application/json")
            xhr.onloadend = () => {
                if (xhr.readyState === 4 && xhr.status == 200) {
                    resolve(xhr.responseText)
                } else {
                    let response = xhr.responseText
                    reject({ error: true, code: xhr.status, msg: response.msg })
                }
            }
            xhr.send(JSON.stringify(data))
        })
    }
    patchRequest(url, data) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open("POST", url, true)
            xhr.setRequestHeader("Content-type", "application/json")
            xhr.onloadend = () => {
                if (xhr.readyState === 4 && xhr.status == 200) {
                    resolve(xhr.responseText)
                } else {
                    let response = xhr.responseText
                    reject({ error: true, code: xhr.status, msg: response.msg })
                }
            }
            xhr.send(JSON.stringify(data))
        })
    }
    postRequest(url, data) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open("POST", url, true)
            xhr.setRequestHeader("Content-type", "application/json")
            xhr.onloadend = () => {
                if (xhr.readyState === 4 && xhr.status == 201) {
                    resolve(xhr.responseText)
                } else {
                    let response = xhr.responseText
                    reject({ error: true, code: xhr.status, msg: response.msg })
                }
            }
            xhr.send(JSON.stringify(data))
        })
    }
}