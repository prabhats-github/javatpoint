import React from 'react';
import style from './Javatpoint.module.css';
import logo from './image/jtp_logo.png';
import { SlMagnifier } from "react-icons/sl";

const Javatpoint = () => {
    
  return (
    <div id={`${style.maindiv}`}>
        <div id={`${style.d1}`}>
            <img src={logo} alt="" />
        </div>

        <div id={`${style.d2}`}>
            <input type="text" id={`${style.ii}`}/>
            <div id={`${style.search}`} >
            <SlMagnifier id={`${style.mag}`} />
            </div>
        </div>
    </div>
  )
}

export default Javatpoint;