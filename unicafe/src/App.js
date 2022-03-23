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
  console.log("submissions:", submissions);
  let average;
  let total = good - bad;
  average = total / submissions;
  let percentage = (good / submissions) * 100;

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
      <Statistics statistics={submissions} text="all" />
      <Statistics statistics={average} text="average" />
      <Statistics statistics={percentage} text="positives" text2="%" />
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

/*
const Submissions = (props) => <div>all {props.total}</div>;
const Average = (props) => <div>average {props.average}</div>;
const Percentage = (props) => <div>positives {props.percentage}%</div>;
*/

const Statistics = (props) => {
  return (
    <div>
      {props.text} {props.statistics} {props.text2}
    </div>
  );
};

export default App;
