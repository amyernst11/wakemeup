import React,{useState} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import {QuizPage1} from './Alarm-quiz';
import {QuizPage2} from './Alarm-quiz';



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
       <Route exact path="/quiz2">
         <QuizPage2></QuizPage2>
       </Route>
       <Route exact path="/wakeup">
         <WakeUp></WakeUp>
       </Route>
       <Route exact path="/snooze">
         <Snooze></Snooze>
       </Route>
       <Route exact path="/forcewake">
         <ForceWake></ForceWake>
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


function Snooze(){
  return(
    <div>
      <h1>
      Sleep for 5 more minutes      
      </h1>
      <Link to="/quiz2"> <button>Next Page</button> </Link>
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

function ForceWake(){
  return(
    <div>
      Get out of bed you lazy bum!
    </div>
  )
}

export default App;
