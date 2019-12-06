import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

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


// export function Question() {
//   return(
//     <div className = "questionaire">
//       {quiz.map(QuizPage)}
//     </div>
//   )
// }

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
      <Handlesubmit />

    </div>
  )

}

export function QuizPage2() {
    return(
      <div className= "ask">
        <div className= "ask-question">
          <h1>{quiz[1].ask}</h1>
        </div>
        <div className= "answer-input">
          <form>
            <label>
                Answer:
              <input type="text" name="name"/>
            </label>
              <input type= "submit" value= "submit"/>
          </form>
        </div>
      </div>
    )
  }

