import React from 'react'
import { Link } from 'react-router-dom'
import {FaHamburger} from 'react-icons/fa'
import './nav.css'

const Nav = () => {
  return (
    <nav>
         <div className="left-nav"> 
         <label for="" className="logo"> Fab</label>
        </div>

        <div className='right-nav'>

        <input type="checkbox" id="check" />
          <label for="check" className="checkbtn">
            <i><FaHamburger/></i>
          </label>


        <ul>
            <li><Link to="/login">Login</Link></li>
            <li><a>Contact</a></li>
            <li><Link to="/singleBlogPage">Blog</Link></li>
            <li><a>Portfolio</a></li>
            <li><a>About</a></li>
            <li><a>Home</a></li>
          </ul>
        </div>
    </nav>
  )
}

export default Nav;
