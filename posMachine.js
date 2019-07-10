//获取所有商品信息
let getAllItemsInfo = () => {
    let allItemsInfo = [
        {"id": "0001", "name": "Coca Cola", "price": 3},
        {"id": "0002", "name": "Diet Coke", "price": 4},
        {"id": "0003", "name": "Pepsi-Cola", "price": 5},
        {"id": "0004", "name": "Mountain Dew", "price": 6},
        {"id": "0005", "name": "Dr Pepper", "price": 7},
        {"id": "0006", "name": "Sprite", "price": 8},
        {"id": "0007", "name": "Diet Pepsi", "price": 9},
        {"id": "0008", "name": "Diet Mountain Dew", "price": 10},
        {"id": "0009", "name": "Diet Dr Pepper", "price": 11},
        {"id": "0010", "name": "Fanta", "price": 12}
    ];
    return allItemsInfo;
}
//查看用户要的商品是否存在

let verifyTheExistenceOfTheItem = items => {
    let allItemsInfo = getAllItemsInfo();
    let allItemsId=new Array();
    for (let i=0;i<allItemsInfo.length;i++){
        allItemsId.push(allItemsInfo[i].id);
    }
    let feedback ='right';
    for (let i=0;i<items.length;i++){
        //console.log(allItemsId.includes(items[i]));
        if(!allItemsId.includes(items[i])){
            feedback='[ERROR]:Here has id not exsist';
        }

    }
    //console.log(feedback);
    return feedback;
}
//获取用户所要的商品和数量
let getItemsAndCount = items => {
    let itemsAndCount = {};
    for (let i = 0; i < items.length; i++) {
        if (itemsAndCount[items[i]]) {
            itemsAndCount[items[i]]++;
        } else {
            itemsAndCount[items[i]] = 1;
        }
    }
    console.log(itemsAndCount);
    return itemsAndCount;
}


//计算每样商品的价格，并返回收据主体
let calculateThePriceOfItem = (itemsAndCount, allItemsInfo) => {
    let receiptBody = new Array();
    let itemsId = Object.keys(itemsAndCount);
    console.log(itemsId);
    for (let i = 0; i < itemsId.length; i++) {

        let lineOfReceipt = new Object();
        for (let j = 0; j < allItemsInfo.length; j++) {
            if (itemsId[i] == allItemsInfo[j].id) {
                lineOfReceipt.name = allItemsInfo[j].name;
                lineOfReceipt.price = allItemsInfo[j].price;
                lineOfReceipt.count = itemsAndCount[itemsId[i]];
                lineOfReceipt.total = allItemsInfo[j].price * itemsAndCount[itemsId[i]];
            }
        }
        receiptBody.push(lineOfReceipt);
    }
    console.log(receiptBody);
    return receiptBody;
}

//计算总价格
let calculateTotalPrice = receiptBody => {
    let totalPrice = 0;
    for (let i = 0; i < receiptBody.length; i++) {
        totalPrice += receiptBody[i].total;
    }
    return totalPrice;
}


//生成收据（规范格式）
let generateReceipt = (items) => {
    let allItemsInfo = getAllItemsInfo();
    let feedBack=verifyTheExistenceOfTheItem(items);
    if(feedBack!='right'){
        return feedBack;
    }
    let itemsAndCount = getItemsAndCount(items);
    let receiptBody = calculateThePriceOfItem(itemsAndCount, allItemsInfo);
    let totalPrice = calculateTotalPrice(receiptBody);
    let receipt =
        `Receipts
------------------------------------------------------------
`;
    for (var i = 0; i < receiptBody.length; i++) {
        receipt += `${receiptBody[i].name} ${receiptBody[i].price} ${receiptBody[i].count}
`;
    }
    receipt +=
        `Price:${totalPrice}`;
    console.log(receipt);
    return receipt;
}
//打印收据
let printReceipt = (items) => {
    console.log(generateReceipt(items));
    return null;
}
module.exports = {
    getItemsAndCount, getAllItemsInfo, verifyTheExistenceOfTheItem, calculateThePriceOfItem,
    calculateTotalPrice, generateReceipt, printReceipt
};