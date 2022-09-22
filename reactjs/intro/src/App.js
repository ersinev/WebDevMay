import logo from './logo.svg';
import './App.css';
import ChildComponent from './childComponent';
import {useState} from 'react'


function App() {
  // let number =1;
  const [number,setNumber] = useState(1)
  function handleClick(){
    setNumber(number+1)
    console.log('click event!!!',number)
  }
  return (
    <div className="App">

        {/* <ChildComponent name="Coffee"/> */}
        <button onClick={handleClick}>Do not click it</button>
        <h1>{number}</h1>

    </div>
  );
}

export default App;