let Array = ["Get", "these", "words", "together"];
let line = "";

function Concatination(arr) {
    for (let i = 0; i < arr.length; i++) { line += arr[i] + " "; }
    return line;
}

console.log(Concatination(Array));