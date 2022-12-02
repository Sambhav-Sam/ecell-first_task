import { useEffect, useState } from 'react';
import {ImQuotesLeft} from "react-icons/im";
import {ImQuotesRight} from "react-icons/im";
import './App.css';
import Box from './Box';
import Input from './Input';

function App() {
  const [todos, setToDo] = useState([]);
  const [quote, setQuote] = useState("");

  useEffect(()=>{
    fetch("http://api.quotable.io/random")
    .then(res => res.json())
    .then(
      (quote) => {
        setQuote(quote.content);
      }
    )
  },[]);
  
  const removeToDo = (id) => {
    // console.log(id);
    const newTodos = todos.filter(
      (d,index) => {
        if(index !== id){
          return true;
        }else{
          return false;
        }
      }
    )
    setToDo(newTodos);
  }

  const addToDoHandler = (item) => {
    // console.log(item);
    setToDo([
      ...todos,
      {
        item,
        time: new Date().toLocaleTimeString()
      }
    ])
  }


  return (
    <div className="flex flex-col justify-center items-center bg-black h-screen p-3">
      <div className="flex">
      <ImQuotesLeft className="text-white mr-2" />
      <h1 className="text-white mb-10 font-mono font-bold">{quote}</h1>
      <ImQuotesRight className="text-white ml-2" />
      </div>
      <div className="rounded mx-auto w-[50%] min-h-[550px] shadow-2xl bg-white">
        <Input handler={addToDoHandler} />
        <Box data={todos} removeHandler={removeToDo} />
      </div>
    </div>
  )
}

export default App;
