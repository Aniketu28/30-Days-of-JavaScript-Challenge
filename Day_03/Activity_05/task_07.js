let year = 2016;
let flag;

if(year % 400 == 0){
   flag = true;
}else if(year % 100 == 0){
    flag = false;
}else if(year % 4 == 0){
    flag = true;
}else{
    flag = false;
}

if(flag){
    console.log("leap year");
}else{
    console.log("not a leap year");
}