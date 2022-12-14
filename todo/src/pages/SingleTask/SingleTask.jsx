import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import './singleTask.css'

export const SingleTask = () => {
  const[data, setData] = useState({});
  let {id} = useParams();
  // console.log(id)
  useEffect(()=>{
    getData();
  },[])
  const getData = async() => {
    let task = await axios.get(`http://localhost:3004/tasks/${id}`)
    console.log(task.data)
    setData(task.data);
  }
  
  return (
    <div className='single'>
        <h1>{data.name}</h1>
        <div className='dates'>
            <p>Date: {data.date} </p>
            <p>Category: {data.category}</p>
        </div>
        <p>{data.desc}</p>
    </div>
  )
}
