
import './App.css';
import { useState } from 'react';

function App() {

  const [counter , setCount] = useState(0);

  const increaseHandler = () =>{
    if(counter >= 20){
      setCount(20);
    }
    else{
      setCount(counter+1);
    }
   


  }
  const decreaseHandler = () =>{
    if(counter <= 0){
      setCount(0);
    }
    else{
      setCount(counter -1);
    }
   
  }



  return (
    <div className='App-header'>
    <h1>Couter app</h1>
    <br/>
    <div>{counter}</div>
    <button onClick={increaseHandler}>Increase</button>
    <button onClick={decreaseHandler}>decrease</button>


    
    </div>
  );
}

export default App;
