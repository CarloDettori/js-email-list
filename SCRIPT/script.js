"use strict"
console.clear();
const button = document.getElementById("button");
const mailColumnOne = document.getElementById("mail-column-1")
const mailColumnTwo = document.getElementById("mail-column-2")
button.addEventListener("click", getMail);

function getMail() {
    mailColumnOne.innerHTML = ""
    mailColumnTwo.innerHTML = ""

    for (let i = 1; i <= 5; i++) {
        axios
            .get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((ans) => {
                //console.log(ans.data.response)
                mailColumnOne.innerHTML += `<li>${ans.data.response}</li>`
            })
            .catch((error) => {
                console.log(error);
            })
    }
    for (let i = 1; i <= 5; i++) {
        axios
            .get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((ans) => {
                //console.log(ans.data.response)
                mailColumnTwo.innerHTML += `<li>${ans.data.response}</li>`
            })
            .catch((error) => {
                console.log(error);
            })
    }
}
button.addEventListener("click", getMail)
