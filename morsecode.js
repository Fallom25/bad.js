const alphabet = {  
    "0":"-----",
    "1":".----",
    "2":"..---",
    "3":"...--",
    "4":"....-",
    "5":".....",
    "6":"-....",
    "7":"--...",
    "8":"---..",
    "9":"----.",
    "a":".-",
    "b":"-...",
    "c":"-.-.",
    "d":"-..",
    "e":" .",
    "f":"..-.",
    "g":"--.",
    "h":"....",
    "i":"..",
    "j":".---",
    "k":"-.-",
    "l":".-..",
    "m":"--",
    "n":"-.",
    "o":"---",
    "p":".--.",
    "q":"--.-",
    "r":".-.",
    "s":"...",
    "t":"-",
    "u":"..-",
    "v":"...-",
    "w":".--",
    "x":"-..-",
    "y":"-.--",
    "z":"--..",
    " ":"/",
    "!":"-·-·--",
    ".":"·-·-·-",
    ",":"--··--"
};
  
const morse = {
    "-----": "0",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    " .": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
    "/": " ",
    "-·-·--": "!",
    "·-·-·-": ".",
    "--··--": ",",
};




const letterCheck = (arrOfLetters, codeObject) => {
    if (arrOfLetters.length === 0) {
        return false;
    }

    return arrOfLetters.every((letter) => codeObject.hasOwnProperty(letter));
 }

const translate = (codeString, codeObject, splitDelim, joinDelim) => {
    if (typeof codeString !== 'string' || typeof codeObject !== 'object') {
        return [];
    }

    const arrOfLetters = codeString.toLowerCase().split(splitDelim);
    if (letterCheck(arrOfLetters, codeObject) === false) {
        alert ('Please Enter Valid Characters');
        return [];
    }
    
    return arrOfLetters.map((key) => codeObject[key]).join(joinDelim);
}

// const encodeInputText = () => {
//     const encodeInput = document.getElementById("encodeInput");
//     encodeInput.value = translate(encodeInput.value, alphabet, "", "   ");
// }
  
// const decodeInputText = () => {
//     const decodeInput = document.getElementById("decodeInput");
//     decodeInput.value = translate(decodeInput.value, morse, "   ", "");
// }

// const encodeBtn = document.getElementById("encodeBtn");
// const decodeBtn = document.getElementById("decodeBtn");

// encodeBtn.addEventListener("click", encodeInputText);
// decodeBtn.addEventListener("click", decodeInputText);


module.exports = {
    letterCheck,
    translate
}