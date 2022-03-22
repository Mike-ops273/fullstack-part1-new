import { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const increaseGood = (good) => {
    console.log("the good", good);
    setGood(good);
  };
  const increaseNeutral = (neutral) => {
    console.log("the neutral", neutral);
    setNeutral(neutral);
  };
  const increaseBad = (bad) => {
    console.log("the bad", bad);
    // setBad(bad + 1); this does not work, do addition in return
    setBad(bad);
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

export default App;
