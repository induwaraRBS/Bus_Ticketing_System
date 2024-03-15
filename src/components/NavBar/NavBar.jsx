import React from 'react'
import{ Link} from "react-router-dom"
import "./NavBar.css"
const NavBar = () => {
  return (
    <div className='navbar'>
      <div className='logo'>
            {/* <img src="" alt="" /> */}
      </div>
      <div className='Items'>

      <Link to="/">Home</Link>
      <Link to="/Aboutus">About Us</Link>
      <Link to="/Contactus">Contact Us</Link>
      <Link to="/Services">Services</Link>
      <Link to="/OnlineBooking">Online Booking</Link>
      </div>
      <div className='Login'>
          <Link to="/Login">Login</Link>
      </div>
    </div>
  )
}

export default NavBar
