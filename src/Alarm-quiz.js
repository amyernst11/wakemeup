import React from 'react';


// questions to dislarm
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


// first setting the time you want to wake up
// insert alarm and credit the code
function Alarm(){
  return(
  <h1 className="Alarm">
    Alarm
  </h1>
  )
}


// once the alarm goes off you need to answer a question
// the page switches and makes sound while you have to answer the question

// linking the disalarm page setup to the quiz information
function Question() {
  return(
    <div className = "questionaire">
      {quiz.map(DisalarmPage)}
    </div>
  )
}

// how the disalrm page looks like once the alarm goes off
// must insert an answer
export function DisalarmPage(props) {
  return(
    <div className= "ask">
      <div className= "ask-question">
        <h1>{props.ask}</h1>
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

// what will happen when you insert the right answer
// if input == "answer(from quiz)" return buttons page
// if input = false then change the pull up a pop up saying try again

