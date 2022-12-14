import axios from 'axios';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './home.css'

const initState = {
  name:"",
  desc:"",
  date:"",
  category:""
}

export const Home = () => {
  const[task, setTask] = useState(initState);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const {name, value} = e.target;
    setTask({...task, [name]:value});
  }
  console.log(task);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3004/tasks', task)
    setTask(initState)
    alert("Task has been added");
    navigate("/allTask");
  }

  return (
    <div className='home'>
        <h1>Create a new task</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" className='input' name="name" value={task.name} placeholder="Enter Task Name" onChange={handleChange} required/>
            <input type="date" className='input' name="date" value={task.date} required onChange={handleChange}/><br />
            <select  id="" className='cat' placeholder="Select" name="category" value={task.category} onChange={handleChange}required>
                <option value="">Select Task Category</option>
                <option value="personal">Personal</option>
                <option value="official">Official</option>
                <option value="others">Others</option>
            </select><br />
            <textarea rows="8" cols="50" placeholder="Task Description..." name="desc" value={task.desc} onChange={handleChange}required/>
            <button type="submit" className='btn'>Create Task</button>
        </form>
    </div>
  )
}
