import React from 'react';
import st from './Latest_tutorials.module.css';

const Latest_tutorials = () => {
  return (
    <div className={st.maindiv}>
        <div className={st.lt}>Latest Tutorials</div>
        
        <div className={st.allboxes}>
            <div className={st.innerbox}>
                <img src="https://static.javatpoint.com/images/homeicon/splunk.png" alt="" />
                <a href="#">Splunk</a>
            </div>

            <div className={st.innerbox}>
                <img src="https://static.javatpoint.com/images/homeicon/spss.png" alt="" />
                <a href="">SPSS</a>
            </div>

            <div className={st.innerbox}>
                <img src="https://static.javatpoint.com/images/homeicon/swagger.png" alt="" />
                <a href="#">Swagger</a>
            </div>

            <div className={st.innerbox}>
                <img src="https://static.javatpoint.com/images/homeicon/transact-sql.png" alt="" />
                <a href="#" id={st.sql}>Transact-SQL</a>
            </div>

            <div className={st.innerbox}>
                <img src="https://static.javatpoint.com/images/homeicon/tumblr.png" alt="" />
                <a href="#">Tumblr</a>
            </div>

            <div className={st.innerbox}>
                <img src="https://static.javatpoint.com/images/homeicon/react.png" alt="" />
                <a href="#">ReactJS</a>
            </div>

            <div className={st.innerbox}>
                <img src="https://static.javatpoint.com/images/homeicon/regex.png" alt="" />
                <a href="#">Regex</a>
            </div>

            <div className={st.innerbox}>
                <img src="https://static.javatpoint.com/images/homeicon/react.png" alt="" />
                <a href="#" id={st.rel}>Reinforcement Learning</a>
            </div>

            <div className={st.innerbox}>
                <img src="https://static.javatpoint.com/images/homeicon/r-programming.png" alt="" />
                <a href="#" id={st.r}>R_Programming</a>
            </div>

            <div className={st.innerbox}>
                <img src="https://static.javatpoint.com/images/homeicon/rxjs.png" alt="" />
                <a href="#">RxJS</a>
            </div>

            <div className={st.innerbox}>
                <img src="https://static.javatpoint.com/images/homeicon/react-native.png" alt="" />
                <a href="#" id={st.native}>React_Native</a>
            </div>

            <div className={st.innerbox}>
                <img src="https://static.javatpoint.com/images/homeicon/python-design-patterns.png" alt="" />
                <a href="#" id={st.des}>Python_Design Patterns</a>
            </div>

            <div className={st.innerbox1}>
                <img src="https://static.javatpoint.com/images/homeicon/python-pillow.png" alt="" />
                <a href="#"><p>Python Pillow</p></a>
            </div>

            <div className={st.innerbox1}>
                <img src="https://static.javatpoint.com/images/homeicon/python-turtle.png" alt="" />
                <a href="#"><p>Python Turtle</p></a>
            </div>

            <div className={st.innerbox1}>
                <img src="https://static.javatpoint.com/images/homeicon/keras.png" alt="" />
                <a href="#"><p>Keras</p></a>
                
            </div>

        </div>
    </div>
  )
}

export default Latest_tutorials