const nayok={
          name:'Sakib Khan',
          id:121,
          address:'movie cinema',
          isSingle:true,
          friends:['apu','raaz','salman','aamir'],
          mavies:[{name:'no.1',year:2015},{name:'king Khan',year:2018}],
          act:function(){
                    console.log('acting like sakib khan');
          },
          car:{
                    brand:'tesla',
                    price:500000,
                    made:2025,
                    manufacturer:{
                              name:'tesla',
                              ceo:'Elon Mask',
                              country:'USA'
                    }
          }
}
// console.log(student.car);
console.log(nayok.act);
nayok.act();



