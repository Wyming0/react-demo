import React,{useState} from 'react';
import './App.css';

function App() {
  let [count,setCount] = useState(0)
  return (
    <div>
      <div>{count}</div>
      <button onClick={()=> setCount(count+1)}>改变值</button>
    </div>
  )
}

export default App;
