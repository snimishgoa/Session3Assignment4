"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const department_1 = require("./department");
class QualityDepartment extends department_1.Department {
    constructor(name) {
        super(name);
    }
    printMeeting() {
        console.log(`Meeting for ${this.name} is scheduled at: ${Date.now()}`);
    }
    checkQuality() {
        console.log(`Quality check successful`);
    }
}
exports.QualityDepartment = QualityDepartment;
