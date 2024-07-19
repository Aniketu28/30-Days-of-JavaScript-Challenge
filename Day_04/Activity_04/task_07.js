// print pattern
/*  
    *
    * *
    * * *
    * * * *
    * * * * *
*/


// for(let i = 0 ; i < 5; i++){
//    for(let j = 0; j <= i; j++){
//        console.log("*");
//    }
//    console.log("\n");
// }

for (let i = 0; i < 5; i++) {
    let line = "";
    for (let j = 0; j <= i; j++) {
        line += "* ";
    }
    console.log(line);
}
