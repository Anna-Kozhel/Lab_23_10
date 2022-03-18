let line = "let here be something written or anything written at all.";

function  replaceAt (index, replacement,str) {
    return str.substring(0, index) + replacement + str.substring(index + replacement.length);
}
function FirstSymbolUp(str) {
    for (let i = 0; ; ) {
        str = replaceAt(i,str[i].toUpperCase(),str);
        i = str.indexOf(' ', i) + 1;
        if (i === 0) { return str; }
    }
}

console.log(FirstSymbolUp(line))