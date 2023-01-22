import {useState} from "react";
import Navbar from "../components/navbar";
import "../routes/login.css"

export default function Login() {

    const [user, setUser] = useState({
        Username: '',
        Password: '',
        showPassword: false,
    });

    function UserNameField() {
        return (
            <input
            value={user.Username}
            onChange={handleNameInput}
            />
        );
    }

    function PasswordField() {
        return(
            <input
                type={user.showPassword ? "text" : "password"}
                value={user.Password}
                onChange={handlePasswordInput}
            />
        );
    }

    function ShowPasswordToggle() {
        return(
            <input
            type={"checkbox"}
            checked={user.showPassword}
            onChange={handleToggle}
            />
        );
    }

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
    <div className="image">
        <img src="/logo.png" alt="logo" />
    </div>
    <form onSubmit={handleSubmit}>
        

        <div>
        <label
        className={"user"}
        >
            Username:{' '}
            <UserNameField />
        </label>
        </div>

        <div>
        <label
            className={"password"}
        >
            Password:{' '}
            <PasswordField />{' '}
            <ShowPasswordToggle />{' '}
            Show Password
        </label>
        </div>

        <div><button type="submit">Login</button></div>

    </form>
    
    </>
  );
}
