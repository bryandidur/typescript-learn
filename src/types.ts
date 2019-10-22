/*
|--------------------------------------------
| Basic Data Types
|--------------------------------------------
|
*/
let isDone: boolean = true;
let number: number = 10;
let color: string = 'red';
let sentence: string = `Is done? ${isDone}; Number: ${number}; Color: ${color};`; // The types, as in Javascript, have the prototype method "toString"
// let numberObj: number; // As primitive type
// numberObj = new Number(10); // Error: Type 'Number' is not assignable to type 'number'
let numberObj: Number; // As a object
numberObj = new Number(10); // Correct!

console.log({
    is_done_type: typeof isDone,
    number_obj_type: typeof numberObj,
    sentence,
});

/*
|--------------------------------------------
| Arrays
|--------------------------------------------
|
*/
// let numbersArray: number[]; // First way
let numbersArray: Array<number>; // Second way
// numbersArray = ['lorem', 11, 'ipsum', 13]; // Error: Type 'string' is not assignable to type 'number'
numbersArray = [10, 11, 12, 13]; // Correct!

console.log({ numbersArray });

/*
|--------------------------------------------
| Tuples
|--------------------------------------------
|
*/
let tuple: [number, string];
// tuple = ['John', 30]; // Error: Type 'string' is not assignable to type 'number'
tuple = [30, 'John']; // Correct!
// tuple[2] = 'lorempisum'; // Error: Tuple type '[number, string]' of length '2' has no element at index '2'

console.log({ tuple });

/*
|--------------------------------------------
| Enums
|--------------------------------------------
|
*/
// enum Color {Red, Green, Blue}; // Defining this way, the enum item values will be auto assigned to numeric values starting in 0
// enum Color {Red = 10, Green = 20, Blue = 30}; // The item values can be manually set
enum Color {Red = 10, Green, Blue}; // If only the first item value is set, the next item values will be auto assigned by incrementing the first value: {Red = 10, Green = 11, Blue = 12}
// let enumeratedColor: Color = 'Green'; // Error: Type '"Green"' is not assignable to type 'Color'
let enumeratedColor: Color = Color.Green; // The value will be 11
let enumeratedColorName: string = Color[11]; // Accessing the enum items by its values, will return the key name. In this case, 'Green'

console.log({ numbersArray, tuple, enumeratedColor, enumeratedColorName });

/*
|--------------------------------------------
| Any
|--------------------------------------------
|
*/
let notSure: any = 4;
notSure = 'lorem ipsum';
notSure = true;
let notSure2: any = 10;
notSure2.toFixed(2); // You can call arbitrary methods from a type 'any', knowing that the compiler will not check the value. Is is ok
let notSure3: Object = 20; // A generic type 'Object', will behavior like any. But you cannot call arbitrary methods on then. Even if it really exists.
// notSure3.toFixed(2); // Error: Property 'toFixed' doesn't exist on type 'Object'
let anyArray: any[] = ['lorem', 10, true, 'ipsum', {}];

console.log({ notSure, notSure2, notSure3, anyArray });

/*
|--------------------------------------------
| Void
|--------------------------------------------
|
*/
function warnUser(message: string): void // Commonly used as a 'none' return value of function or class method
{
    console.log(`WARN: ${message}`);
}
warnUser('You could not do this action!');

// Another option is to define a variable of type void, that the only accepted values will be 'undefined' or 'null'
let unusable: void = undefined;
unusable = null;
// unusable = 10; // Error: Type '10' is not assignable to type 'void'

console.log({ unusable });

/*
|--------------------------------------------
| Null and Undefined
|--------------------------------------------
|
*/
// This is an option but not commonly useful.
let u: undefined = undefined;
let n: null = null;

// By default 'null' and 'undefined' are subtypes of all other types. That means you can assign null and undefined to something like number
let nullableNumber: number = null; // It also can be assigned to 'undefined', as it would be if its value is not initialized

console.log({ nullableNumber });

/*
|--------------------------------------------
| Never
|--------------------------------------------
|
*/
// Function returning never must have unreachable end point
function error(message: string): never
{
    throw new Error(message);
}

// Inferred return type is never
function fail()
{
    return error('Something has failed!');
}

// Function returning never must have unreachable end point
// function infiniteLoop(): never
// {
//     while (true) {
//         // Do something
//     }
// }

/*
|--------------------------------------------
| Object
|--------------------------------------------
|
*/
function ensureObject(obj: object | null): object
{
    return obj instanceof Object ? obj : {};
}

console.log({
    ensure_object_object: ensureObject({ name: 'John' }),
    ensure_object_null: ensureObject(null),
    // ensure_object_number: ensureObject(10), // Error: Argument of type '10' is not assignable to parameter of type 'object'
});

/*
|--------------------------------------------
| Type Assertions (Casting)
|--------------------------------------------
|
*/
let userName: any = 'John Doe';
// let userName: any = 1000; // The line below does not work with number, the casting of 'userNameLength' will not happen. So the value will be undefined (Why?)
let userNameLength: number = (userName as string).length;

console.log({ userName, userNameLength });
