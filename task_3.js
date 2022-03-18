let number = 19;
let line = "1";

function Fibonacci(n) {
    for (let i = 1, prev = 0, now = 1; ; i++) {
        if (i === n) { return line += "."; }
        now += prev;
        prev = now - prev;
        line += ", " + now; }
}

console.log(Fibonacci(number));