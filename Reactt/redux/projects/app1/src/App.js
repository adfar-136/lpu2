
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [quote,setQuote] = useState("")
  const getQuote=()=>{
    fetch("https://api.quotable.io/random").
    then((response)=>response.json())
    .then((data)=>setQuote(data))
  }
  useEffect(()=>getQuote(),[])
  return (
    <div className="App">
      <span>{quote.content}</span>
      <h4>{quote.author}</h4>
      <button onClick={getQuote}>Get Quote</button>
    </div>
  );
}

export default App;
