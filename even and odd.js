// оббявление ф-ции (function declaration)
function isEven1(x) {
    return (x % 2) === 0;
 }

// function expression
const isEven2 = function(x) {
    return (x % 2) === 0;
};

console.log(
    isEven2(3)
);