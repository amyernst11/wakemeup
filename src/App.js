import React,{useState} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  withRouter,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown-now';
import SpotifyPlayer from 'react-spotify-player';
import {QuizPage1} from './Alarm-quiz';
import {QuizPage2} from './Alarm-quiz';


function App() {
  return (
   <Router>
     <div>
     <Switch>
       <Route exact path="/">
         <AlarmClock/>
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


// function Alarm(){
  
class AlarmClock extends React.Component {
  constructor() {
    super();
    this.state = {
      currentTime: '',
      alarmTime: '',
      ringAlarm: false
    };
    this.setAlarmTime = this.setAlarmTime.bind(this);
  }

  componentDidMount(){
    this.clock = setInterval(
      () => this.setCurrentTime(),
      1000
    )
    this.interval = setInterval(
      () => this.checkAlarmClock(),
    1000)
  }

  componentWillUnmount(){
    clearInterval(this.clock);
    clearInterval(this.interval);
  }

  setCurrentTime(){
    this.setState({
      currentTime: new Date().toLocaleTimeString('en-US', { hour12: false })
    });
  }

  setAlarmTime(event) {
    event.preventDefault();
    const inputAlarmTimeModified = event.target.value + ':00'
    this.setState({
      alarmTime: inputAlarmTimeModified
    })
  }

  checkAlarmClock(){
    if(this.state.alarmTime == 'undefined' || !this.state.alarmTime) {
      this.alarmMessage = "Please set your alarm.";
    } else {
      this.alarmMessage = "Your alarm is set for " + this.state.alarmTime + ".";
      if(this.state.currentTime === this.state.alarmTime) {
        //alert("its time!");
        this.setState({
          ringAlarm: true
        });
      } else {
        console.log("not yet");
      }
    }   
  }

  render() {
    return (
      (this.state.ringAlarm) ?
      <Redirect  to="/quiz"/>
      : 
      <div>
        <h1>React Alarm Clock</h1>
        <h2>It is {this.state.currentTime}.
        </h2>
        <h2>{this.alarmMessage}
        </h2>
        <form>
          <input type="time" onChange={this.setAlarmTime}></input>
        </form>
      </div>
    );
  }
}

// return(
// ReactDOM.render(
//   (
//     <div>
//     <AlarmClock />
//   </div>),
//     document.getElementById('alarm-clock')
//   )    
// );
  
  
  // return(
  // <div>
  // <h1 className="Alarm">
  //   Alarm
  // </h1>
  // <Link to="/quiz"> <button>Next Page</button> </Link>
  // </div>
  // )
//}


function Snooze(){
  
const Completionist = () => {return <Redirect to="/quiz2"/>};

  return(
      <div>
        <h3>You can sleep for 5 more minutes.</h3>
      <Countdown date={Date.now() + 5000}>
        <Completionist/>
      </Countdown>
      </div> 
    )
  
}

function WakeUp(){
  return(
    <div>
      <h3>Pick a playlist to wake up to.</h3>
      <SpotifyPlayer
        uri="spotify:album:1TIUsv8qmYLpBEhvmBmyBk"
        size={'large'}
        view={'view'}
        theme={'balck'}
        />
        <SpotifyPlayer
        uri="spotify:album:1TIUsv8qmYLpBEhvmBmyBk"
        size={'large'}
        view={'view'}
        theme={'balck'}
        />
        <SpotifyPlayer
        uri="spotify:album:1TIUsv8qmYLpBEhvmBmyBk"
        size={'large'}
        view={'view'}
        theme={'balck'}
        />
    </div>
  )
}

function ForceWake(){
  return(
    <div>
      <h3>Get out of bed you lazy bum!</h3>
      <SpotifyPlayer
        uri="spotify:album:1TIUsv8qmYLpBEhvmBmyBk"
        size={'large'}
        view={'view'}
        theme={'balck'}
        />
    </div>
  )
}

export default App;
