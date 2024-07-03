"use strict";
let sales = 123456;
let course = "TypeScript";
let is_published = true;
let level;
let numbers = [1, 2, 3];
numbers.forEach((n) => n.toFixed(2));
let user = [1, "Ava"];
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
let mySize = Size.Medium;
console.log(mySize);
function calculateTax(income, taxYear) {
    if ((taxYear || 2022) < 2022)
        return income * 1.2;
    return income * 1.3;
}
console.log(calculateTax(10000));
let employee = {
    id: 1,
    name: "",
    retire: (date) => {
        console.log(date);
    },
};
employee.name = "Ava";
let student1 = {
    id: 24,
    name: "Ava",
    graduate: (date) => {
        console.log(date);
    },
};
console.log(student1);
function kgToLbs(weight) {
    if (typeof weight === "number") {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
console.log(kgToLbs(10));
console.log(kgToLbs("10kg"));
//# sourceMappingURL=index.js.map