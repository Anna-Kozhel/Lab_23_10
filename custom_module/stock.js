class stocks {
    constructor (number, address, town){
        this.number = number;
        this.address = address;
        this.town = town;
        this.goodsListStock = [];
    }
}

let stockList = [];

function i_addStock(number, address, town) {
    let newStock = new stocks(number, address, town);
    stockList.push(newStock);
    return newStock;
}

function l1_accurateFindStock(number, text1, text2) {
    for (let i = 0; i < stockList.length; i++)
        if (stockList[i].number === number && stockList[i].address.includes(text1) && stockList[i].town.includes(text2)) return stockList[i];
    return 0;
}

function l2_wideFindStock(number, text1, text2){
    let lookingForList = [];
    for (let i = 0; i < stockList.length; i++) {
        if (stockList[i].number === number && stockList[i].address.includes(text1) && stockList[i].town.includes(text2)) lookingForList.push(stockList[i]);
        else if (stockList[i].number === number && !text1 && !text2 || !number && stockList[i].address.includes(text1) && !text2 || !number && !text1 && stockList[i].town.includes(text2))
        { lookingForList.push(stockList[i]); }
        else if (stockList[i].number === number && stockList[i].address.includes(text1) && !text2 ||
            !number && stockList[i].address.includes(text1) && stockList[i].town.includes(text2) || stockList[i].number === number && !text1 && stockList[i].town.includes(text2))
        { lookingForList.push(stockList[i]); }
    }
    return lookingForList;
}

function k_deleteStock (number, text1, text2){
    let neededToDelete = l1_accurateFindStock (number, text1, text2);
    if (neededToDelete) { stockList.splice(stockList.indexOf(neededToDelete), 1); return stockList; }
    return console.log("\nThere is no a such good!");
}

function j_changeStock (number, text1, text2, newNumber, newText1, newText2){
    let neededToChange = l1_accurateFindStock (number, text1, text2);
    if (neededToChange) { neededToChange.number = newNumber; neededToChange.address = newText1; neededToChange.town = newText2; return stockList; }
    return console.log("\nThere is no a such good!");
}

function getStockList() { return stockList; }

exports.i_addStock = i_addStock;
exports.j_changeStock = j_changeStock;
exports.k_deleteStock = k_deleteStock;
exports.l1_accurateFindStock = l1_accurateFindStock;
exports.l2_wideFindStock = l2_wideFindStock;
exports.getStockList = getStockList;