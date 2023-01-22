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
    <>
    <Navbar />
    <div className='pageOuter'>
      <ChirpList chirps={chirpData} />
    </div>
    </>
  );
}

function ChirpList(props) {
  return (
    <div className="chirpList">
      {props ? (
        props.chirps.slice(0).reverse().map((x) => (
          <SingleChirp content={x.content} timestamp={x.date} key = {x._id}/>
        ))
      ) : (
        <></>
      )}
    </div>
  );
}

function SingleChirp(props) {
  return (
    <div className = 'chirp'>
      <p>{props.content}</p>
      <p>{props.timestamp}</p>
    </div>
  );
}
