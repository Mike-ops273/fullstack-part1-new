import { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const increaseGood = (good) => {
    setGood(good);
  };
  const increaseNeutral = (neutral) => {
    setNeutral(neutral);
  };
  const increaseBad = (bad) => {
    setBad(bad);
  };

  let submissions;
  submissions = good + neutral + bad;
  let average;
  let total = good - bad;
  average = total / submissions;
  let percentage = (good / submissions) * 100;

  //store statistical data in object
  const statsObject = {
    objectSubmissions: good + neutral + bad,
    objectAverage: average,
    objectTotal: total,
    objectPercentage: percentage,
  };

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={() => increaseGood(good + 1)} text="good" />
      <Button handleClick={() => increaseNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => increaseBad(bad + 1)} text="bad" />
      <h2>Statistics</h2>
      <Display display={good} text="good" />
      <Display display={neutral} text="neutral" />
      <Display display={bad} text="bad" />
      {console.log(statsObject)}
      <Statistics statsObject={statsObject} />
    </div>
  );
};

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);
const Display = (props) => (
  <div>
    {props.text} {props.display}
  </div>
);

const Statistics = (props) => {
  console.log("outside return statement:", props.statsObject.objectSubmissions);
  if (props.statsObject.objectSubmissions === 0) {
    return <div>no data</div>;
  }
  return (
    <div>
      {console.log(
        "inside return statement:",
        props.statsObject.objectSubmissions
      )}
      all {props.statsObject.objectSubmissions} <br />
      average {props.statsObject.objectAverage} <br />
      positive {props.statsObject.objectPercentage} % <br />
    </div>
  );
};

export default App;
