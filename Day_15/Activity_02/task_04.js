function user(fname){
    return function greet(){
        return `welcome ${fname}`;
    }
}

let user1 = user("Aniket");

console.log(user1());
