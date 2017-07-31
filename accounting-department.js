"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const department_1 = require("./department");
class AccountingDepartment extends department_1.Department {
    constructor(name) {
        super(name);
    }
    printMeeting() {
        console.log(`Meeting for ${this.name} is scheduled at: ${Date.now()}`);
    }
    checkAccounts() {
        console.log(`Accounts verified on ${Date.now()}`);
    }
}
exports.AccountingDepartment = AccountingDepartment;
