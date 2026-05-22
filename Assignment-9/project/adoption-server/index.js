const express = require('express');
const dotenv = require('dotenv');
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 8080;
const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();

    const db = client.db("PetAdoption");
    const coursesCollection = db.collection("courses");

    // ✅ GET API
    app.get("/courses", async (req, res) => {
      const result = await coursesCollection.find().toArray();
      res.send(result);
    });


    
    console.log("MongoDB Connected ✅");

  } catch (error) {
    console.log(error);
  }
}

run();

// ✅ server start (IMPORTANT)
app.listen(port, () => {
  console.log(`Server running on port ${port} 🚀`);
});