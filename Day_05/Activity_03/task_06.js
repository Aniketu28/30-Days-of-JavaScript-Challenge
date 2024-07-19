// char present in string

let checkString = (str,char)=>{
   for(i=0;i<str.length;i++){
      if(str[i]==char){
         return true;
      }
   }
   return false;
}

console.log(checkString("Aniket","i"));

