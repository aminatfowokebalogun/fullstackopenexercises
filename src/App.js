import React, {useState} from 'react';
import Button from './Button';
import Statistics from './Statistics';


function App() {
  //STATES
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  //functions to add
  const handleClickGood =()=>{setGood(good + 1)}
  const handleClickBad =()=>{setBad(bad + 1)}
  const handleClickNeutral =()=>{setNeutral(neutral + 1)}
  

  return (
    <>
    <h1>
      UNICAFE FEEDBACK PAGE
    </h1>

    <div>
      <Button handleClick={handleClickGood} value={good} text='Rate Good'/><br/>
      <Button handleClick={handleClickBad} value={bad} text='Rate Bad'/><br/>
      <Button handleClick={handleClickNeutral} value={neutral} text='Rate Neutral'/>
    </div>

    <Statistics good={good} bad={bad} neutral={neutral}/>
    </>
  );
}

export default App;
