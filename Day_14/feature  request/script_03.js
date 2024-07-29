class Person {
    static count = 0;

    constructor(fname, age) {
        this.fname = fname;
        this.age = age;
        person.count++;
    }

    static greeting(fname, age) {
        console.log("Welcome " + fname + " " + age);
    }
}

const person1 = new Person("Aniket", 24);

Person.greeting(person1.fname, person1.age);  // Output: Welcome Aniket 24

console.log(person.count);