import React from 'react';

const ToDo = ({todo, handleToggle}) => {

    const handleClick = (e) => {
        // use the function passed in props to deal with 'crossing an item off'/ clicking an item
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }

    return (
        <div id={todo.id} key={todo.id + todo.task} name="todo" value={todo.id} onClick={handleClick} className={todo.complete ? "todo strike" : "todo"}>
            {todo.task}
        </div>
    );
};

export default ToDo;