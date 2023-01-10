const shortTermCost = 50; // days 1 - 3
const weekCost = 40; // days 4 - 7
const longTermCost = 30; // days 8 - ...

console.log(
    getRentalPrice(2), // 2 * 50 = 100
    getRentalPrice(5), // 3 * 50 + 2 * 40 = 230
    getRentalPrice(10),// 3 * 50 + 2 * 40 + 3 * 30 = 400
)

function getRentalPrice(numberOfDays) {
    if (numberOfDays <= 3) {
        return numberOfDays * 50;
    } else {
        let daysLeft = numberOfDays - 3;

        if (daysLeft <= 4) {
            return 3 * 50 + daysLeft * 40;
        } else {
            daysLeft = numberOfDays - 7;
            return 3 * 50 + 4 * 40 + daysLeft * 30;
        }
    }
}