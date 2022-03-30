import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
  ];

  //initialize random state index
  let random = Math.floor(Math.random() * anecdotes.length);

  //index selector for anecdotes
  const [selected, setSelected] = useState(random);
  //state array filled with zeros to hold votes
  const [votes, setVote] = useState(new Array(anecdotes.length).fill(0));
  //track the highest vote's index in array
  const [best, setBest] = useState(random);
  //array for testing: const testArray = [1, 2, 3, 4, 5, 6, 7];
  //highest vote count
  const [highestVote, setHighestVote] = useState(0);

  //generate a random index indicator for anecdotes array
  function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomNumber);
  }

  let indexBest = 0;
  const generateVote = () => {
    //spread votes into copyVotes
    const copyVotes = [...votes];
    //increment selected vote
    copyVotes[selected] += 1;
    //store highest vote count in vote array:
    const max = Math.max(...copyVotes);
    //index of highest vote count in vote array
    indexBest = copyVotes.indexOf(max);
    setHighestVote(max);
    setVote(copyVotes);
    setBest(indexBest);
    console.log("index with largest vote:", indexBest);
    console.log("highest vote count:", max);
    console.log("array of votes:", copyVotes);
    console.log("");
  };

  return (
    <div>
      <h1>Anecdotes of the day</h1>
      {anecdotes[selected]}
      <br />
      <p>has {votes[selected]} votes</p>
      <ButtonAnecdote handleClick={() => generateRandomNumber()} />
      <ButtonVote handleClick={() => generateVote()} />
      <h2>Anecdote with most votes</h2>
      <br />
      {anecdotes[best]}
      <br />
      has {("placeholder", highestVote)} votes
    </div>
  );
};

const ButtonAnecdote = (props) => {
  return (
    <div>
      <button onClick={props.handleClick}>next anecdote</button>
      <p></p>
    </div>
  );
};
const ButtonVote = (props) => {
  return (
    <div>
      <button onClick={props.handleClick}>vote</button>
    </div>
  );
};

export default App;
