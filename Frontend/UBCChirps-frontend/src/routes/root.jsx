import Navbar from "../components/navbar";

export default function Root() {
  /**
   * This is required, will have info about our app.
   */
  
  return (
    <>
      <Navbar/>
      <div className="pageOuter">
      <h1>Hi, welcome to UBChirps.</h1>
      </div>
    </>
  );
}
