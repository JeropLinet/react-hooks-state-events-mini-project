import React, { useState } from "react";
import Task from "./Task";

function TaskList({ tasks }) {
  const [taskList, setTaskList] = useState(tasks);

  const handleDelete = (taskToDelete) => {
    const updatedTasks = taskList.filter((task) => task !== taskToDelete);
    setTaskList(updatedTasks);
  };
  console.log('Yo I was able to delete',taskList)

  return (
    <div className="tasks">
      {taskList.map((task, index) => (
        <Task key={index} task={task} onDelete={() => handleDelete(task)} />
      ))}
    </div>
  );
}

export default TaskList;


