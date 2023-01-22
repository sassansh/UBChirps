import { Outlet, Link, useLoaderData } from "react-router-dom";
import Navbar from "../components/navbar";

export async function getData(id) {
  /**
   * We will recieve a list of posts in the form
   * {
   "id": 1,
   "username": "user1",
   "content": "Hello World",
   "timestamp": "2020-01-01 00:00:00"
  }
   */
  console.log("we're fetching the id!! (not really)");
  console.log("the id is: " + id);
  const fakeChirps = [
    {
      id: 3,
      username: "gav",
      content: "Third!!!",
      timestamp: "2022-01-01 00:00:00",
    },
    {
      id: 1,
      username: "gav",
      content: "Second chirp!!!",
      timestamp: "2022-01-01 00:00:00",
    },
    {
      id: 2,
      username: "gav",
      content: "This is my first chirp!!!",
      timestamp: "2020-01-01 00:00:00",
    },
  ];
  return fakeChirps;
  // await fakeNetwork(`contact:${id}`);
  // let contacts = await localforage.getItem("contacts");
  // let contact = contacts.find(contact => contact.id === id);
  // return contact ?? null;
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
      {props.chirps.map((x) => (
        <SingleChirp content={x.content} timestamp={x.timestamp} />
      ))}
    </>
  );
}

function SingleChirp(props) {
  return (
    <div style={{ border: '1px solid red' }}>
      <p>{props.content}</p>
      <p>{props.timestamp}</p>
    </div>
  );
}
