const person = {
          name:'sodor uddin',
          age:25,
          profession:'devdloper',
          salary:25000,
          married:true,
          'fav places':['bandorban','saintmartin','kuakata']
}
person.salary=30000;
person['age']=26;
person['fav places']=['maldives','bali','pataya'];
console.log(person);


const propName = 'profession';
person[propName] ='devops';
console.log(person);
 