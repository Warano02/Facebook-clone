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
create.addEventListener('click', () => container.style.display = "block")
