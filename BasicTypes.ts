/***************
*	BASIC TYPES  *
***************/
// BOOLEAN
let isDone: boolean = false

// NUMBER
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// STRING
// String variables (in TS) work like Java-Script strings

// ARRAY
let list: number[] = [1, 2, 3]
// generic array type
let anotherList: Array<number> = [1, 2, 3]

// TUPLE
// allow you to express an array with a fixed number of elements whose types are known, but need not be the same
let x: [string, number, object]
x = ["hello", 10, {key: 'something'}] // OK
// x = [10, "hello", {key: 'something'}] // Error

// ENUM
// enum is a way of giving more friendly names to sets of numeric values
enum Color {Red, Green, Blue} 
// result: 1, 2, 3
// enums begin numbering their members starting at 0. 
// You can change this by manually setting the value of one of its members
enum anotherColor {Red = 1, Green=3, Blue} 
// result: 1, 3, 4
anotherColor[4]
// result: Blue

// ANY
let notSure: any = 4
notSure = "maybe a string instead"
notSure = false // okay, definitely a boolean
// you may have an array but the array has a mix of different types
let anyList: any[] = [1, true, "free"]
// reuslt: 1, true, 'free'
anyList[1] = 100
// result: 1, 100, 'free'

// VOID
// The absence of having any type at all
function warnUser(): void {
	console.log("This is my warning message");
}
// Declaring variables of type void is not useful because you can only assign null 
// (only if --strictNullChecks is not specified, see next section) or undefined to them
let unusable: void = undefined
unusable = null // OK if `--strictNullChecks` is not given

// Null and Undefined
// null and undefined are subtypes of all other types - you can assign null and undefined to something like number

// NEVER
// The never type represents the type of values that never occur
// For instance, never is the return type for a function expression or 
// an arrow function expression that always throws an exception
// Function returning never must have unreachable end point
function error(message: string): never {
	throw new Error(message);
}
// Inferred return type is never
function fail() {
	return error("Something failed");
}
// Function returning never must have unreachable end point
function infiniteLoop(): never {
	while (true) {
	}
}

// OBJECT
// object is a type that represents the non-primitive type, i.e. anything that is not number,
// string, boolean, bigint, symbol, null, or undefined.

// TYPE ASSERTIONS
// Type assertions are a way to tell the compiler “trust me, I know what I’m doing.”
// Type assertions have two forms. One is the “angle-bracket” syntax:
let someValue: any = "this is a string"
let strLength: number = (<string>someValue).length
// And the other is the as-syntax:
let someOtherValue: any = "this is a string"
let strOtherLength: number = (someValue as string).length