function printLabel(labeledObj) {
    console.log(labeledObj.label);
}
printLabel({ label: 'Lorem ipsum' });
function printLabel2(labeledObj) {
    console.log(labeledObj.label);
}
printLabel({ label: 'Dolor sit amet' });
function createSquare(config) {
    return {
        color: config.color ? config.color : 'white',
        area: config.width ? config.width * config.width : 100,
    };
}
const square = createSquare({ color: 'red', width: 20 });
console.log({ square });
let point = { x: 10, y: 20 };
console.log({ point });
let myArray = [1, 2, 3, 4, 5];
let myReadOnlyArray = myArray;
myArray = myReadOnlyArray;
myArray = [...myReadOnlyArray];
console.log({ myArray, myReadOnlyArray });
let myFunction;
myFunction = function (text, subText) {
    return text.search(subText) > -1;
};
console.log({ my_search_func_result: myFunction('Lorem ipsum dolor', 'amet') });
let myStringArray;
myStringArray = ['Bob', 'Fred'];
let myStr = myStringArray[0];
console.log({ myStringArray, myStr });
//# sourceMappingURL=interfaces.js.map