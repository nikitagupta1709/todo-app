import React from 'react'
import './done.css'
import axios from 'axios';
import { HiCheckCircle } from 'react-icons/hi'

export const Done = () => {
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
        axios.get(`http://localhost:3004/done`)
        .then((res) => setTask(res.data))
    }

  return (
    <div className='done'>
        <h1> Task Done </h1>
        <div className='tasks'>
            {task.map((tasks) => (
                    <div className='container' key={tasks.id}>
                        <p>{count ++}</p>
                        <p>{tasks.name}</p>
                        <div className='icons' >
                            <HiCheckCircle />
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
