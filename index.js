require("dotenv").config();
const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");

const app = express();
const port = 5000;

// middleware;hi
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://khair:khair@cluster0.2vil1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
console.log("pass ok");

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function run() {
  try {
    await client.connect();
    const database = client.db("carMechanic");
    const servicesCollection = database.collection("service");
    // POST API
    app.post("/service", async (req, res) => {
      const service = req.body;
      console.log("hit the post api", service);
      //   const result = await servicesCollection.insertOne(service);
      res.send("hitted the post");
    });
  } finally {
  }
}
app.get("/", (req, res) => {
  res.send("Running Genius Server");
});

app.listen(port, () => {
  console.log("Runnig Genius Server on port", port);
});
run().catch(console.dir);
