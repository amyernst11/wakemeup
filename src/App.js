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


// this app routes all the pages so then in the other functions I can link the pages in
// using the router from react library
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



// I got this code from a user named Violet Forest at the url: https://codepen.io/violetforest/pen/KyVQpg  
// This person made the Alarm Clock I am using for my first page
// you set the time and then when the alarm goes off it will take you to the first quiz page
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

// using redirect to change pages after the timer goes off, from react library
  render() {
    return (
      (this.state.ringAlarm) ?
      <Redirect  to="/quiz"/>
      : 
      <div className="alarmPage">
        <h1>Alarm Clock</h1>
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

// (extra code from the alarm code I found, but ended up not needing)
// return(
// ReactDOM.render(
//   (
//     <div>
//     <AlarmClock />
//   </div>),
//     document.getElementById('alarm-clock')
//   )    
// );
  

// this snooze page allows you to sleeep for 5 more minutes, 
// but in this case of showing the app it will be 5 seconds
// using the countdown from react library
// using redirect to change pages after timer is done, also from react library
function Snooze(){
  
const Completionist = () => {return <Redirect to="/quiz2"/>};

  return(
      <div className="snooze">
        <h1>You can sleep for 5 more minutes.</h1>
      <Countdown date={Date.now() + 5000}>
        <Completionist/>
      </Countdown>
      </div> 
    )
  
}

// when you press the wake up button instead of the snooze button, you will be able to choose what
// spotify playlist you want to listen to as you get ready for the day
// using the spotify player from the react library
function WakeUp(){
  return(
    <div className="wakeUp">
      <h1>Pick a playlist to wake up to.</h1>
      <SpotifyPlayer
        uri="spotify:playlist:37i9dQZF1DWSXBu5naYCM9"
        size={'large'}
        view={'view'}
        theme={'balck'}
        />
        <SpotifyPlayer
        uri="spotify:playlist:37i9dQZF1DWSV3Tk4GO2fq"
        size={'large'}
        view={'view'}
        theme={'balck'}
        />
        <SpotifyPlayer
        uri="spotify:playlist:37i9dQZF1DWU13kKnk03AP"
        size={'large'}
        view={'view'}
        theme={'balck'}
        />
    </div>
  )
}

// after one snooze, on the second time you press snooze you have to wake up
// right now you can choose a spotify playlist to listen to as you get up
// but ideally this page would autoplay the music so it is not quiet to go back to bed
// using the spotify player from react library
function ForceWake(){
  return(
    <div className="forceWake">
      <h1>Get out of bed you lazy bum!</h1>
      <SpotifyPlayer
        uri="spotify:playlist:37i9dQZF1DWSXBu5naYCM9"
        size={'large'}
        view={'view'}
        theme={'balck'}
        />
        <SpotifyPlayer
        uri="spotify:playlist:37i9dQZF1DWSV3Tk4GO2fq"
        size={'large'}
        view={'view'}
        theme={'balck'}
        />
        <SpotifyPlayer
        uri="spotify:playlist:37i9dQZF1DWU13kKnk03AP"
        size={'large'}
        view={'view'}
        theme={'balck'}
        />
    </div>
  )
}

export default App;
