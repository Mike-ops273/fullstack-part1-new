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
  const [selected, setSelected] = useState(0);

  const pointsArray = new Array(anecdotes.length).fill(0);
  //const testArray = [1, 2, 3, 4, 5, 6, 7];
  const [votes, setVote] = useState(pointsArray);

  function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomNumber);
  }

  const generateVote = () => {
    //setVote(votes[selected] + 1);
    //console.log(votes[selected]);
    const copyVotes = [...votes];
    copyVotes[selected] = copyVotes[selected] + 1;
    console.log(copyVotes);
    setVote(copyVotes);
  };

  return (
    <div>
      {anecdotes[selected]}
      <br />
      <p>has {votes[selected]} votes</p>
      <ButtonAnecdote handleClick={() => generateRandomNumber()} />
      <ButtonVote handleClick={() => generateVote()} />
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
