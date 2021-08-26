import React, { useState } from 'react';

const ToDoForm = ({ addTask }) => {

    const [ userInput, setUserInput ] = useState('');

    const handleChange = (e) => {
        // get the value form the form
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // add task is the function passed to this component in props
        addTask(userInput);
        // we don't need user input any more not that it is added
        setUserInput("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input value={userInput} type="text" onChange={handleChange} placeholder="Add something..."/>
            <button className="button">Submit</button>
        </form>
    );
};

export default ToDoForm;