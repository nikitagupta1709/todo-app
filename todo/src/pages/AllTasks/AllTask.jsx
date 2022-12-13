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
    const [currentPage, setCurrentPage] = useState(1);

    const getPrevious  = () => {
        setCurrentPage(currentPage - 1)
    }
    const getNext  = () => {
        setCurrentPage(currentPage + 1)
    }
    var count = 1;
    useEffect(() => {
        getTasks();
    },[])

    const getTasks = () =>{
        axios.get(`http://localhost:3004/tasks?page=${currentPage}&limit=5`)
        .then((res) => setTask(res.data))
    }

  return (
    <div className='allTask'>
        <h1>All Task</h1>
        <div className='tasks'>
            {task.map((tasks) => (
                    <div className='container' key={tasks.id}>
                        <p>{count ++}</p>
                        <p>{tasks.name}</p>
                        <div className='icons' >
                            {/* <BiEdit /> */}
                            <MdOutlineDoneAll />
                            <MdDelete />
                        </div>
                    </div>
                ))
            }
        </div>
        <div className='page'>
            <button disabled={currentPage === 1} onClick={getPrevious}>Prev</button>
            <p>{currentPage}</p>
            <button onClick={getNext}>Next</button>
        </div>
        <NavLink to="/progress"><button className='progress'>Progress Page</button></NavLink>
    </div>
  )
}
