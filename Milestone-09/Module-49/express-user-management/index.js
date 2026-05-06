const express = require("express")
const app = express();
const port = process.env.PORT || 8000;

app.get("/", (req,res) => {
          res.send("Hello from users World ! ")
})

const users = [
          {id: 1, name: "john Doe", email: "sobuj660@gmail.com"},
          {id: 2, name: "sobuj", email: "sobuj660@gmail.com"},
          {id: 3, name: "john ", email: "sobuj660@gmail.com"}
];


app.get("/users", (req, res) => {
          res.send(users);
})
app.get("/products", (req,res) => {
          res.send("products are jumping up")
})

app.listen(port , () => {
          console.log(`server is running on port ${port}`);
})