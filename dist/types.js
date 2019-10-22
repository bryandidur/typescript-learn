let isDone = true;
let number = 10;
let color = 'red';
let sentence = `Is done? ${isDone}; Number: ${number}; Color: ${color};`;
let numberObj;
numberObj = new Number(10);
console.log({
    is_done_type: typeof isDone,
    number_obj_type: typeof numberObj,
    sentence,
});
let numbersArray;
numbersArray = [10, 11, 12, 13];
console.log({ numbersArray });
let tuple;
tuple = [30, 'John'];
console.log({ tuple });
var Color;
(function (Color) {
    Color[Color["Red"] = 10] = "Red";
    Color[Color["Green"] = 11] = "Green";
    Color[Color["Blue"] = 12] = "Blue";
})(Color || (Color = {}));
;
let enumeratedColor = Color.Green;
let enumeratedColorName = Color[11];
console.log({ numbersArray, tuple, enumeratedColor, enumeratedColorName });
let notSure = 4;
notSure = 'lorem ipsum';
notSure = true;
let notSure2 = 10;
notSure2.toFixed(2);
let notSure3 = 20;
let anyArray = ['lorem', 10, true, 'ipsum', {}];
console.log({ notSure, notSure2, notSure3, anyArray });
function warnUser(message) {
    console.log(`WARN: ${message}`);
}
warnUser('You could not do this action!');
let unusable = undefined;
unusable = null;
console.log({ unusable });
let u = undefined;
let n = null;
let nullableNumber = null;
console.log({ nullableNumber });
function error(message) {
    throw new Error(message);
}
function fail() {
    return error('Something has failed!');
}
function ensureObject(obj) {
    return obj instanceof Object ? obj : {};
}
console.log({
    ensure_object_object: ensureObject({ name: 'John' }),
    ensure_object_null: ensureObject(null),
});
let userName = 'John Doe';
let userNameLength = userName.length;
console.log({ userName, userNameLength });
//# sourceMappingURL=types.js.map