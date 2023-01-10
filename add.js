let cashInWallet = 50;
let age = 25;

const pcice = 40;
const ageLimit = 18;

const isAllowed = age >= ageLimit;
const hasEnoughtMoney = cashInWallet >= pcice;

const canBay = isAllowed && hasEnoughtMoney;

console.log(canBay);

if (canBay) {
    console.log('go ahead')
} else {
    console.log('save your money')
}