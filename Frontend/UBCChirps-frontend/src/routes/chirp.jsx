import Navbar from "../components/navbar";

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
      <p>this is where you can send chirps</p>
    </div>
    </>
  );
}
