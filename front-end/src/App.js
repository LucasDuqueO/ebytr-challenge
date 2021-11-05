import './App.css';
import { Routes, Route } from 'react-router';
import TaskList from './components/TaskList';
import TaskUpdate from './components/TaskUpdate';
import TaskCreate from './components/TaskCreate';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<TaskList />} />
      <Route path="/edit/:id" element={<TaskUpdate />} />
      <Route path="/create" element={<TaskCreate />} />
    </Routes>
  );
}

export default App;
