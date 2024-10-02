// Range input slider
let inputSlider = document.querySelector("#inputSlider")
let sliderVal = document.querySelector("#sliderValue");
// Input box
let passBox = document.querySelector("#passBox");
// Options
let options = document.querySelectorAll(".options");
let lowerCase = document.querySelector("#lowercase");
let upperCase = document.querySelector("#uppercase");
let numbers = document.querySelector("#numbers");
let symbols = document.querySelector("#symbols");
// Buttons
let genBtn = document.querySelector("#genBtn");
let copyBtn = document.querySelector("#copyBtn");

// Slider value
sliderVal.textContent = inputSlider.value;
inputSlider.addEventListener("input", () => {
    sliderVal.textContent = inputSlider.value;
});

// Clicking the button
genBtn.addEventListener("click", () => {
    passBox.value = generatePassword();
});

// Initializing variables whose values will be included in the password
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let allNumbers = "0123456789";
let allSymbols = "!@#$%^&*";

// This function generates a random password for the user
const generatePassword = () => {
    let genPassword = "";
    let allChars = "";

    // Conditions
    allChars += lowerCase.checked ? lowerChars : "";
    allChars += upperCase.checked ? upperChars : "";
    allChars += numbers.checked ? allNumbers : "";
    allChars += symbols.checked ? allSymbols : ""; 

    if (allChars == "" || allChars.length == 0) {
        return genPassword;
    }

    for (let i = 0; i < inputSlider.value; i++) {
        genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length)); // Fixed allChars.length instead of inputSlider.value
    }

    return genPassword;
}

// Copy button click event listener
copyBtn.addEventListener("click", () => { // Corrected "Click" to "click"
    if (passBox.value !== "" && passBox.value.length > 1) { // Fixed passBox.value.length check
        navigator.clipboard.writeText(passBox.value).then(() => { // Correct clipboard writeText usage
            copyBtn.title = "Copied!";
            copyBtn.innerText = "check"; // Changed to a check mark indicator
        });
    }
});

// Reset the copy button after 2 seconds
setTimeout(() => {
    copyBtn.innerHTML = "content_copy"; // Reset icon to "content_copy"
    copyBtn.title = ""; // Clear title
}, 2000);
