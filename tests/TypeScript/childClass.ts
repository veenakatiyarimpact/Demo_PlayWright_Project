import Person1 from "./getterSettere";


class Employee extends Person1 {
    constructor(
        firstName: string,
        lastName: string,
        private jobTitle: string,
        age: number
    ) {
        super(age, firstName, lastName);
    }

    public get JobTitle(): string {
        console.log("Job title => " + this.jobTitle);
        return this.jobTitle;
    }
}

let vk = new Employee("Veena","Katiyar","Lead Automation QA",45);
vk.JobTitle;
console.log(vk.firstName);
console.log(vk.lastName);