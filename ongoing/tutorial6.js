/* 

 merge two array

  understand caser and solution with whiteboard 
  make three arrays

   use 2 different loop to merge element
    shortcut for reverge array element 
*/

let data1 = [9, 12, 13, 50];
let data2 = [23, 32, 43, 55];

 let result=[];
for(let i=0;i<data1.length;i++ ){
    result[i]=data1[i];
}
for(let i=0;i<data2.length;i++){
    result[data1.length+i]=data2[i]
}
  console.log(result)