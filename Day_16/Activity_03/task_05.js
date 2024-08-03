function createArray(num) {
    let arr = [];

    for (let i = 0; i < num; i++) {
        arr.push(function() {
            console.log(i);
        });
    }

    return arr;
}

let fun = createArray(10);

for (let i = 0; i < fun.length; i++) {
    fun[i](); 
}
