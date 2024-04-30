import React, { useState } from 'react';

const CategoryFilter = ({ categories, tasks, setFilteredTasks }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setFilteredTasks(tasks);
    } else {
      const filteredTasks = tasks.filter(task => task.category === category);
      setFilteredTasks(filteredTasks);
    }
  };

  return (
    <div>
      {categories.map(category => (
        <button
          key={category}
          className={selectedCategory === category ? 'selected' : ''}
          onClick={() => handleCategoryClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
