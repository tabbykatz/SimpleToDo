import React, { useState } from 'react';
// some to do items to start with
import data from "./data.json";
import Header from "./Header";
import ToDoList from "./ToDoList";
import ToDoForm from './ToDoForm';

function App() {
  // state data looks like this:
    // "id": 1,
    // "task": "npx create-react-app todo-cra",
    // "complete": false
  const [ toDoList, setToDoList ] = useState(data);

  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      // if item in state has the id of the toggled item, flip it
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
  }

  const handleFilter = () => {
    // clear completed tasks, set state to only have those that aren't complete
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
  }

  const addTask = (userInput ) => {
    let currentState = [...toDoList];
    let newState = [...currentState, { id: toDoList.length + 1, task: userInput, complete: false }];
    setToDoList(newState);
  }

  return (
    <div className="App">
      <Header />
      <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter}/>
      <ToDoForm addTask={addTask}/>
    </div>
  );
}

export default App;
