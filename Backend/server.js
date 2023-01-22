require("./database.js");
const express = require("express");
const cors = require("cors");
const authentication = require("./api/authentication");
const posts = require("./api/posts");

require("dotenv").config();

const app = express();
app.use(express.json());

const url = process.env.MONGODB_URL;
const client = new MongoClient(url);

const dbName = "test";

 const establishConnection = async() => {
    await client.connect();
    console.log("Connected correctly to server");

    return client.db(dbName);
}

app.listen(process.env.PORT)

async function createPost(content) {
    try {
        const db = establishConnection();
        const posts = (await db).collection("posts");
        // Construct a post                                                                                                                                                    
        const p = await posts.insertOne(content);
        return p
    } catch (err) {
        console.log(err.stack);
    }
    finally {
        await client.close();
    }
}

app.use(cors());
app.use(express.json());

// Routes
app.use("/", authentication);
app.use("/posts", posts);

app.all("/", (req, res) => {
  res.send("UBC Chirp Chirp");
});

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
