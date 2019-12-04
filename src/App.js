import React,{useState} from 'react';
import './App.css';
import {QuizPage1} from './Alarm-quiz'


function App() {
  return (
   <div>
     <QuizPage1></QuizPage1>
   </div>
  )
}



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

  if (press<2){
    return(
      <Snooze></Snooze>
    )
  }
  if (press>=2){
    return(
      <WakeUp></WakeUp>
    )
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
  return(
    <div>
      Sleep for 5 more minutes
    </div>
  )
}

// then after the coundtown timer finishes, it should link back to the disalarm page


// once you press the wake up button, it will take you to this page where music starts playing
// after the third time you press the snooze button, it will automatically take you to this page
// insert the spotify plug in here and credit code
function WakeUp(){
  return(
    <div>
      Pick a playlist to wake up to.
    </div>
  )
}

export default App;
