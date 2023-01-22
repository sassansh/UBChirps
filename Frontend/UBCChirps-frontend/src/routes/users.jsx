import { Outlet, Link, useLoaderData } from "react-router-dom";
import Navbar from "../components/navbar";

export async function getData(id) {
  // const fakeChirps = [
  //   {
  //      "_id":"63cc6e8f06d035300be86a58",
  //      "title":"Yo whatsup",
  //      "date":"2022-10-09T18:12:13.000Z",
  //      "content":"Lorem Ipsum Blah k ijk qwhfue sql fhisub fsdbih s"
  //   },
  //   {
  //      "_id":"63cc6e9006d035300be86a59",
  //      "title":"10 step guide to achieving clear and flawless skin",
  //      "date":"2022-10-09T18:12:13.000Z",
  //      "content":"Lorem Ipsum Blah k ijk qwhfue sql fhisub fsdbih s"
  //   },
  //   {
  //      "_id":"63cc71d5a05941aebf22e570",
  //      "title":"10 step guide to achieving clear and flawless skin",
  //      "date":"2022-10-09T18:12:13.000Z",
  //      "content":"Lorem Ipsum Blah k ijk qwhfue sql fhisub fsdbih s"
  //   }];
  // return fakeChirps;
  // await fakeNetwork(`contact:${id}`);
  const posts = await fetch(`localhost:8000/getPostsByUser/?_googleid=${id}`);
  console.log(posts);
  return(posts ?? null);
}

export async function loader({ params }) {
  console.log(params);
  return getData(params.id);
}

/**
 * This page will show all of a user's chirps.
 * at a url like: UBChirp/chirp/Gavin
 * we will see all of gavin's chirps
 */

// {/* <p>this is the users page!!!</p>
//       <p>user Name: {chirpData.name}</p>
//       <p>urlExtension: {chirpData.urlExtension}</p>
//       <p> these are all of {chirpData.name}'s chirps</p> */}
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
      {
      
      props? props.chirps.map((x) => (
        <SingleChirp content={x.content} timestamp={x.date} />
      )) : <></>
      
      }
    </>
  );
}

function SingleChirp(props) {
  return (
    <div style={{ border: '1px solid red'}}>
      <p>{props.content}</p>
      <p>{props.timestamp}</p>
    </div>
  );
}
