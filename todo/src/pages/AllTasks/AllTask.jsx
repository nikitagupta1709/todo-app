import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
// import { BiEdit } from 'react-icons/bi'
import { MdOutlineDoneAll, MdDelete } from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import './allTask.css'


export const AllTask = () => {
    const [task, setTask] = useState([]);
    // const [currentPage, setCurrentPage] = useState(1);

    // const getPrevious  = () => {
    //     setCurrentPage(currentPage - 1)
    // }
    // const getNext  = () => {
    //     setCurrentPage(currentPage + 1)
    // }
    var count = 1;
    useEffect(() => {
        getTasks();
    },[])

    const getTasks = () =>{
        axios.get(`http://localhost:3004/tasks`)
        .then((res) => setTask(res.data))
    }

    const handleProgress = async (id) => {
        let given = await axios.get(`http://localhost:3004/tasks/${id}`)
        console.log(given);
        delete given.id;

        await axios.post(`http://localhost:3004/progress`, given.data)
        .then((res)=>console.log(res))
    }
    const handleDelete = (id, index) => {
        axios.delete(`http://localhost:3004/tasks/${id}`)

        task.splice(index,1)
        setTask([...task]);
        count --;
    }

  return (
    <div className='allTask'>
        <h1>All Task</h1>
        <div className='tasks'>
            {task.map((tasks, index) => (
                    <div className='container' key={tasks.id}>
                        <p>{count ++}</p>
                        <NavLink to={`/single/${tasks.id}`} className='name'><p color='black'>{tasks.name}</p></NavLink>
                        <div className='icons' >
                            <MdOutlineDoneAll color='green' onClick={() => handleProgress(tasks.id) }/>
                            <MdDelete color='gray' onClick={() => handleDelete(tasks.id, index) }/>
                        </div>
                    </div>
                ))
            }
        </div>
        {/* <div className='page'>
            <button disabled={currentPage === 1} onClick={getPrevious}>Prev</button>
            <p>{currentPage}</p>
            <button onClick={getNext}>Next</button>
        </div> */}
        <NavLink to="/progress" className='progress'><button >Progress Page</button></NavLink>
    </div>
  )
}
