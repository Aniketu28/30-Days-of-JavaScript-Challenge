class person{
    constructor(fname,age){
       this.fname = fname;
       this.age = age
    }

    gretting(){
        console.log("welcome"+" "+this.fname+" "+this.age);
    }

    set setAge(age){
        this.age = age
    }
    
}

const person1 = new person("ANiket",24);

person1.setAge = 20;

person1.gretting();