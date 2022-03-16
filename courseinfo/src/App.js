const App = () => {
  //all data
  const course = "Half Stack application development ";
  const part1 = "Fundamentals of React ";
  const exercises1 = 10;
  const part2 = "Using props to pass data ";
  const exercises2 = 7;
  const part3 = "State of a component ";
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content content={part1 + exercises1} />
      <Content content={part2 + exercises2} />
      <Content content={part3 + exercises3} />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

//my components
const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};
const Content = (props) => {
  return (
    <div>
      <Part stuff={props.content} />
    </div>
  );
};
const Part = (props) => {
  return (
    <div>
      <p>{props.stuff}</p>
    </div>
  );
};
const Total = (props) => {
  return (
    <div>
      <p>{props.total}</p>
    </div>
  );
};

export default App;
