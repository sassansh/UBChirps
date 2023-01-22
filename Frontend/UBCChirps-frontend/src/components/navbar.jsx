import { React } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <div>This is a navbar</div>
      <ul>
        <li>
            <Link to={"../"}>Home</Link>
        </li>
        <li>
            <Link to={"../login"}>login</Link>

        </li>
        <li>
            <Link to={"../user/gavin"}>user (broken without a name)</Link>
        </li>
        <li>
            <Link to={"../chirp"}>write a chirp</Link>
        </li>
        <li>
            <Link to={"../search"}>search a user</Link>
        </li>

      </ul>
    </div>
  );
}
