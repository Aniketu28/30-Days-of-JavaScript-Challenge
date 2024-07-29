class person{
    constructor(fname,lname){
       this.fname = fname;
       this.lname = lname
    }

    get gretting(){
        console.log("welcome"+" "+this.fname+" "+this.lname);
    }

}

const person1 = new person("ANiket","ugare");

person1.gretting