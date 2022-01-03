import React from "react";
import ToDo from "./ToDo";

const ToDoList = ({ toDoList, taskInProgress, handleToggle, handleFilter }) => {
  return (
    <div>
      <p>Total task remaining: {taskInProgress}</p>
      <table class="table">
        <tr>
          <td class="text">
            {toDoList.map((todo) => {
              return <ToDo todo={todo} handleToggle={handleToggle} />;
            })}
          </td>
        </tr>
      </table>
      <button className="button" onClick={handleFilter}>
        Clear Completed
      </button>
    </div>
  );
};

export default ToDoList;
