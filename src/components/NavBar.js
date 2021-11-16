import React from 'react'
import '../styles/NavBar.scss'
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <nav>
      <div className="main-title">
        <p className="title1">I'm not like a regular parent, I'm a</p>
        <p className="title2">Cool Parent</p>
      </div>
      <div className="buttons">
        <Link to='/'><button class="button">Home</button></Link>
        <Link to='/events'><button class="button">Events</button></Link>
        <Link to='/my-friends'><button class="button">Friends</button></Link>  
      </div>
    </nav>
  )
}

export default NavBar