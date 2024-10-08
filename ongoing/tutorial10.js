/*

 what is a recursion data structure 

  example
   while loop with array of string
   


 function aafai lai call garne lai recursion vanixa


*/
 
 function factorial( value){
     if(value===0){
         return 1;
     }

      return value*factorial(value-1);
      
 }
  let value=6

  console.log(factorial(value))
