import React from 'react'
import './progress.css'
import { MdOutlineDoneAll, MdDelete } from 'react-icons/md'
import { NavLink } from 'react-router-dom';

export const Progress = () => {
    const [currentPage, setCurrentPage] = React.useState(1);

    const getPrevious  = () => {
        setCurrentPage(currentPage - 1)
    }
    const getNext  = () => {
        setCurrentPage(currentPage + 1)
    }
    var count = 1;

  return (
    <div className='progress'>
        <h1>All Task</h1>
        <div className='tasks'>
            {/* {task.map((tasks) => ( */}
                    <div className='container' >
                        <p>{count ++}</p>
                        <p>hi</p>
                        <div className='icons' >
                            <MdOutlineDoneAll />
                            <MdDelete />
                        </div>
                    </div>
                {/* ))} */}
        </div>
        <div className='page'>
            <button disabled={currentPage === 1} onClick={getPrevious}>Prev</button>
            <p>{currentPage}</p>
            <button onClick={getNext}>Next</button>
        </div>
        <NavLink to="/done"><button className='done'>Done Page</button></NavLink>
    </div>
  )
}
