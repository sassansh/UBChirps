import Navbar from "../components/navbar";
import React, { useState } from "react";
import "./chirp.css";

function handleSubmit(message) {
  console.log(message);
  // async function postData(url = "", data) {
  //   const data2 = {content: "this i scontent"}
  //   const response = await fetch(url, {
  //     method: "POST", // *GET, POST, PUT, DELETE, etc.
  //     body: data2, // body data type must match "Content-Type" header
  //   });
  //   console.log("you sent a chirp");
  //   console.log(response.json());
  // }

  // postData("http://localhost:8000/posts/add", { content: message });
    const requestOptions = {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: message })
  };
  fetch('http://localhost:8000/posts/add', requestOptions);
      // .then(response => response.json())
      // .then(data => element.innerHTML = data.id );
}

function ChirpButton(props) {
  return (
    <button
      className={"chirpButton"}
      onClick={() => {
        props.handleClick(props.message);
      }}
    >
      Chirp
    </button>
  );
}

function ChirpTextbox(props) {
  return (
    <textarea
      className="myTextBox"
      value={props.message}
      onChange={(m) => props.setMessage(m.target.value)}
    />
  );
}

export default function Chirp() {
  /**
   * ON this page you should be able to see (when logged in) an input box and be able
   * to send off a 'Chirp' (Tweet) to the server
   *
   * Don't worry about authentication when building this page.
   */

  // schema for posting a chirp
  //   {
  //     "username": "user1",
  //     "content": "Hello World",
  //  }
  const [message, setMessage] = useState("Enter your message here");

  return (
    <>
      <Navbar />
      <div>
        <h2>Chirp your message!</h2>
        <ChirpTextbox message={message} setMessage={setMessage} />
        <ChirpButton handleClick={handleSubmit} message = {message} />
      </div>
    </>
  );
}
