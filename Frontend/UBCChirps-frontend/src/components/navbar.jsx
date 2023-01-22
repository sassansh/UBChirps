import { React } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className = 'navbar'>
      <ul className = 'navbarlist'>
        <li className='navbarelement'>
          <button className='navbarbutton'>
            <Link to={"../"}>Home</Link>
          </button>
        </li>
        <li className='navbarelement'>
        <button className='navbarbutton'>
            <Link to={"../login"}>Login</Link>
        </button>
        </li>
        <li className='navbarelement'>
        <button className='navbarbutton'>
            <Link to={"../chirp"}>Write a chirp</Link>
        </button>
        </li>
        <li className='navbarelement'>
        <button className='navbarbutton'>
            <Link to={"../search"}>Search for a user's chirps</Link>
        </button>
        </li>

      </ul>
    </div>
  );
}
