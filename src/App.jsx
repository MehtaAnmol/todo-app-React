import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Form from './Form';
import Display from './Display';
import './App.css'



function App() {
  const [inputValue, setInputValue] = useState('');
  const [taskArray , setTaskArray] = useState([]);
  const [statusArray, setStatusArray] = useState([]);

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
  function handleClick(id, status){
    if(status === 'delete')
      setTaskArray(taskArray.filter((task => task.id !== id)))
    if(status === 'completed'){
      const completedTask = taskArray.find(task => task.id === id)
      setTaskArray(taskArray.filter(task => task.id !== id));
      setStatusArray(prev => [...prev , completedTask])
    }
  }


  return (
    <div className='main__container'>
      <div className='hero__container'>
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
      <div className="status__container">
        <h1>Task Completed</h1>
        <div className="displayTask__container">
        {statusArray.map(task => 
            <div 
              className='display__task' 
              key={task.id}
            >
              <p>{task.text}</p>
            </div>)
        }
        </div>
      </div>
    </div>
  )

}  
export default App
