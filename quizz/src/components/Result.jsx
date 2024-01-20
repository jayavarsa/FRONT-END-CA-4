import React from 'react'
import logo from '../assets/logo.png'
import { useNavigate } from "react-router-dom"

function Result(props) {
  const navigate = useNavigate();
    const startQuiz = () => {
        navigate("/");
      };
  const { score, totalScore } = props;
  const percentage = (score / totalScore) * 100;
  return (
    <>
      <div id='main_div'>
        <div className='result_logo_div'>
          <img src={logo} onClick={startQuiz} /> 
        </div>
        <div className='result_div'>
          <h1>Result</h1>
          <p>Your Score: {score} out of {totalScore}</p>
          <p>{percentage}%</p>
        </div>
        <div className='result_reload'>
          <button  onClick={() => window.location.reload()} >Play Again</button>
        </div>
      </div>
    </>
  )
}

export default Result