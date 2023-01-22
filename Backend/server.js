const express = require('express');
const { MongoClient } = require("mongodb");
const dotenv = require('dotenv');
dotenv.config();
console.log(`Your port is ${process.env.PORT}`); 

const app = express();

const url = process.env.MONGODB_URL;
const client = new MongoClient(url);

const dbName = "test";

 const establishConnection = async() => {
    await client.connect();
    console.log("Connected correctly to server");

    return client.db(dbName);
}

app.listen(process.env.PORT)

const postObject = () => {
    let post = {
        "title": "Hi",
        "date": new Date(2023, 01, 01, 01, 01, 01),
        "content": "Hello, happy new year everyone. Hope we can all land FAANG internships this year!",
    }
    return post;
}

async function createPost() {
    try {
        const db = establishConnection();
        const posts = (await db).collection("posts");
        // Construct a post                                                                                                                                                    
        const post = postObject();
        const p = await posts.insertOne(post);
    } catch (err) {
        console.log(err.stack);
    }
    finally {
        await client.close();
    }
}

async function findAllPosts() {
    try {
        const db = establishConnection();
        const posts = (await db).collection("posts").find({});
        const postArray = await posts.toArray();
        return postArray;

    } catch (err) {
        console.log(err.stack);
    }

}

// ROUTES:
app.all('/', (req, res) => {
    res.send('UBC Chirp Chirp')
})

app.all('/posts', (req, res) => {
    res.send('POSTS')
})

app.all('/add', (req, res) => {
    createPost().catch(console.err)
})

app.all('/find', async(req, res) => {
    const response = {
        "data": await findAllPosts().catch(console.err)
    };
    res.send(response);
})
