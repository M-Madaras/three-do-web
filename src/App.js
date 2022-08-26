import TodoList from './components/TodoList';
import './App.css';
import { useState } from 'react';
import AddTask from './components/AddTask';


function App() {
  const [tasklist, setTaskList] = useState();
  return (
   <>
   <h1>Three-do</h1>
   <TodoList tasklist={tasklist} setTaskList={setTaskList}/>
   <AddTask setTasklist={setTaskList}/>
   </>
  );
}

export default App;
