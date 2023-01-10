function buildHouse(numberOfFloors, colour) {
    const house = `${colour} ${numberOfFloors}-floors house`;

    return house;
}

const smallHouse = buildHouse(2, 'red');
const bigHouse = buildHouse(9, 'blue');
const scyScraper = buildHouse(90, 'grey');

console.log(smallHouse);
console.log(bigHouse);
console.log(scyScraper);