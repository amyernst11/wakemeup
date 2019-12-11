import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import ReactAudioPlayer from 'react-audio-player';
import './App.css';

// quiz information in array/object
let quiz = [
  {
    ask: 'Are reptiles warm or cold blooded',
    answer: 'cold blooded',
  },
  {
    ask: 'Where do penguins live? (Hint: north or south pole)',
    answer: 'south pole'
  },
]

// first quiz page after the alarm goes off
// must input the correct answer for the snooze/wake up buttons show up
export function QuizPage1() {
    
    const [input, setInput] = useState();

  function handleChange(event){
    setInput(event.target.value)
  }

  function Handlesubmit(){
      console.log(input)
    if (input == quiz[0].answer){
        return(
          <div>
            <p>correct</p>
            <Link to="/snooze"> <button>Snooze</button></Link>
            <Link to="/wakeup"> <button>Wake up</button></Link>
            </div>
            )
    }else{
        return(<p></p>)
    }
  }

  // adding an alarm sound to the page, hopefully it is autoplay
    return(
    <div className= "ask">
      <div className= "ask-question">
        <h1>{quiz[0].ask}</h1>
      </div>
      <div className= "answer-input">
          <label>
              Answer:
            <input type="text" name="name" onChange={handleChange}/>
          </label>
            <input type= "submit" value= "submit" />
      </div>
      <div className="alarmsound">    
          <ReactAudioPlayer
            src="alarmsound.mp3"
            autoPlay
            controls
            />
      </div>
      <Handlesubmit />
    </div>
  )

}

// when you press the snooze button, it takes you to the second quiz page with a different quesiton
// when you input the right answer then the button shows up
// the difference with this page is that the snooze button will take you to a wake up page that 
// "forces" you out of bed because you are only allowed one snooze
export function QuizPage2() {
  
  const [input, setInput] = useState();

  function handleChange(event){
    setInput(event.target.value)
  }

  function Handlesubmit(){
      console.log(input)
    if (input == quiz[1].answer){
        return(
          <div>
            <p>correct</p>
            <Link to="/forcewake"> <button>Snooze</button></Link>
            <Link to="/wakeup"> <button>Wake up</button></Link>
            </div>
            )
    }else{
        return(<p></p>)
    }
  }

  // adding alarm sound, hopefully which autoplays
    return(
    <div className= "ask">
      <div className= "ask-question">
        <h1>{quiz[1].ask}</h1>
      </div>
      <div className= "answer-input">
          <label>
              Answer:
            <input type="text" name="name" onChange={handleChange}/>
          </label>
            <input type= "submit" value= "submit" />
    
      </div>
      <div className="alarmsound">    
          <ReactAudioPlayer
            src="alarmsound.mp3"
            autoPlay
            controls
            />
      </div>
      <Handlesubmit />

    </div>
  )
  }

