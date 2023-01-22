import {useState} from "react";
import Navbar from "../components/navbar";

export default function Login() {

    const [user, setUser] = useState({
        Username: '',
        Password: ''
    });

    function handleNameInput(input){
        setUser({
            ...user,
            Username: input.target.value
        });
    }

    function handlePasswordInput(input){
        setUser({
            ...user,
            Password: input.target.value
        });
    }

    function handleSubmit(input) {
        // TODO: Handle user login
        console.log("user trying to login");
    }

    return (<>
    <Navbar/>
    <form onSubmit={handleSubmit}>
      <label>
          UBChirps
      </label>

        <label>
            Username:
            <input
            value={user.Username}
            onChange={handleNameInput}
            />
        </label>

        <label>
            Password:
            <input
                value={user.Password}
                onChange={handlePasswordInput}
            />
        </label>

        <button type="submit">Login</button>

    </form>
    
    </>
  );
}
