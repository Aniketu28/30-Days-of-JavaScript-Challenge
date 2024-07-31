function Id(){
    let id = 1;
    return function genratId(){
        return id++;
    }
}

let id = Id();

console.log(id());
console.log(id());
console.log(id());
