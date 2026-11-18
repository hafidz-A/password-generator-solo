const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const charactersNum = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

let generatedPassword = []

let input = document.getElementById("pass-length")
let button = document.getElementById("generate-pass")
let checkBox = document.querySelector("input[name='numbers-randoms']")
let numberOrRandom = document.querySelector("#mode")
let lengthStatus = document.querySelector("#length-status")
let generatedPasswordOne = document.querySelector("#generated-pass-one")
let generatedPasswordTwo = document.querySelector("#generated-pass-two")
let password = ""
// checkbox -> checked -> number

// let char = charactersNum[Math.floor( Math.random() * charactersNum.length )]
// console.log(char)
// password += char
// console.log(password)

checkBox.addEventListener("change", () => {
    numberOrRandom.textContent = checkBox.checked ? "Number" : "Random";
})

function generatePasswords() {
    password = ""
    let passLength = input.valueAsNumber
    console.log(passLength)
    if (passLength >= 10 && passLength <= 25) {
        lengthStatus.textContent = ""
        if (checkBox.checked) {
            for (let i = 0; i < passLength; i++) {
                let char = charactersNum[Math.floor( Math.random() * charactersNum.length )]
                password += char
            }
            generatedPassword.unshift(password)
            displayPassword()
        }
        else {
            for (let i = 0; i < passLength; i++) {
                let char = characters[Math.floor( Math.random() * characters.length )]
                password += char
            }
            generatedPassword.unshift(password)
            displayPassword()
        }

    } else {
        lengthStatus.textContent = "Password is too long or too short"
    }
}

function displayPassword() {
    if (generatedPassword.length === 1) {
        generatedPasswordOne.textContent = "PASS> " + generatedPassword[0]
    } else if (generatedPassword.length === 2) {
        generatedPasswordOne.textContent = "PASS> " +generatedPassword[0]
        generatedPasswordTwo.textContent = "PASS> " +generatedPassword[1]
    } else {
        generatedPassword.pop()
        generatedPasswordOne.textContent = "PASS> " +generatedPassword[0]
        generatedPasswordTwo.textContent = "PASS> " +generatedPassword[1]
    }
}