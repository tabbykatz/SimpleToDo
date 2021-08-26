import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({toDoList, handleToggle, handleFilter}) => {

    // map out our list items from the props, passing them functions to handle events
    return (
        <div>
            {toDoList.map(todo => {
                return (
                    <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter}/>
                )
            })}
            <button className="button" onClick={handleFilter}>Remove Completed Tasks</button>
        </div>
    );
};

export default ToDoList;