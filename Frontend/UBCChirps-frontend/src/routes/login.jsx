import {useState} from "react";
import Navbar from "../components/navbar";

export default function Login() {

    const [user, setUser] = useState({
        Username: '',
        Password: '',
        showPassword: false,
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


    function handleToggle() {
        setUser({
            ...user,
            showPassword: !user.showPassword
        });
    }

    function handleSubmit(input) {
        // TODO: Handle user login
        console.log("user trying to login");
    }

    return (<>
    <Navbar/>
    <form onSubmit={handleSubmit}>
        <div>
        <h2>
          UBChirps
        </h2>
        </div>

        <div>
        <label>
            Username:{' '}
            <input
            value={user.Username}
            onChange={handleNameInput}
            />
        </label>
        </div>

        <div>
        <label>
            Password:{' '}
            <input
                type={user.showPassword ? "text" : "password"}
                value={user.Password}
                onChange={handlePasswordInput}
            />{' '}
            <input
            type={"checkbox"}
            checked={user.showPassword}
            onChange={handleToggle}
            />{' '}
            Show Password
        </label>
        </div>

        <div><button type="submit">Login</button></div>

    </form>
    
    </>
  );
}
