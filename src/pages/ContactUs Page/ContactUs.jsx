import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import "./ContactUs.css"

const ContactUs = () => {
  return (
    <div className='ContactUs_Page'>
        <div className='Nav_Bar'>
                <NavBar/>
        </div>
        <div className='ContactUs_Content'>
        <h1 className='title'>Contact Details</h1>
        <hr />
        <div className='ContactUs_Sections'>

        <div className='Left_Section'>
                <h2>Adddress</h2>
                <p>Sri Lanka Transport Board</p>
                <p>Head Office,No.200</p>
                <p>Kirula Road,Colombo 5</p>
                <p>Sri Lanka</p>
        </div>
        <div className='Right_Section'>
                    <h2>Contacts</h2>
                    <p>Office :+94 112 581 120</p>
                    <p>Chairman :+94 112 368 111</p>
                    <p>Chief Executive Officer:+94 112 582 926</p>
        </div>
        </div>
        </div>
    </div>
  )
}

export default ContactUs
