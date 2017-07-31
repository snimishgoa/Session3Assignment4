"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Department {
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log(`Department name is: ${this.name}`);
    }
}
exports.Department = Department;
