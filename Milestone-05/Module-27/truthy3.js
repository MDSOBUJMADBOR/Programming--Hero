

//Truthy values
let data;
data='hello'
data='0';
data=' ';
data=true;
data={}
data=[]
data='false';
data=1;
if(data){
          // console.log("Truthy");
}
//Falsy values
data=false;
data=0;
data=-0;
data='';
data=null;
data=undefined;
data=NaN;

// else{
          // console.log("Falsy");
// }





let price = true;
if(!price){
          // console.log('Falsy');
}



let value = 9;
if(!!value){
          console.log('Truthy');
}