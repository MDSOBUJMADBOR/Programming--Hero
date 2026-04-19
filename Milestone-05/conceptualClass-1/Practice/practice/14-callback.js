const greet = (name,age,cb) =>{
          console.log('My Name : ' ,name,age,);
          cb()
}

const say = (message) => {
      message = 'i am sobuj';
      console.log(message);
}
greet('sobuj',26,say)



