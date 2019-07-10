const posMachine = require('../posMachine.js');
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
it('should return items and count', () => {
    let itemsAndCount = {"0001": 1, "0003": 2, "0005": 1};
    expect(posMachine.getItemsAndCount(['0001', '0003', '0005', '0003'])).toStrictEqual(itemsAndCount);
});
it('should return receiptBody', () => {
    let itemsAndCount = {"0001": 2};
    let receiptBody = [{'name': 'Coca Cola', 'price': 3, 'count': 2, 'total': 6}];
    expect(posMachine.calculateThePriceOfItem(itemsAndCount, allItemsInfo)).toStrictEqual(receiptBody);
});
it('should return all price', () => {
    let receiptBody = [{'name': 'Coca Cola', 'price': 3, 'count': 2, 'total': 6}];
    expect(posMachine.calculateTotalPrice(receiptBody)).toStrictEqual(6);
});
it('should return all items info', () => {

    expect(posMachine.getAllItemsInfo()).toStrictEqual(allItemsInfo);
});

it('should return Receipt info', () => {
    let items = ['0001', '0003', '0005', '0003'];
    let receipt =
        `Receipts
------------------------------------------------------------
Coca Cola 3 1
Pepsi-Cola 5 2
Dr Pepper 7 1
Price:20`;
    expect(posMachine.generateReceipt(items)).toStrictEqual(receipt);
});
it('should return Error Receipt info', () => {
    let items = ['0001', '003', '0005', '0003'];

    expect(posMachine.generateReceipt(items)).toStrictEqual('[ERROR]:Here has id not exsist');
});

it('should return error message when data is not valid', () => {
    let items = ['0001', '003', '0005', '0003'];
    expect(posMachine.verifyTheExistenceOfTheItem(items)).toBe('[ERROR]:Here has id not exsist');
});
it('should return right message when data is not valid', () => {
    let items = ['0001', '0003', '0005', '0003'];
    expect(posMachine.verifyTheExistenceOfTheItem(items)).toBe('right');
});

