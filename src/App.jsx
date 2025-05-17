import React, { useEffect,useState   } from "react";
import ProgressTracker from "./components/ProgressTracker";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import './Style.css'

function App(){

  useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(tasks))
  });

  const [tasks, setTasks] = useState([]);
  const addTask = (task)=> {
     setTasks([...tasks, task])
  }
  const updateTask = (updatedTask, index) =>{
      const newtask = [...tasks];
      newtask[index] = updatedTask;
      setTasks(newtask);
  }
  const deleteTask = (index) =>{
    setTasks(tasks.filter((_, i) => i !=index)) 
  }
  const clearTasks = () =>{
    setTasks([]);
  }
  return (
  <div className="App">
    <header>
      <h1 className="title">TaskBuddy</h1>
      <p className="tagline">Your Friendly Task manager</p>
    </header>
    <TaskForm addTask = {addTask} />
    <TaskList tasks ={tasks}
    updateTask = {updateTask}
    deleteTask = {deleteTask} />
    <ProgressTracker tasks = {tasks} />

    {tasks.length > 0 && (<button className="clear-btn" onClick={clearTasks}>Clear all tasks</button>)}
    </div>
  )
}
export default App;
