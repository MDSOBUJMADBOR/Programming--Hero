const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express(); 
// import dns from "dns";
// dns.setDefaultResultOrder("ipv4first");
const port = process.env.PORT || 8000;
app.use(cors());
app.use(express.json());

const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Macbook", price: 1500 },
];

// basic-express-crud
// MnA5MkNI1k5Tx0tl

// app.get("/products", (req, res) => {
//   res.send(products);
// });

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri = process.env.DB_URI;

// const uri = "mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@ac-dwieozd-shard-00-00.5pxwvij.mongodb.net:27017,ac-dwieozd-shard-00-01.5pxwvij.mongodb.net:27017,ac-dwieozd-shard-00-02.5pxwvij.mongodb.net:27017/?ssl=true&replicaSet=atlas-1c762x-shard-0&authSource=admin&appName=Cluster0"

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function server() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });

    const db = client.db("e-commerce");
    const productCollection = db.collection("products");

    // CRUD API
    // Get all products
    app.get("/products", async (req, res) => {
      const cursor = productCollection.find();
      const result = await cursor.toArray();
      //   console.log(result);

      res.send(result);
    });

    // Get a single product by ID
    app.get("/products/:id", async (req, res) => {
      const productId = req.params.id;

      const query = { _id: new ObjectId(productId) };

      //   console.log(query);

      const result = await productCollection.findOne(query);
      //   console.log(result);
      res.send(result);
    });

    // Add a new product
    app.post("/products", async (req, res) => {
      // add product
      //   console.log(req.body, "from body");
      const newProduct = req.body;
      const result = await productCollection.insertOne(newProduct);
      //   console.log(result);

      res.send(result);
    });

    // Update a product by ID
    app.patch("/products/:productId", async (req, res) => {
      const { productId } = req.params;
      const updatedData = req.body;
      //   console.log(productId, updatedData);

      //   {
      //     price: 34,
      //     description: "This is a new product",
      //   }
      const query = { _id: new ObjectId(productId) };
      const updatedDoc = {
        $set: {
          ...updatedData,
        },
      };

      const result = await productCollection.updateOne(query, updatedDoc);

      res.send(result);
    });

    // Delete a product by ID
    app.delete("/products/:productId", async (req, res) => {
      const productId = req.params.productId;
      //   console.log(productId);
      const query = { _id: new ObjectId(productId) };
      const result = await productCollection.deleteOne(query);
      //   console.log(result);
      res.send(result);
    });

    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
server().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello, this is my first server.");
});

app.listen(port, () => {
  console.log(`Server is running on ${port} PORT`);
});
