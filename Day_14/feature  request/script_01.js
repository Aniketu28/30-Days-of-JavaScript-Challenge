class person{
    constructor(fname,age){
       this.fname = fname;
       this.age = age
    }

    gretting(){
        console.log("welcome"+" "+this.fname+" "+this.age);
    }
    
}

const person1 = new person("ANiket",24);

person1.gretting();