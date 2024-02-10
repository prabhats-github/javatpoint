import React from 'react'
import st from './List.module.css';
import { FaHeadSideVirus } from "react-icons/fa";
import { GiThink } from "react-icons/gi";
import { SiSelenium } from "react-icons/si";
import { BsDatabaseLock } from "react-icons/bs";

const List = () => {
  return (
    <div id={st.maindiv}>
       <ul>
        <li><i class="fa-solid fa-house"></i>Home</li>
        <li><i class="fa-brands fa-python"></i>Python</li>
        <li><i class="fa-brands fa-java"></i>Java</li>
        <li><i class="fa-brands fa-js"></i>Javascript</li>
        <li><i class="fa-brands fa-html5"></i>HTML</li>
        <li><i class="fa-solid fa-database"></i>SQL</li>
        <li><i class="fa-brands fa-php"></i>PHP</li>
        <li><i class="fa-solid fa-hashtag"></i> C#</li>
        <li><i class="fa-solid fa-plus"></i> C++</li>
        <li><i class="fa-brands fa-stack-overflow"></i> DS</li>
        <li ><FaHeadSideVirus /> Aptitude</li>
        <li><GiThink />Reasoning</li>
        <li><SiSelenium />Selenium</li>
        <li><BsDatabaseLock />DBMS</li>
        <li><i class="fa-solid fa-c"></i></li>
       </ul>
    </div>
  )
}

export default List