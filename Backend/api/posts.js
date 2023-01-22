const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");
const dotenv = require("dotenv");
dotenv.config();

const router = express.Router();

const url = process.env.UBCHIRPS_DB_URI;
const client = new MongoClient(url);

const dbName = "test";

const establishConnection = async () => {
  await client.connect();
  console.log("Connected correctly to server");

  return client.db(dbName);
};

async function createPost(post, user) {
  try {
    const userId = user.googleId;
    const db = establishConnection();
    const posts = (await db).collection("posts");
    console.log(post);
    console.log(user);
    // Construct a post
    const postContent = {"googleId": userId, "date": new Date(2022, 03, 03), "content": post.content};
    const p = await posts.insertOne(postContent);
    return ("ayyyy successful");
  } catch (err) {
    console.log(err.stack);
  } finally {
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

async function findOnePost(id) {
  try {
    const db = establishConnection();
    const post = (await db).collection("posts").find({ _id: ObjectId(id) });
    const postArray = await post.toArray();
    if (postArray) {
      return postArray[0];
    } else {
      return {};
    }
  } catch (err) {
    console.log(err.stack);
  }
}

async function findPostsByUser(googleId) {
  try {
    const db = establishConnection();
    const post = (await db).collection("posts").find({ googleId: googleId});
    const postArray = await post.toArray();
    if (postArray) {
      return postArray;
    } else {
      return {};
    }
  } catch (err) {
    console.log(err.stack);
  }
}

// ROUTES:
router.post("/add", async (req, res) => {
  const post = req.body;
  const user = req.user || {googleId: "111111111111"};
  console.log(user);
  const response = await createPost(post, user).catch(console.err);
  res.send({ data: response });
});

router.get("/getOne", async (req, res) => {
  const _id = req.query._id;
  const response = {
    data: await findOnePost(_id).catch(console.err),
  };
  res.send(response);
});

router.get("/getAll", async (req, res) => {
  console.log(req.user);
  const response = {
    data: await findAllPosts().catch(console.err),
  };
  res.send(response);
});

router.get("/getPostsByUser", async (req, res) => {
  console.log(req.user)
  const response = {
    data: await findPostsByUser(req.query.googleId).catch(console.err),
  };
  console.log(response);
  res.send(response);
})

module.exports = router;
