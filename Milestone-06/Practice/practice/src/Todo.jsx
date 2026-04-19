
// export default function ToDo({task,isDone}) {
// return(
//           <h1>Task:{task} </h1>
// )
// }


// export default function ToDo({task,isDone}) {
// if(isDone === true) {
//           return <h1>Done : {task}</h1>
// }
// else{
//           return <h1>Pending: {task}</h1>
// }
// }


// export default function ToDo ({task,isDone,time=0}) {
// if(isDone === true) {
//           return (<h1>Done : {task}  Duration : {time}</h1>)
// }
// return <h1>To be done : {task}</h1>;
// }


//conditional rendering : 3 ternary
// export default function ToDo({task,isDone,time=0}) {
// return isDone? <h1>Done: {task} time: {time}</h1> : <h1>Not Done : {task}</h1>
// }


//conditional rendering : 4 && 
//  export default function ToDo ({task,isDone,time =0}) {
//           return isDone && <h1>Done Tasks: {task} time:{time}</h1>
// }


//conditional rendering : 4 || 
//  export default function ToDo ({task,isDone,time =0}) {
//           return isDone || <h1>Done Tasks: {task} time:{time}</h1>
// }
