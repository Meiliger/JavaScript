let amount = 10;
const cookiePrice = 7;
const candyPrice = 8;

amount = amount - cookiePrice;

console.log('Amount is', amount);

const hasEnoughMoney = amount >= candyPrice;

const type = typeof amount;
console.log("Constanta type has", type, "type of data");

console.log( "Type of data is", typeof hasEnoughMoney)

console.log('Has enough money', ' - ', hasEnoughMoney);

if (hasEnoughMoney) {
    console.log('I have enough money')
} else {
    console.log('I do not like sweets')
}
