class shops {
    constructor (name, address, town){
        this.name = name;
        this.address = address;
        this.town = town;
        this.goodsListShop = [];
    }
}

let shopList = [];

function a_addShop(name, address, town) {
    let newShop = new shops(name, address, town);
    shopList.push(newShop);
    return newShop;
}

function d1_accurateFindShop(text1, text2, text3) {
    for (let i = 0; i < shopList.length; i++)
        if (shopList[i].name.includes(text1) && shopList[i].address.includes(text2) && shopList[i].town.includes(text3)) return shopList[i];
    return 0;
}

function d2_wideFindShop(text1, text2, text3){
    let lookingForList = [];
    for (let i = 0; i < shopList.length; i++) {
        if (shopList[i].name.includes(text1) && shopList[i].address.includes(text2) && shopList[i].town.includes(text3)) lookingForList.push(shopList[i]);
        else if (shopList[i].name.includes(text1) && !text2 && !text3 || !text1 && shopList[i].address.includes(text2) && !text3 || !text1 && !text2 && shopList[i].town.includes(text3))
        { lookingForList.push(shopList[i]); }
        else if (shopList[i].name.includes(text1) && shopList[i].address.includes(text2) && !text3 ||
            !text1 && shopList[i].address.includes(text2) && shopList[i].town.includes(text3) || shopList[i].name.includes(text1) && !text2 && shopList[i].town.includes(text3))
        { lookingForList.push(shopList[i]); }
    }
    return lookingForList;
}

function c_deleteShop (text1, text2, text3){
    let neededToDelete = d1_accurateFindShop(text1, text2, text3, shopList);
    if (neededToDelete) { shopList.splice(shopList.indexOf(neededToDelete), 1); return shopList; }
    return console.log("\nThere is no a such good!");
}

function b_changeShop (text1, text2, text3, newText1, newText2, newText3){
    let neededToChange = d1_accurateFindShop(text1, text2, text3, shopList);
    if (neededToChange) { neededToChange.name = newText1; neededToChange.address = newText2; neededToChange.town = newText3; return shopList; }
    return console.log("\nThere is no a such good!");
}

function getShopList() { return shopList; }

exports.a_addShop = a_addShop;
exports.b_changeShop = b_changeShop;
exports.c_deleteShop = c_deleteShop;
exports.d1_accurateFindShop = d1_accurateFindShop;
exports.d2_wideFindShop = d2_wideFindShop;
exports.getShopList = getShopList;