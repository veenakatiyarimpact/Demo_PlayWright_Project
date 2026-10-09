class Employee1 {
    private static headcount: number = 0;

    constructor(
        private firstName: string,
        private lastName: string,
        private jobTitle: string) {

        Employee1.headcount++;
    }

    public static getHeadcount() {
        return Employee1.headcount;
    }
}

let vk = new Employee1("Vina","Katiyar","QA Engineer");
console.log(Employee1.getHeadcount());

let rk = new Employee1("Vijay","Katiyar","Sr. QA Engineer");
console.log(Employee1.getHeadcount());