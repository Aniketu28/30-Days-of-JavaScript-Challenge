class person{
    constructor(fname,lname){
       this.fname = fname;
       this.lname = lname
    }

    get gretting(){
        console.log("welcome"+" "+this.fname+" "+this.lname);
    }

    set setAge(fullname){
        let fulname = fullname.split(" ");
        this.fname = fulname[0];
        this.lname = fulname[1];
    }  
}

const person1 = new person("ANiket",24);

person1.setAge = "Aniket ugare";

person1.gretting;