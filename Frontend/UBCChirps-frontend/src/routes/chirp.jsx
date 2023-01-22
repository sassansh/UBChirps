import React, {useState} from 'react';
import './chirp.css';

function ChirpButton() {
    return (
        <button>Chirp</button>
    );
}


function ChirpTextbox() {
    const [message, setMessage] = useState('Enter your message here');

    return(
        <textarea
            className = "myTextBox"
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
    <div>
      <h2>Chirp your message!</h2>
        <ChirpTextbox />
        <ChirpButton />
    </div>
  );
}
