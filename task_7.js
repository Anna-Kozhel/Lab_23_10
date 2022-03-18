const mod = require("custom_module");

function print (list) {
    for (let i = 0; i < list.length; i++) {
        if (list[i].name && list[i].cost) console.log("name: " + list[i].name + "\t\tcost: " + list[i].cost);
        if (list[i].name && list[i].address && list[i].town) console.log("name: " + list[i].name + "\taddress: " + list[i].address + "\ttown: " + list[i].town);
        if (list[i].number && list[i].address && list[i].town) console.log("number: " + list[i].number + "\taddress: " + list[i].address + "\ttown: " + list[i].town);}
}

let s1 = mod.a_addShop("Silpo", "Shevchenka 60", "Lviv");
let s2 = mod.a_addShop("AUCHAN", "Stryiska 30", "Lviv");
let s3 = mod.a_addShop("METRO", "Hryhorenka 43", "Kyiv");
let s4 = mod.a_addShop("Silpo", "Svobody 30", "Kharkiv");
console.log("\n\tShops:\n"); print(mod.getShopList());

console.log("\n\nChange the shop \"METRO\" on \"ATB\":\n\n\tShops:\n");
print(mod.b_changeShop("METRO", "Hryhorenka 43", "Kyiv", "ATB", "Shevchenka 335", "Lviv"));

console.log("\n\nDelete the shop named \"AUCHAN\":\n\n\tShops:\n");
print(mod.c_deleteShop("AUCHAN", "Stryiska", "Lviv"));

console.log("\n\nFind the specific shop for example \"Silpo\" on the street Svobody in Kharkiv:\n\n\tShop:\n");
print([mod.d1_accurateFindShop("Silpo", "Svobody", "Kharkiv")]);

console.log("\n\nFind the shop if you don`t know some kind of parameters, let`s find shops on the street Shevchenka:\n\n\tShops:\n");
print(mod.d2_wideFindShop("", "Shevchenka", ""));

mod.e_addGood("apple", 15);
mod.e_addGood("apple pie", 85);
mod.e_addGood("pineapple", 110);
mod.e_addGood("apple jam", 15);
mod.e_addGood("peach", 50);
console.log("\n\tGoods:\n"); print(mod.getGoodList());

console.log("\n\nChange the good named \"apple pie\" with cost 85 on \"melon\" with cost 20:\n\n\tGoods:\n");
print(mod.f_changeGood("apple pie", 85, "melon", 20));

console.log("\n\nDelete the good named \"peach\" with cost 50:\n\n\tGoods:\n");
print(mod.g_deleteGood("peach", 50));

console.log("\n\nFind the specific good for example \"pineapple\", cost 110:\n\n\tGoods:\n");
print([mod.h1_accurateFindGood("pineapple", 110)]);

console.log("\n\nFind the good if you don`t know some kind of parameters like each good with word \"apple\" without cost:\n\n\tGoods:\n");
print(mod.h2_wideFindGood("apple", 0));

let st1 = mod.i_addStock(40, "Shevchenka 60", "Ivano-Frankivsk");
let st2 = mod.i_addStock(1, "Topolna 71", "Rivne");
let st3 = mod.i_addStock(6, "Trusha 13", "Lviv");
let st4 = mod.i_addStock(7, "Kalyny 54", "Dnipro");
let st5 = mod.i_addStock(3, "Vorovskogo 9", "Kyiv");
console.log("\n\tStocks:\n"); print(mod.getStockList());

console.log("\n\nChange the stock 3 on 5:\n\n\tStocks:\n");
print(mod.j_changeStock(3, "Vorovskogo 9", "Kyiv", 5,"Shevchenka 90" ,"Lviv"));

console.log("\n\nDelete the stock in Dnipro:\n\n\tStocks:\n");
print(mod.k_deleteStock(7, "54", "Dnipro"));

console.log("\n\nFind the specific stock for example number 1 on the street Topolna in Rivne:\n\n\tStock:\n");
print([mod.l1_accurateFindStock(1 ,"Topolna", "Rivne")]);

console.log("\n\nFind the stock if you don`t know some kind of parameters, let`s find all stocks in Lviv:\n\n\tStocks:\n");
print(mod.l2_wideFindStock(0, "", "Lviv"));

console.log("\n\nLet add some goods to the stock (\"pineapple\", \"melon\", \"apple\") on the stock number 6, and \"apple jam\" on the stock number 1:\n\n\tGoods on the stock 6:\n");
mod.m_goodToStock("melon", 20, st3);
mod.m_goodToStock("apple", 15, st3);
print(mod.m_goodToStock("pineapple", 110, st3));
console.log("\n\tGoods in the stock 6:\n"); print(mod.m_goodToStock("apple jam", 15, st2));

console.log("\n\nLet delete \"apple\" from the stock number 6:\n\n\tGoods in the stock 1:\n");
print(mod.n_deleteGoodFromStock("apple", 15, st3));

console.log("\n\nLet move \"melon\" from the stock number 6 to the stock number 5:\n\n\tGoods in the stock 5:\n");
print(mod.o_moveGoodStockToStock("melon", 20, st3, st5));
console.log("\n\tGoods in the stock 6:\n"); print(st3.goodsListStock);

console.log("\n\nLet move \"pineapple\" from the stock number 6 to the shop \"ATB\":\n\n\tGoods in the shop:\n");
print(mod.p_moveGoodStockToShop("melon", 20, st3, s2));