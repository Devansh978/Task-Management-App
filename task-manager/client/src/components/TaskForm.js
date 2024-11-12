import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './TaskForm.css';

const TaskForm = () => {
  const [task, setTask] = useState({ title: '', description: '', category: '', deadline: '', reminder: '' });
  const { id } = useParams();
  const navigate = useNavigate();

  // Fetch the existing task if editing
  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:5000/api/tasks/${id}`)
        .then(response => setTask(response.data))
        .catch(error => console.error(error));
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask(prevTask => ({ ...prevTask, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        // Update existing task
        await axios.put(`http://localhost:5000/api/tasks/${id}`, task);
      } else {
        // Create new task
        await axios.post('http://localhost:5000/api/tasks', task);
      }
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="task-form-container">
      <form onSubmit={handleSubmit} className="task-form">
        <h2>{id ? 'Edit Task' : 'Add New Task'}</h2>
        
        <input
          type="text"
          name="title"
          value={task.title}
          onChange={handleChange}
          placeholder="Title"
          required
          className="input-field"
        />

        <textarea
          name="description"
          value={task.description}
          onChange={handleChange}
          placeholder="Description"
          className="textarea-field"
        />

        <input
          type="text"
          name="category"
          value={task.category}
          onChange={handleChange}
          placeholder="Category"
          required
          className="input-field"
        />

        <label>Deadline:</label>
        <input
          type="datetime-local"
          name="deadline"
          value={task.deadline}
          onChange={handleChange}
          required
          className="input-field"
        />

        <label>Reminder:</label>
        <input
          type="datetime-local"
          name="reminder"
          value={task.reminder}
          onChange={handleChange}
          required
          className="input-field"
        />

        <button type="submit" className="submit-button">
          Save Task
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
