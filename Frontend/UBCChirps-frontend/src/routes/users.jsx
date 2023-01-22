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
  const fakeUserData = { name: "Gavin George", urlExtension: id};
  return fakeUserData;
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
export default function UserPage() {
  // ideally we should asynchronously load the chirp data and stuff...
  const chirpData = useLoaderData();
  return (
    <div>
      <Navbar/>
      <p>this is the users page!!!</p>
      <p>user Name: {chirpData.name}</p>
      <p>urlExtension: {chirpData.urlExtension}</p>
      <p> these are all of {chirpData.name}'s chirps</p>
    </div>
  );
}
