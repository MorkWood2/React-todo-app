import React, {Component} from 'react';
import Header from './components/layout/header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';




class App extends Component{

state = {
  todos: [
    {
      id:uuid.v4(),
      title: 'study',
      completed : false
    },
    {
      id:uuid.v4(),
      title: 'take out trash',
      completed : false
    },
    {
      id:uuid.v4(),
      title: 'teach coding',
      completed : false
    },
  ]
}
//toggle completed
markComplete = (id) => {
  this.setState({ todos: this.state.todos.map(todo => {
    if (todo.id === id) {
        todo.completed = !todo.completed
    }
    return todo;
  }) });
}
//delete todo
delTodo = (id) => {
  this.setState({ todos: [...this.state.todos.filter(todo => todo.id
  !== id)] })
}
//add todo
addTodo = (title) => {
  const newTodo = {
    id:uuid.v4(),
    title,
    completed: false
  }
  this.setState({ todos: [...this.state.todos, newTodo] })
}
  render(){
    return (
      <div className="App">
        <div className ="container" >
          < Header/>
        < AddTodo addTodo = {this.addTodo} />
          <Todos todos = {this.state.todos} markComplete = {this.markComplete}
            delTodo = {this.delTodo}/>
        </div>
      </div>
    );
  }
}

export default App;
