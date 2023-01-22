import Navbar from "../components/navbar";

export default function Root() {
  /**
   * This is required, will have info about our app.
   */
  
  return (
    <div>
      <Navbar/>
      <p>this is the root!!!</p>
      <div className="feed">
        <div className="feed__header">
          <h2>"Home"</h2>
        </div>
      </div>
    </div>
  );
}
