import React from 'react'
import './personal.css'
import axios from 'axios';
import { AiFillExclamationCircle } from 'react-icons/ai'

export const Personal = () => {
    const [task, setTask] = React.useState([]);
    // const [currentPage, setCurrentPage] = React.useState(1);

    // const getPrevious  = () => {
    //     setCurrentPage(currentPage - 1)
    // }
    // const getNext  = () => {
    //     setCurrentPage(currentPage + 1)
    // }
    var count = 1;
    
    React.useEffect(() => {
        getTasks();
    },[])

    const getTasks = () =>{
        axios.get(`http://localhost:3004/tasks?category=personal`)
        .then((res) => setTask(res.data))
    }

  return (
    <div className='personal'>
        <h1> Personal Todo</h1>
        <div className='tasks'>
            {task.map((tasks) => (
                    <div className='container' key={tasks.id}>
                        <p>{count ++}</p>
                        <p>{tasks.name}</p>
                        <div className='icons' >
                            <AiFillExclamationCircle />
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
    </div>
  )
}
