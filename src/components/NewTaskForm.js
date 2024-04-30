import React, { useState } from 'react';

const NewTaskForm = ({ categories, onTaskFormSubmit }) => {
  const [taskText, setTaskText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const handleTextChange = (e) => {
    setTaskText(e.target.value)
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    const newTask = { text: taskText, category: selectedCategory };
    onTaskFormSubmit(newTask)
    setTaskText('') 
    setSelectedCategory(categories[0])
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Task:
        <input type="text" value={taskText} onChange={handleTextChange} />
      </label>
      <label>
        Category:
        <select value={selectedCategory} onChange={handleCategoryChange}>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </label>
      <button type="submit">Add Task</button>
    </form>
  )
}

export default NewTaskForm
