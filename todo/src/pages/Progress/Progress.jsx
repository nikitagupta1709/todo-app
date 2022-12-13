import React from 'react'
import './progress.css'
import { MdOutlineDoneAll, MdDelete } from 'react-icons/md'
import { NavLink } from 'react-router-dom';
import axios from 'axios'


export const Progress = () => {
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
        axios.get(`http://localhost:3004/progress`)
        .then((res) => setTask(res.data))
    }

    const handleDone = async (id) => {
        let given = await axios.get(`http://localhost:3004/progress/${id}`)
        console.log(given);
        delete given.id;

        await axios.post(`http://localhost:3004/done`, given.data)
        .then((res)=>console.log(res))
    }

  return (
    <div className='progress'>
        <h1>Task in progress</h1>
        <div className='tasks'>
            {task.map((tasks) => (
                    <div className='container' key={tasks.id}>
                        <p>{count ++}</p>
                        <p>{tasks.name}</p>
                        <div className='icons' >
                            <MdOutlineDoneAll onClick={() => handleDone(tasks.id) }/>
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
        <NavLink to="/done"><button className='done'>Done Page</button></NavLink>
    </div>
  )
}
