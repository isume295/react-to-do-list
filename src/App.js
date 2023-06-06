/* eslint-disable import/no-extraneous-dependencies */
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/TodoApp';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
