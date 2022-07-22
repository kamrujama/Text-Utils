import React from 'react'
import pic from '../images/pic.jpg';
// import '../App.css';

export default function About() {


  return (
    <>
        <div className="container">
            <div className="heading">
                <h2>About Me</h2>
            </div>
            <div className="details">
                <div className="image">
                    <img src={pic} alt="" />
                </div>
                <div className="information">
                <h2>Kamrujama Ansari</h2><span>Full Stack Developer</span>
                </div>
            </div>
        </div>
    </>
    
  )
}
