import React from 'react'
import st from './Join_now.module.css';
import { TiSocialYoutubeCircular } from "react-icons/ti";

const Join_now = () => {
  return (
    <div id={st.join_now}>
        <p><TiSocialYoutubeCircular id={st.yt}/></p>
        
        <p id={st.for_more}> For Videos Join Our Youtube Channel: <a href="">Join Now</a></p>
    </div>
  )
}

export default Join_now;