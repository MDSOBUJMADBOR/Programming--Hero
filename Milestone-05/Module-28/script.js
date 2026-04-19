
// const person = {
//           name:"selim",
//           fruit:"dalim",
//           dish:"halim",
//           friends:["alim",'kalim',"lamim"],
//           isRich:false,
//           money:34000,
// };
// console.log(person);

// //JSON -> js object with Notation

// /**অবজেক্ট থেকে জেসন ফাইল বানায়
//  * object to JSON
//  * JSON.stringify -> JSON
//  */
// const personJSON = JSON.stringify(person);
// console.log("JSON File is : ", personJSON);

// /**জেসন থেকে অবজেক্ট ফাইল বানায় 
//  * JSON to object
//  * JSON.parse ->object
//  */
// const parseJSON = JSON.parse(personJSON);
// console.log(parseJSON);



const loadData = () =>{

const result= fetch('https://jsonplaceholder.typicode.com/todos/1')
.then((res) => res.json())
.then((data) => console.log(data))

}

// const loadPost = () => {
//           const url = "https://jsonplaceholder.typicode.com/posts"
//           fetch(url)
//           .then(res => res.json())
//           .then(json => {
//                     console.log(json);
//                     displayPost(json)
//           });

// }

// const displayPost = (posts) => {
//         posts.forEach(element => {
//           console.log(element);
//         });
// }