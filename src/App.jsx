import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Form from './Form';
import Display from './Display';
import './App.css'



function App() {
  const [inputValue, setInputValue] = useState('');
  const [taskArray , setTaskArray] = useState([]);

  function handleChange(e){  
    setInputValue(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();
    if(inputValue !== ''){
      const newTask = {id: uuidv4(), text: inputValue}
      setTaskArray(prev => [...prev , newTask])
      setInputValue('')
    }
  }
  function handleClick(id){
    setTaskArray(taskArray.filter((task => task.id !== id)))
  }

  return (
    <div className='main__container'>
      <h1>Todo App</h1>
      <Form
        inputValue = {inputValue}
        handleChange = {handleChange}
        handleSubmit = {handleSubmit}
      />
      <Display
        taskArray = {taskArray}
        handleClick = {handleClick}
      />
    </div>
  )

}  
export default App

