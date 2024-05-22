
export default function Form({ inputValue, handleSubmit, handleChange }){
    return (
        <form onSubmit={handleSubmit} className='form'>
            <input 
                type="text" 
                value={inputValue} 
                onChange={handleChange} 
                placeholder='Enter new Task'
            />
            <button className='form__button' type='submit'>Add</button>
        </form>
    )
}