//to compile: tsc
//to run js code: node dist/index.js

// console.log("hello typescript");
// let age: number = 20;
// if (age < 50) {
// 	age += 10;
// }
// console.log(age);

let sales: number = 123_456;
let course: string = "TypeScript";
let is_published: boolean = true;
let level; //any
let numbers: number[] = [1, 2, 3];
numbers.forEach((n) => n.toFixed(2)); //recommend proper methods

let user: [number, string] = [1, "Ava"]; //tuple, useful for 2 values

//enum: creating a new type? a set of named constant with their serial values
enum Size {
	Small = 1,
	Medium,
	Large,
}
let mySize: Size = Size.Medium;
console.log(mySize);

function calculateTax(income: number, taxYear?: number): number {
	if ((taxYear || 2022) < 2022) return income * 1.2;
	return income * 1.3;
}
console.log(calculateTax(10_000));

let employee: {
	readonly id: number;
	name: string;
	retire: (date: Date) => void;
} = {
	id: 1,
	name: "",
	retire: (date: Date) => {
		console.log(date);
	},
};

employee.name = "Ava";

//Type Allias
type Student = {
	id: number;
	name: string;
	graduate: (date: Date) => void;
};

let student1: Student = {
	id: 24,
	name: "Ava",
	graduate: (date: Date) => {
		console.log(date);
	},
};
console.log(student1);

//union types: 1 variable & one of the other type
function kgToLbs(weight: number | string): number {
	if (typeof weight === "number") {
		return weight * 2.2;
	} else {
		return parseInt(weight) * 2.2;
	}
}

console.log(kgToLbs(10));
console.log(kgToLbs("10kg"));

//ontersection type: multiple types
type Draggable = {
	drag: () => void;
};

type Resizable = {
	resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
	drag: () => {},
	resize: () => {},
};

//Literal (exact, specific)
type Quantity = 50 | 100;
let quantity: Quantity = 100;

type Metric = "cm" | "inch";

//optional chanining
type Customer = { birthday: Date };

function getCustomer(id: number): Customer | null | undefined {
	return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
console.log(customer?.birthday);
