import React from 'react'
import Navbar from '../component/Navbar/Navbar';
import '../Home/Home.css'

function Home() {
  return (
    <div>
      <Navbar />
      <br />
      <h1 className='header'>Selamat Datang!</h1>
      <p></p>
    </div>
  );
}

export default Home;