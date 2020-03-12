/* var */  
// var declarations are accessible anywhere within their containing function, module, namespace, or global scope
function f(shouldInitialize: boolean) {
	if (shouldInitialize) {
			var x = 10;
	}
	return x
}
f(true)  // returns '10'
f(false) // returns 'undefined'


/* const */
// the internal state of a const variable is still modifiable
const propVal = 10
const obj = {
	name: "John",
	props: propVal,
}
obj.name
// result = John
obj.name = 'Doe'
// result: Doe


/* Array destructuring */
// The simplest form of destructuring is array destructuring assignment
let input = [1, 2]
let [first, second] = input
first // 1
second // 2
// You can also use [first, second] = [second, first]

// And with parameters to a function:
function func([first, second]: [number, number]) {
    console.log(first);
    console.log(second);
}
func([1, 2])

let [one, ...rest] = [1, 2, 3, 4]
one // outputs 1
rest // outputs [ 2, 3, 4 ]

let [anotherOne] = [1, 2, 3, 4]
anotherOne // outputs 1

let [, sec, , fourth] = [1, 2, 3, 4]
sec // outputs 2
fourth // outputs 4


/* Tuple destructuring */
let tuple: [number, string, boolean] = [7, "hello", true];
let [a, b, c] = tuple // a: number, b: string, c: boolean
// It’s an error to destructure a tuple beyond the range of its elements:
// let [a, b, c, d] = tuple // Error, no element at index 3

// As with arrays, you can destructure the rest of the tuple with ..., to get a shorter tuple:
// let [a, ...bc] = tuple // bc: [string, boolean]
// let [a, b, c, ...d] = tuple // d: [], the empty tuple

// Or ignore trailing elements, or other elements:
// let [a] = tuple // a: number
// let [, b] = tuple // b: string


/* Object destructuring */
let o = {x: "foo", z: 12, y: "bar"}
let { x, z } = o
// if variables already declared you can ({ x, z } = { x: "baz", z: 101 })
// let { x, z }: { x: string, z: number } = o


/* Function declarations */
type C = { a: string, b?: number }
function testF({ a, b }: C): void {
    // ...
}


/* Spread  */
// allows you to spread an array into another array, or an object into another object.
let arrFirs = [1, 2]
let arrSec = [3, 4]
let bothPlus = [0, ...arrFirs, ...arrSec, 5]
// [0, 1, 2, 3, 4, 5]
// Spreading creates a shallow copy of first and second. They are not changed by the spread.

// You can also spread objects:
let defaults = { food: "spicy", price: "$$", ambiance: "noisy" }
let search = { ...defaults, food: "rich" }
// { food: "rich", price: "$$", ambiance: "noisy" }

// Object spread also has a couple of other surprising limits. First, 
// it only includes an objects’ own, enumerable properties. 
// Basically, that means you lose methods when you spread instances of an object:
class T {
  p = 12;
  m() {
  }
}
let v = new T();
let clone = { ...v }
clone.p // ok
clone.m() // error!
// Second, the TypeScript compiler doesn’t allow spreads of type parameters from generic functions. 
// That feature is expected in future versions of the language.