import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Form from './Form'
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
      <div className='display__task__container'>
      {taskArray.map(task => 
        <div className='display__task' key={task.id}>
           <p>{task.text}</p>
           <button onClick={() => handleClick(task.id)}>Remove</button>
        </div>
      )}
      </div>
    </div>
  )

}  
export default App

