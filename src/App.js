import React, { useState } from 'react';

function App() {
  const PersonCard = (props) => {
    const [age, setAge] = useState(props.age);
  
    const increaseAge = () => {
      setAge(age + 1);
    };
  
    return (
      <div>
        <h1>{props.firstName} {props.lastName}</h1>
        <p>Age: {age}</p>
        <p>Hair Color: {props.hairColor}</p>
        <button onClick={increaseAge}>Celebrate Birthday</button>
      </div>
    );
  };
  
  return (
    <div className="App">
      <PersonCard firstName="Jane" lastName="Doe" age={45} hairColor="Black" />
      <PersonCard firstName="John" lastName="Smith" age={88} hairColor="Brown" />
      <PersonCard firstName="Millard" lastName="Fillmore" age={50} hairColor="Brown" />
      <PersonCard firstName="Maria" lastName="Smith" age={62} hairColor="Brown" />
    </div>
  );
}

export default App;
