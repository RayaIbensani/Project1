import React from 'react'
import Navbar from "../component/Navbar/Navbar";
import Wall from '../Gallery/Wall.jpg'

function Gallery() {
  return (
    <>
      <Navbar />
      <div className='gall'>
    <h1 style={{textAlign: "center" }}>Gallery</h1>
    <img src={Wall} alt="wall" className="Wall"/>
    </div>
    </>
  )
}

export default Gallery