import React from "react";
import logo from '../assets/logo.png'
import { useNavigate } from "react-router-dom"


function Home(){
    const navigate = useNavigate();
    const startQuiz = () => {
        navigate("/quiz");
      };
    return(
        <div className="home_container">
            <img src={logo}/>
            <button className="start" onClick={startQuiz}>Start Quiz</button>
        </div>
    )
}

export default Home
