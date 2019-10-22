/*
|--------------------------------------------
| Classes And Interfaces
|--------------------------------------------
|
*/
// interface UserInterface
// {
//     public firstName: string;
//     public lastName: string;
//     protected fullName: string;

//     getFullName(): string;
// }

// class User
// {
//     protected fullName: string;

//     constructor(public firstName: string, public lastName: string)
//     {
//         this.fullName = firstName + ' ' + lastName;
//     }

//     getFullName(): string
//     {
//         return this.fullName;
//     }
// }

// function sayHello(user: UserInterface): void
// {
//     console.log('Hello, ' + user.getFullName());
// }

// sayHello(new User('Bryan', 'Didur'));


function printLabel(labeledObj: { label: string }): void
{
    console.log(labeledObj.label);
}
// printLabel({}); // Error: Argument of type '{}' is not assignable to parameter of type '{ label: string; }'
// printLabel({ size: 10, label: 'Lorem ipsum' }); // Error:  Argument of type '{ size: number; label: string; }' is not assignable to parameter of type '{ label: string; }'
printLabel({ label: 'Lorem ipsum' }); // Correct

// --------------------------------------------------------------
// --------------------------------------------------------------
// --------------------------------------------------------------
interface LabeledObj
{
    label: string;
}

function printLabel2(labeledObj: LabeledObj): void
{
    console.log(labeledObj.label);
}
printLabel({ label: 'Dolor sit amet'});

// --------------------------------------------------------------
// --------------------------------------------------------------
// --------------------------------------------------------------
interface SquareConfig
{
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): { color: string, area: number }
{
    return {
        color: config.color ? config.color : 'white',
        area: config.width ? config.width * config.width : 100,
    };
}
// const square = createSquare({}); // Correct, 'color' and 'width' properties are optional
// const square = createSquare({ colour: 'red', width: 20 }); // Error: Object literal may only specify known properties, but 'colour' does not exist in type 'SquareConfig'
// const square = createSquare({ colour: 'red', width: 20 } as SquareConfig); // Correct, since we are casting the argument to an explict instance of SquareConfig
const square = createSquare({ color: 'red', width: 20 }); // Correct, since we are providing the correct object interface

console.log({ square });

// --------------------------------------------------------------
// --------------------------------------------------------------
// --------------------------------------------------------------
interface Point
{
    readonly x: number;
    readonly y: number;
}

let point: Point = { x: 10, y: 20 };
// point.x = 5; // Error:  Cannot assign to 'x' because it is a read-only property

console.log({ point });

// --------------------------------------------------------------
// --------------------------------------------------------------
// --------------------------------------------------------------

let myArray: number[] = [1, 2, 3, 4, 5];
let myReadOnlyArray: ReadonlyArray<number> = myArray;
// myReadOnlyArray[0] = 11; // Error
// myReadOnlyArray.push(6); // Error
// myReadOnlyArray.length = 10; // Error
// myArray = myReadOnlyArray; // Error
myArray = myReadOnlyArray as number[]; // Correct, because we are casting the ReadonlyArray to a normal array of numbers
myArray = [ ...myReadOnlyArray ]; // Same as the example above, but in the ES6 style

console.log({ myArray, myReadOnlyArray });

// --------------------------------------------------------------
// --------------------------------------------------------------
// --------------------------------------------------------------

interface SearchFunctionInterface
{
    (haystack: string, needle: string): boolean;
}

let myFunction: SearchFunctionInterface;

// myFunction = function (haystack: string, needle: string): boolean {
//     return haystack.search(needle) > -1;
// };

// The argument names doesn't need to have the same names as the interface defines
// myFunction = function (text: string, subText: string): boolean {
//     return text.search(subText) > -1;
// };

// The argument types can be omitted (after defining the variable type to be an instance of SearchFunctionInterface), so it will automatically handled and interpreted as its interface definition
myFunction = function (text, subText) {
    return text.search(subText) > -1;
};

// console.log({ my_search_func_result: myFunction(100, 20) }); // Error: Argument of type '100' is not assignable to parameter of type 'string'
// console.log({ my_search_func_result: myFunction('Lorem ipsum dolor', 'ipsum') }); // true
console.log({ my_search_func_result: myFunction('Lorem ipsum dolor', 'amet') }); // false

// --------------------------------------------------------------
// --------------------------------------------------------------
// --------------------------------------------------------------

interface StringArray
{
    [index: number]: string;
}

let myStringArray: StringArray;
myStringArray = ['Bob', 'Fred'];

let myStr: string = myStringArray[0];

console.log({ myStringArray, myStr });
