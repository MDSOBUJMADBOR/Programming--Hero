const king ={name:'Mufasa',age:55,kingdom:'Pride Lands'};
//all no changle object
 Object.freeze(king)
// only update. no add . no delete
Object.seal(king)
//object from delete
delete king.age;
delete king.kingdom
//object add 
king.queen = 'Sarabi';
//object value change 
king.name = 'King Simba';
console.log(king);