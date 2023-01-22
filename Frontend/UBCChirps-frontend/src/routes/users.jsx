import { Outlet, Link, useLoaderData } from "react-router-dom";
import Navbar from "../components/navbar";

export async function getData(id) {
  const res = await fetch(
    `http://localhost:8000/posts/getPostsByUser/?googleId=${id}`
  );
  const posts = await res.json();
  console.log("posts below");
  console.log(posts);
  return posts.data ?? null;
}

export async function loader({ params }) {
  console.log(params);
  return getData(params.id);
}

export default function UserPage() {
  // ideally we should asynchronously load the chirp data and stuff...
  const chirpData = useLoaderData();
  return (
    <div>
      <Navbar />

      <ChirpList chirps={chirpData} />

    </div>
  );
}

function ChirpList(props) {
  return (
    <>
      {props ? (
        props.chirps.map((x) => (
          <SingleChirp content={x.content} timestamp={x.date} key = {x._id}/>
        ))
      ) : (
        <></>
      )}
    </>
  );
}

function SingleChirp(props) {
  return (
    <div style={{ border: "1px solid red" }}>
      <p>{props.content}</p>
      <p>{props.timestamp}</p>
    </div>
  );
}
