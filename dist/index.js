"use strict";
// Basic Types
let id = 5;
let company = "Stu";
let isPublished = true;
let x = "Howdy";
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, "Howdy"];
// Tuple
let person = [1, "Stu", true];
// Tuple Array
let employee;
employee = [
    [1, "Stu"],
    [2, "Chili"],
    [3, "Katie"],
];
// Union
let pid;
pid = 22;
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: "Stu",
};
// Type Assertion
let cid = 1;
// let customerID = <number>cid;
let customerID = cid;
// Functions
function addNum(x, y) {
    return x + y;
}
// Void
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: "Stu",
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const braz = new Person(1, "Braz");
const mizzy = new Person(2, "Mizzy Joman");
// Subclasses
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, "Chuck", "Developer");
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(["Stu", "Chili", "Katie"]);
strArray.push("howdy");
