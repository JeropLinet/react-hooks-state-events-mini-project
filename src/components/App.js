import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [filteredTasks, setFilteredTasks] = useState(TASKS);

  const handleFilterChange = (filteredTasks) => {
    setFilteredTasks(filteredTasks);
  };

  const handleTaskFormSubmit = (newTask) => {
    setTasks([...tasks, newTask]);
    setFilteredTasks([...filteredTasks, newTask]);
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} tasks={tasks} setFilteredTasks={handleFilterChange} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit} />
      <TaskList tasks={filteredTasks} />
    </div>
  );
}

export default App;
