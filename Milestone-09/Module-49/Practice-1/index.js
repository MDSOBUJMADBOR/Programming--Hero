const express = require('express')
const app = express()
const port = process.env.PORT ||  8008;


app.get('/', (req, res) => {
  res.send('Hello World!')
})
const users = [
{id:1,name: "john Doe",email: "sobuj660@gmail.com"},
{id:2,name: "sobuj",email: "sobuj660@gmail.com"},
{id:3,name: "sathi",email: "sobuj660@gmail.com"}
]

app.get("/users",(req, res) => {
res.send(users)
})

app.post("/products" , (req,res) => {
res.send("sobuj")
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
