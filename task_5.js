const date_1 = new Date(2021, 12, 24, 12,0);
const date_2 = new Date(2022, 2, 4, 19,0);

function Difference(first, second) {
    let diff = Math.abs(second.valueOf() - first.valueOf()) / 1000;
    let line = "weeks: " + Math.floor(diff/3600/24/7);
    diff -= Math.floor(diff/3600/24/7)*3600*24*7;
    line += ", days: " + Math.floor(diff/3600/24);
    diff -= Math.floor(diff/3600/24)*3600*24;
    line += ", seconds: " + diff + ".";
    return line;
}

console.log(Difference(date_1, date_2));