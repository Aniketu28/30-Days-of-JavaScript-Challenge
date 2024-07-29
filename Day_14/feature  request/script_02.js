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

class student extends person{
    constructor(fname, age, studentId){
        super(fname,age);
        this.studentId = studentId;
    }

    get studentIdGet(){
        return this.studentId
    }

    gretting(){
        console.log(this.fname,this.age,this.studentId);
    }
}

const student1 = new student("ANiket",24,1);
student1.gretting();
