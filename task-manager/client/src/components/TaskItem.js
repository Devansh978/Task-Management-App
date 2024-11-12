// src/components/TaskItem.js
import React from 'react';
import './TaskItem.css'; // Ensure you import the CSS

const TaskItem = ({ task, onDelete, onEdit }) => {
  return (
    <div className="task-item">
      <h3>{task.title}</h3>
      <p>{task.category} - {new Date(task.deadline).toLocaleString()}</p>
      <div className="task-buttons">
        <button className="btn-edit" onClick={() => onEdit(task)}>Edit</button>
        <button className="btn-delete" onClick={() => onDelete(task._id)}>Delete</button>
      </div>
    </div>
  );
};

export default TaskItem;
