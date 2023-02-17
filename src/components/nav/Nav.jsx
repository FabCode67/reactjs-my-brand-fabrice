import React from 'react'
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
            <li><a className="" href="./../index.html">Login</a></li>
            <li><a href="./../index.html#about">Contact</a></li>
            <li><a href="./../index.html#portfolio">Blogs</a></li>
            <li><a href="./../index.html#blogs">Portfolio</a></li>
            <li><a href="./../index.html#contact">About</a></li>
            <li><a href="./login.html" id="sign-out">Home</a></li>
          </ul>
        </div>
    </nav>
  )
}

export default Nav