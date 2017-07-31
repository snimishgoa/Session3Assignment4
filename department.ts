export abstract class Department {
    public name: string;
    
    constructor (name) {
        this.name = name;
    }
    
    printName(): void { 
        console.log(`Department name is: ${this.name}`);
    }
    
    abstract printMeeting(): void;    
}