import React, { useState, useEffect } from 'react'
import { useParams} from 'react-router-dom';
import '../css/cover.css';

export default function TodoDetailsPage() {
    const { id } = useParams();
    const [Todo, fetchTodoDetails] = useState([])

    const getData = () => {
      fetch('http://localhost:3000/todos/'+ id)
        .then((res) => res.json())
        .then((res) => {
          console.log(res)
          fetchTodoDetails(res)
        })
    }

    useEffect(() => {
        getData()
      }, [])

    return (
      <main className="inner cover">
        <h2 className="cover-heading">Todo:{ id }</h2>
        <ul className='list-group'>
            {Object.keys(Todo).map((keyName, i) => (
                <li key={i}>
                    <span>{keyName} : {Todo[keyName]}</span>
                </li>
            ))}
      </ul>
      </main>
    )
  }