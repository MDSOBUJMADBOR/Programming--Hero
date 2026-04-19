const employee = {
          name: 'John Doe',
          1: 'desk one',
          'home-address': '123 Main st',
          salary:5000,
          family:{
                    father:'Richard Doe',
                    mother:{
                              name:'Jane Doe',
                              age:55
                    }
          },
          position:'Software Engineer'
}
// optional chaining
console.log(employee.family?.mother?.age);