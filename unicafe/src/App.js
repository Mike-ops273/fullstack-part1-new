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
    good: good,
    neutral: neutral,
    bad: bad,
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
      <StatisticsLine text="good" value={good} />
      <StatisticsLine text="neutral" value={neutral} />
      <StatisticsLine text="bad" value={bad} />
      <StatisticsLine text="all" value={statsObject.objectSubmissions} />
      <StatisticsLine text="average" value={statsObject.objectAverage} />
      <StatisticsLine text="positive" value={statsObject.objectPercentage} />
    </div>
  );
};

const StatisticsLine = (props) => {
  return (
    <div>
      {props.text} {props.value}
    </div>
  );
};

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

export default App;
