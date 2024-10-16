
 let data=[1,2,3,4,5];
  let position=3;
   let newData=45;
for(let i=data.length-1 ;i>=0;i--){
     if(i>=position){
         data[i+1]=data[i];
          if(i===position){
            data[i]= newData
          }
     }
}
 console.log(data)