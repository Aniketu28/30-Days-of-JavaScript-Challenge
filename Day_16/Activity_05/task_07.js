function add(a=0,b=0){
    let result = a + b;
     
    return function(){
        console.log(result);
    }
}

let memorise = add(5,5);
memorise()
