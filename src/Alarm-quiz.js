import React,{useState} from 'react';

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

function Alarm(){
  return(
  <h1 className="Alarm">
    Alarm
  </h1>
  )
}

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
            <Alarm></Alarm>
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

