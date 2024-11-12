import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="app-header">
          <h1>Task Management App</h1>
        </header>
        <div className="app-content">
          <Routes>
            {/* Route for the Task List (Home Page) */}
            <Route path="/" element={<TaskList />} />

            {/* Route for Adding a New Task */}
            <Route path="/tasks/new" element={<TaskForm />} />

            {/* Route for Editing an Existing Task */}
            <Route path="/tasks/edit/:id" element={<TaskForm />} />
          </Routes>
        </div>
        <footer className="app-footer">
          <p>&copy; 2024 Task Management App</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
