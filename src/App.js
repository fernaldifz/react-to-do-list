import React, { useState, useEffect } from "react";
import data from "./data.json";

//components
import Header from "./Header";
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";

function App() {
  const [toDoList, setToDoList] = useState(data);
  const [taskInProgress, setTaskInProgress] = useState(0);

  useEffect(() => {
    setTaskInProgress(toDoList.filter((task) => !task.complete).length);
  });

  const handleToggle = (id) => {
    let mapped = toDoList.map((task) => {
      return task.id == Number(id)
        ? { id: task.id, task: task.task, complete: !task.complete }
        : { ...task };
    });
    setToDoList(mapped);
  };

  const handleFilter = () => {
    let filtered = toDoList.filter((task) => {
      return !task.complete;
    });
    setToDoList(filtered);
  };

  const addTask = (userInput) => {
    let newToDoList = [...toDoList];
    newToDoList = [
      ...newToDoList,
      { id: toDoList.length + 1, task: userInput, complete: false },
    ];
    setToDoList(newToDoList);
  };

  return (
    <div className="App">
      <Header />
      <ToDoList
        toDoList={toDoList}
        taskInProgress={taskInProgress}
        handleToggle={handleToggle}
        handleFilter={handleFilter}
      />
      <ToDoForm addTask={addTask} />
    </div>
  );
}

export default App;
