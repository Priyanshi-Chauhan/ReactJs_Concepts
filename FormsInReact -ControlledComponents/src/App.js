import { useState } from "react";
import './App.css';

function App() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [headfirst, setHeadfirst] = useState("");
  const [headlast, setHeadlast] = useState("");
  function handlechange(e) {
    console.log(e.target.value);
    setFirstname(e.target.value);
  } 
  function handlechange2(e) {
    setLastname(e.target.value);
  }

  function onsubmit(e) {
    e.preventDefault();
    setHeadfirst(firstname);
    setHeadlast(lastname);
  }

  return (
<>
      <form className="App">
        <h1>hello {headfirst}{headlast}</h1>
        <label>FirstName :
          <input type="text" onChange={handlechange}></input>
        </label>
        <label> Lastname:
          <input type="text" onChange ={handlechange2}/>
        </label>
        <button type="submit" onClick={onsubmit}>Submit</button>
    </form>

    </>
  );
}

export default App;
