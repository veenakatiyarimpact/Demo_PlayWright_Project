class Person{
    constructor(readonly birthDate : Date){
        this.birthDate = birthDate;
    }

    getDOB(){
        console.log(`this.${this.birthDate}`);
    }
}

let p1:Person = new Person(new Date(1977,12,18));
p1.getDOB();

// p1.birthDate = new Date(1991, 12, 25); // Compile error