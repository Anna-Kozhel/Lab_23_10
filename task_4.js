let Array = ["To", "take", "2", "repeats",  "take", "2", "repeats", "2", "the", "repeats", "2"];

function DoublesOut(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if(arr[i] === arr[j] && j !== i) { arr.splice(j, 1); }
        }} return arr;
}

console.log(DoublesOut(Array));