import React, { useState, useEffect } from 'react'
import { useParams} from 'react-router-dom';
import '../css/cover.css';

export default function TodoDetailsPage() {
    const { id } = useParams();
    const [Todo, fetchTodoDetails] = useState([])
    const [comment, setInputValue] = useState("")

    const getData = () => {
      fetch('http://localhost:3000/todos/'+ id)
        .then((res) => res.json())
        .then((res) => {
          console.log(res)
          fetchTodoDetails(res)
        })
    }

    const onChangeHandler = event => {
      setInputValue(event.target.value);
   };

   const handleOnSubmit = e => {
      console.log(comment);
      fetch(`http://localhost:3000/todos/`+id, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            title: comment,
            completed: false
        })
       })
       .then(res => res.json())
       .catch((e) => console.error(e));
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

      <form className="ui form" onSubmit={handleOnSubmit}>
        <h2>Modify title</h2>
        <div className="field">
            <label>title</label>
            <input onChange={onChangeHandler} type="text" name="comment" value={comment} placeholder="comment"/>
        </div>
        <button className="ui button" type="submit">Submit</button>
      </form>
      
      </main>
    )
  }