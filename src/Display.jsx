export default function Display({handleClick, taskArray }){
    return (
        <div className='display__task__container'>
      {taskArray.map(task => 
        <div className='display__task' key={task.id}>
           <p>{task.text}</p>
           <button onClick={() => handleClick(task.id)}>Remove</button>
        </div>
      )}
      </div>
    )
}