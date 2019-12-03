import React from 'react';
import './App.css';


// need to set up the pathways maybe?????


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

// the first function to run the App
function App() {
  return (
   <body>
     
   </body>
  )
}

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
      {quiz.map(disalarmPage)}
    </div>
  )
}

// how the disalrm page looks like once the alarm goes off
// must insert an answer
function disalarmPage(props) {
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



// buttons for waking up (disalarming) and snoozing


// (for disalarm)
// if press === 1 then take you to wakeup page
// (for snooze)
// if press === 1 then take you to snooze page
// if press === 2 then take you to snooze page
// if press === 3 then take you to wakeup page

function Buttons() {
  const [press, setPress] = useState(0);

  function handleClick() {
    setPress(press +1);
  }

  if (press===1){
    return
  }
}

// function ExampleInteraction() {
//   // Declare a new state variable, which we'll call "count"
//   const [count, setCount] = useState(0);
//   // let badCount=0;
//   // temporary value

//   function handleClick() {
//     setCount(count + 1);
//     // badCount = badCount + 1;
//   } 

//   if(count > 100) {
//     return 
//   } else {
//     return (
//     <div>
//       <p>Do NOT click 100 times, please</p>
//       <p>You clicked {count} times</p>
//       {/* <p>You clicked badCount= {badCount} times</p> */}
//       <button className="hotbutton" onClick={handleClick}>
//         Click me
//       </button>
//     </div>
//   );
// }
// }


// when you press snooze, it should give you a time remaining/ countdown until a second alarm goes off
// insert automated set time and credit code
function Snooze(){

}

// then after the coundtown timer finishes, it should link back to the disalarm page


// once you press the wake up button, it will take you to this page where music starts playing
// after the third time you press the snooze button, it will automatically take you to this page
// insert the spotify plug in here and credit code
function WakeUp(){
  
}

export default App;
