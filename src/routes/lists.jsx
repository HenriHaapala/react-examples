import React, { Component } from 'react';
import '../css/cover.css';

import ToDoContainer from '../components/todoList/ToDoContainer';
import Tooltip from "../components/tooltip";

class Lists extends Component {

  state = {
    todos: [],
    sortTitle: false
  }

  handleCompleteChange = (updateObj) => {
    // console.log(updateObj)
    const updatedTodos = this.state.todos.map(todo => {
      if(todo.id === updateObj.id){
        const update = {
          ...todo,
          completed: !todo.completed
        }
        return update
      }
      return todo
    })
    this.setState({
      todos: updatedTodos
    })
  }

  handleAddNewToDo = (newTodoObj) => {
    // console.log(newTodoObj)
    this.setState({
      todos: [...this.state.todos, newTodoObj]
    })
  }

  handleRemoveTodo = (removedTodo) => {
    console.log(removedTodo)
    const removedTodoArr = this.state.todos.filter(todo => todo.id !== removedTodo.id)

    this.setState({
      todos: removedTodoArr
    })
  }

  componentDidMount(){
    fetch(`http://localhost:3000/todos`)
    .then(res => res.json())
    .then(todosArr => this.setState({
      todos: todosArr
    }))
  }

  handleSortTitleChange = () => {
    this.setState(prevState => {
      return {
        sortTitle: !prevState.sortTitle
      }
    })
  }

  sortArray = () => {
    if(this.state.sortTitle){
      const sortedArray = [...this.state.todos].sort((a,b) => {
        if(a.title.length > b.title.length){
          // debugger
          return -1
        }
        else if (a.title.length < b.title.length){
          return 1
        }
        else{
          return 0
        }
      })
      return sortedArray
    }
    else{
      return this.state.todos
    }
  }
render(){
    return (
      <main className="inner cover">
        <Tooltip content="Quack!" direction="down">
          <span className="example-emoji" role="img" aria-label="duck emoji">
            Hover me im reusable 🦆!
          </span>
        </Tooltip>
        <h2 className="cover-heading">Lists</h2>
        {
          this.state.sortTitle ?
          <button onClick={this.handleSortTitleChange} className="ui button green">Sort by Normal</button>
          :
          <button onClick={this.handleSortTitleChange} className="ui button purple">Sort by Title Length</button>
        }
        <ToDoContainer todos={this.sortArray()} handleCompleteChange={this.handleCompleteChange} handleAddNewToDo={this.handleAddNewToDo} handleRemoveTodo={this.handleRemoveTodo}/>
      </main>
    );
  }
}

export default Lists;