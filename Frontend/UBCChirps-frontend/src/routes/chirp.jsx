import Navbar from "../components/navbar";
import React, {useState} from 'react';

function ChirpButton() {
    return (
        <chirpButton>Chirp</chirpButton>
    );
}


function ChirpTextbox() {
    const [message, setMessage] = useState('Enter your message here');

    return(
        <input
            type = "text"
            value = {message}
            onChange = {m => setMessage(m.target.value)}
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
  return (
    <>
    <Navbar/>
    <div>
      <h2>Chirp your message!</h2>

        <ChirpTextbox />
        <ChirpButton />
    </div>
    </>
  );
}
