class Person {
    
    static count = 0;

    constructor(fname, age) {
        this.fname = fname;
        this.age = age;
        Person.count++;
    }

    static greeting(fname, age) {
        console.log("Welcome " + fname + " " + age);
    }
}

const person1 = new Person("Aniket", 24);
const person2 = new Person("ram", 23);

Person.greeting(person1.fname, person1.age);  // Output: Welcome Aniket 24
Person.greeting(person2.fname, person2.age);

console.log(Person.count);