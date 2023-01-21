const express = require('express');
const { MongoClient } = require("mongodb");
const dotenv = require('dotenv');
dotenv.config();
console.log(`Your port is ${process.env.PORT}`); 

const app = express();

const url = process.env.MONGODB_URL;
const client = new MongoClient(url);

const dbName = "test";

app.listen(process.env.PORT)

async function run() {
    try {
        await client.connect();
        console.log("Connected correctly to server");

        const db = client.db(dbName);
        const col = db.collection("posts");

        // Construct a post                                                                                                                                                    
        let post = {
            "title": "10 step guide to achieving clear and flawless skin",
            "date": new Date(2022, 09, 09, 11, 12, 13),
            "content": "Lorem Ipsum Blah k ijk qwhfue sql fhisub fsdbih s",
        }
        const p = await col.insertOne(post);
         // Find one document
         const myDoc = await col.findOne();
         // Print to the console
         console.log(myDoc);

    } catch (err) {
        console.log(err.stack);
    }
    finally {
        await client.close();
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
    run().catch(console.err)
})
