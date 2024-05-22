import PropTypes from 'prop-types';

export default function Display({handleClick, taskArray }){
    return (
        <div className='display__task__container'>
      {taskArray.map(task => 
        <div className='display__task' key={task.id}>
           <p>{task.text}</p>
           <Button task ={task}  handleClick = {handleClick}/>
        </div>
      )}
      </div>
    )
}

function Button({handleClick , task}){
    return(
        <div className = 'display__task__button'>
            <button onClick={() => handleClick(task.id, 'delete')}>❌</button>
            <button onClick={() => handleClick(task.id, 'completed')}>✔️</button>
        </div>
    )
}

Display.propTypes ={
    handleClick: PropTypes.func,
    taskArray: PropTypes.array,
}
Button.propTypes = {
    handleClick: PropTypes.func,
    task: PropTypes.object,
}