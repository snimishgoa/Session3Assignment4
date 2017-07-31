import {Department} from "./department";

export class QualityDepartment extends Department {
    constructor(name: string){
        super(name);
    }

    printMeeting(): void{
        console.log(`Meeting for ${this.name} is scheduled at: ${Date.now()}`);        
    }

    checkQuality(): void{
        console.log(`Quality check successful`);
    }
}