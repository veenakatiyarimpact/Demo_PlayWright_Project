abstract class Employee2 {
  constructor(private firstName: string, private lastName: string) {}

  abstract getSalary(): number;

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}


class dentist extends Employee2{
    salary : number;
    constructor(fName : string, lName : string, salary : number){
        super(fName , lName);
        this.salary = salary
    }

    getSalary(): number{
        return this.salary;
        }
}


let vk1 = new dentist("Veena","Katiyar",25000);
console.log(vk1.getSalary());