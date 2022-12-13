import React from 'react'
import './done.css'
import { MdDelete } from 'react-icons/md'

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
    <div className='done'>
        <h1>All Task</h1>
        <div className='tasks'>
            {/* {task.map((tasks) => ( */}
                    <div className='container' >
                        <p>{count ++}</p>
                        <p>hi</p>
                        <div className='icons' >
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
    </div>
  )
}
