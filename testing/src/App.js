import { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const increaseGood = () => {
    setGood(good + 1);
  };
  const increaseNeutral = () => {
    setNeutral(neutral + 1);
  };
  const increaseBad = () => {
    setBad(bad + 1);
  };

  let submissions;
  submissions = good + neutral + bad;
  let average;
  let total = good - bad;
  average = total / submissions;
  let percentage = (good / submissions) * 100;

  //store all statistical data in object
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
      <Button handleClick={() => increaseGood()} text="good" />
      <Button handleClick={() => increaseNeutral()} text="neutral" />
      <Button handleClick={() => increaseBad()} text="bad" />
      <h2>Statistics</h2>
      {console.log(statsObject)}
      <br />
      <Statistics statsObject={statsObject} />
    </div>
  );
};

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const Statistics = (props) => {
  /// if no feedback render this:
  if (props.statsObject.objectSubmissions === 0) {
    return (
      <table>
        <tbody>
          {console.log(
            props.statsObject.good,
            props.statsObject.neutral,
            props.statsObject.bad
          )}
          <StatisticLine text="good" value={props.statsObject.good} />
          <StatisticLine text="neutral" value={props.statsObject.neutral} />
          <StatisticLine text="bad" value={props.statsObject.bad} />
          no feedback
        </tbody>
      </table>
    );
  } //else
  return (
    <table>
      <tbody>
        {console.log("in else statement")}
        <StatisticLine text="good" value={props.statsObject.good} />
        <StatisticLine text="neutral" value={props.statsObject.neutral} />
        <StatisticLine text="bad" value={props.statsObject.bad} />
        <StatisticLine text="all" value={props.statsObject.objectSubmissions} />
        <StatisticLine text="average" value={props.statsObject.objectAverage} />
        <StatisticLine
          text="positive"
          value={props.statsObject.objectPercentage}
          text2="%"
        />
      </tbody>
    </table>
  );
};

const StatisticLine = (props) => {
  return (
    <tr>
      <td>
        {props.text} {props.value} {props.text2}
      </td>
    </tr>
  );
};

export default App;
