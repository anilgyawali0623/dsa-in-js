// sorting pratice
 let data=[424,52,35,12,45,12,55,1,251,1];
  for(let i=0;i<data.length;i++){
     for(let j=0;j<data.length;j++){
         if(data[j]>data[j+1]){
             let temp= data[j];
             data[j]=data[j+1];
             data[j+1]=temp;
         }
     }
  }

   console.log(data)