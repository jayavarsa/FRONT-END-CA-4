
import React, { useEffect, useState } from 'react';
import { QuizData } from '../Question/Questions';
import Result from './Result';

import highlight from '../assets/Vector.png'
import dehighlight from '../assets/degigh.png'
import logo from '../assets/logo.png'
import linkdn from '../assets/LINKDLN.png'
import github from '../assets/GITHUB.png'
import darkbackground from '../assets/backdark.jpg'
import lightoff from '../assets/offbulb.png'
import lighton from '../assets/onbulb.png'

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [highlightQuestion, setHighlightQuestion] = useState(false);
  const [theme ,setTheme] = useState(() =>{
    const themeValue= localStorage.getItem('theme');
    return themeValue ? themeValue === "light" : true
  })

  const darkback = {
    backgroundImage:theme ? ' ': `url(${darkbackground})`
  }
  const github_style = {
    backgroundColor:theme ? ' ':"white",
    borderRadius:theme ? ' ':"50%"
  }

  const nav_dark = {
    backgroundColor: theme ? ' ':"black"
  }

  const dark_linkdn ={
    backgroundColor: theme ? ' ':"white",
    borderRadius:theme ? ' ':"5px"
  }

  const theme_image ={
    backgroundImage:theme ? `url(${lightoff})` : `url(${lighton})`,
    backgroundSize: "80%"

  }


  const changeQuestion = (n) => {
    updateScore(n);
    if (currentQuestion < QuizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setHighlightQuestion(false); 
    } else {
      setShowResult(true);
    }
  };

  const updateScore = (n) => {
    if (n !== null && QuizData[currentQuestion].options[n].isCorrect) {
      setScore(score + 1);
    }
  };

  const resetAll = () => {
    setShowResult(false);
    setCurrentQuestion(0);
    setScore(0);
    setHighlightQuestion(false);
    setTheme(false);
  };
  useEffect( () =>{
    document.body.className = theme ? 'light' : 'dark'
  },[theme]);

  const toggle = () => {
    setTheme((e) => {
      const currentthemw = !e;
      localStorage.setItem("theme", currentthemw ? "light" : "dark");
      return currentthemw;
    });
  }

  return (
    <div>
      <div className='container' style={darkback}>
        {showResult ? (
          <Result score={score} totalScore={QuizData.length} tryAgain={resetAll} />
        ) : (
          <>
            <div className='Top_div'>
                <div className='highlight_div'>
                    <div id='high' className='hightlight' onClick={() => setHighlightQuestion(true)}>
                        <p>Highlight</p>
                        <img src={highlight}/>
                    </div>
                    <div id='dehigh' className='hightlight' onClick={() => setHighlightQuestion(false)}>
                        <p>Dehighlight</p>
                        <img src={dehighlight}/>
                    </div>
                </div>
                <div className='logo_div'>
                    <img id='logo' src={logo} />
                </div>
            </div>
            <div className={`question ${highlightQuestion ? 'highlighted' : ''}`}>
                <h2 className='question-text'>{QuizData[currentQuestion].text}</h2>
            </div>
            <div className="option_div">
              {QuizData[currentQuestion].options.map((option, i) => (
                <button
                  className={`option_button`}
                  key={i}
                  onClick={() => {
                    changeQuestion(i);
                  }}
                >
                  {option.text}
                </button>
              ))}
            </div>
            <div className='nav_bar' style={nav_dark}>
              <div className='contact'>
                <img className='footer_img' src={linkdn} style={dark_linkdn}onClick={() => {window.open('https://www.linkedin.com/in/jayavarsanr/',)}}/>
                <img style={github_style} className='footer_img' src={github} onClick={() => {window.open('https://github.com/jayavarsa','_blank')}}/>
              </div>
              <div className='theme_div' onClick={toggle} style={theme_image}>
                {/* <img className='footer_img' src={linkdn}/> */}
              </div>
              <div className='question_number' >
                <span>0{currentQuestion + 1} of 0{QuizData.length}</span>
              </div>
            </div>
            
          </>
        )}
      </div>
    </div>
  );
}

export default Quiz;
