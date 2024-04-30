import React from "react";

function Task({ task, onDelete }) {
  const handleDelete = () => {
    onDelete()
  };
  return (
    <div className="task">
      <div className="label">{task.category}</div>
      <div className="text">{task.text}</div>
      <button onClick={handleDelete} className="delete">X</button>
    </div>
  );
}

export default Task;


