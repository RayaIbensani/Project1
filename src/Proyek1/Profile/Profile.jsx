import React from 'react'
import Navbar from '../component/Navbar/Navbar'
import '../Profile/Profile.css'

function Profile() {
    return (
      <div>
        <Navbar />
        <br />
        <h1 className='Header'>My Profile</h1>
        <p>Halo! Aku Raya, Selamat datang di Website Ini</p>

      </div>
    );
  }
  
  export default Profile;