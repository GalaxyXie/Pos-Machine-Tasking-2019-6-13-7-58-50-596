let getAllItemsInfo =()=> {
    let allItemsInfo=[
                          {"id": "0001", "name" : "Coca Cola", "price": 3},
                          {"id": "0002", "name" : "Diet Coke", "price": 4},
                          {"id": "0003", "name" : "Pepsi-Cola", "price": 5},
                          {"id": "0004", "name" : "Mountain Dew", "price": 6},
                          {"id": "0005", "name" : "Dr Pepper", "price": 7},
                          {"id": "0006", "name" : "Sprite", "price": 8},
                          {"id": "0007", "name" : "Diet Pepsi", "price": 9},
                          {"id": "0008", "name" : "Diet Mountain Dew", "price": 10},
                          {"id": "0009", "name" : "Diet Dr Pepper", "price": 11},
                          {"id": "0010", "name" : "Fanta", "price": 12}
                      ];
    return allItemsInfo;
}

let getItemsAndCount = items => {
    let itemsAndCount={};
        for(let i=0;i<items.length;i++)
        {
            if(itemsAndCount[items[i]]){
                itemsAndCount[items[i]]++;
            }else{
                itemsAndCount[items[i]]=1;
            }
        }
        console.log(itemsAndCount);
        return itemsAndCount;
}
let calculateTotalPrice = receiptBody => {
    let totalPrice=0;
   for(let i=0;i<receiptBody.length;i++)
   {
       totalPrice+=receiptBody[i].price;
   }
   return totalPrice;
}
let calculateThePriceOfItem = (itemsAndCount,allItemsInfo )=> {
     let receiptBody=new Array();
     let itemsId=Object.keys(itemsAndCount);
     console.log(itemsId);
         for(let i=0;i<itemsId.length;i++)
         {

             let lineOfReceipt=new Object();
             for(let j=0;j<allItemsInfo.length;j++){
                 if(itemsId[i]==allItemsInfo[j].id){
                     lineOfReceipt.name=allItemsInfo[j].name;
                     lineOfReceipt.price=allItemsInfo[j].price;
                     lineOfReceipt.count=itemsAndCount[itemsId[i]];
                     lineOfReceipt.total=allItemsInfo[j].price*itemsAndCount[itemsId[i]];
                 }
             }
             receiptBody.push(lineOfReceipt);
         }
         console.log(receiptBody);
         return receiptBody;
 }

let generateReceipt = (items) => {
    let allItemsInfo=getAllItemsInfo();
    let itemsAndCount=getItemsAndCount(items);
    let receiptBody=calculateThePriceOfItem(itemsAndCount,allItemsInfo);
    let totalPrice=calculateTotalPrice(receiptBody);
    let receipt=
    `Receipts
     ------------------------------------------------------------`;
    for (var i=0;i<receiptBody.length;i++){
        receipt+=receiptBody[i].name+" "+receiptBody[i].;
    }
   return
}

module.exports = {getItemsAndCount,getAllItemsInfo,calculateThePriceOfItem,calculateTotalPrice,generateReceipt};