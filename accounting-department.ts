import {Department} from "./department";

export class AccountingDepartment extends Department {
    constructor(name: string){
        super(name);
    }

    printMeeting(): void{
        console.log(`Meeting for ${this.name} is scheduled at: ${Date.now()}`);        
    }

    checkAccounts(): void{
        console.log(`Accounts verified on ${Date.now()}`);
    }
}