const express = require('express');
const { MongoClient } = require("mongodb");

const app = express();

const url = "mongodb+srv://UBChirp:123@ubchirp.xfzetb2.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);

app.listen(process.env.PORT || 8000)

async function run() {
    try {
        await client.connect();
        console.log("Connected correctly to server");
    } catch (err) {
        console.log("failed");
    }
    finally {
        await client.close();
    }
}

// ROUTES:
app.all('/', (req, res) => {
    res.send('UBC Chirp Chirp')
    run().catch(console.dir);
})

app.all('/posts', (req, res) => {
    res.send('POSTS')
})