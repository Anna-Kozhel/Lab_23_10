class goods {
    constructor (name, cost){
        this.name = name;
        this.cost = cost;
    }
}

let goodList = [];

function e_addGood(name, cost) {
    let newGood = new goods(name, cost);
    goodList.push(newGood);
    return newGood;
}

function h1_accurateFindGood (text, number) {
    for (let i = 0; i < goodList.length; i++)
        if (goodList[i].name.includes(text) && goodList[i].cost === number && text !== "" && number !== 0) return goodList[i];
    return 0;
}

function h2_wideFindGood(text, number){
    let lookingForList = [];
    for (let i = 0; i < goodList.length; i++) {
        if (goodList[i].name.includes(text) && goodList[i].cost === number && text !== "" && number !== 0) lookingForList.push(goodList[i]);
        else if (goodList[i].name.includes(text) && !number || goodList[i].cost === number && !text) lookingForList.push(goodList[i]);
    } return lookingForList;
}

function g_deleteGood (text, number){
    let neededToDelete = h1_accurateFindGood(text, number);
    if (neededToDelete) { goodList.splice(goodList.indexOf(neededToDelete), 1); return goodList; }
    return console.log("\nThere is no a such good!");
}

function f_changeGood (text, number, newText, newNumber){
    let neededToChange = h1_accurateFindGood(text, number);
    if (neededToChange) { neededToChange.name = newText; neededToChange.cost = newNumber; return goodList; }
    return console.log("\nThere is no a such good!");
}

function getGoodList() { return goodList; }

exports.e_addGood = e_addGood;
exports.f_changeGood = f_changeGood;
exports.g_deleteGood = g_deleteGood;
exports.h1_accurateFindGood = h1_accurateFindGood;
exports.h2_wideFindGood = h2_wideFindGood;
exports.getGoodList = getGoodList;

function m_goodToStock (text, number, stock) {
    let verificationGood = h1_accurateFindGood(text, number, goodList);
    if (verificationGood) { stock.goodsListStock.push(verificationGood); return stock.goodsListStock; }
    return console.log("\nThere is no a such good!");
}

function n_deleteGoodFromStock (text, number, stock) {
    let verificationGood = h1_accurateFindGood(text, number, stock.goodsListStock);
    if (verificationGood) { stock.goodsListStock.splice(stock.goodsListStock.indexOf(verificationGood),1); return stock.goodsListStock; }
    return console.log("\nThere is no a such good!");
}

function o_moveGoodStockToStock (text, number, stockFrom, stockTo) {
    let verificationGood = h1_accurateFindGood(text, number, stockFrom.goodsListStock);
    if (verificationGood) {
        [verificationGood] = stockFrom.goodsListStock.splice(stockFrom.goodsListStock.indexOf(verificationGood),1);
        stockTo.goodsListStock.push(verificationGood); return stockTo.goodsListStock; }
    return console.log("\nThere is no a such good!");
}

function p_moveGoodStockToShop (text, number, stockFrom, shopTo) {
    let verificationGood = h1_accurateFindGood(text, number, stockFrom.goodsListStock);
    if (verificationGood) {
        [verificationGood] = stockFrom.goodsListStock.splice(stockFrom.goodsListStock.indexOf(verificationGood),1);
        shopTo.goodsListShop.push(verificationGood); return shopTo.goodsListShop; }
    return console.log("\nThere is no a such good!");
}

exports.m_goodToStock = m_goodToStock;
exports.n_deleteGoodFromStock = n_deleteGoodFromStock;
exports.o_moveGoodStockToStock = o_moveGoodStockToStock;
exports.p_moveGoodStockToShop = p_moveGoodStockToShop;