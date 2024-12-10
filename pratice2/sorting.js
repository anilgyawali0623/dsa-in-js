//  we will pratice all the sorting algorithem in this

//  let array= [24,124,353,53,254]
//  let temp;
//  for(let i=0;i<array.length;i++){
//     for(let j=0;j<array.length;j++){
   
//     if(array[j]>array[j+1]){
//         temp=array[j];
//         array[j]=array[j+1];
//         array[j+1]=temp
//     }
//     }
//  }
//   console.log(array)

//  recursion

//    function recursion(value){
//      if(value===0){
//          return 1;
//      }
//       return value * recursion(value-1);
//    }
//     console.log(recursion(4));

//  let data=[23,4,5,2,1,3,5];
//    let temp;
//   function reverseArray(data, start, end){
//      if(start<=end){
//  temp=data[start];
//  data[start]=data[end];
//  data[end]=temp;
//  reverseArray(data, start+1, end-1)
//      }
//   }
//    reverseArray(data,0,data.length-1);
//     console.log(data)



//  push and pop

//  let array=[];
//   let length= array.length;
//   function push(value){
// array[length]= value;
//  length+=1;

//   }

//    function pop(){
//      if(array.length>0){
//       length-=1;
//       array.length=length;
//      }
//    }

//     push(23);
//     push(23);
//     push(23);
//     push(23);
//     push(34);
// console.log(array)
// pop();
//  console.log(array)