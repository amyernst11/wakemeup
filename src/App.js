import React,{useState} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import {QuizPage1} from './Alarm-quiz';



function App() {
  return (
   <Router>
     <div>
     <Switch>
       <Route exact path="/">
         <Alarm></Alarm>
       </Route>
       <Route exact path="/quiz">
         <QuizPage1></QuizPage1>
       </Route>
       <Route exact path="/wakeup">
         <WakeUp></WakeUp>
       </Route>
       <Route exact path="/snooze">
         <Snooze></Snooze>
       </Route>
     </Switch>
    </div>
   </Router>
  )
}


function Alarm(){
  return(
  <div>
  <h1 className="Alarm">
    Alarm
  </h1>
  <Link to="/quiz"> <button>Next Page</button> </Link>
  </div>
  )
}

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

function Snooze(){
  return(
    <div>
      Sleep for 5 more minutes
    </div>
  )
}

function WakeUp(){
  return(
    <div>
      Pick a playlist to wake up to.
    </div>
  )
}

export default App;
