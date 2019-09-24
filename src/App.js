import React, {Component} from 'react';
import Todos from './components/Todos';



class App extends Component{

state = {
  todos: [
    {
      id:1,
      title: 'study',
      completed : false
    },
    {
      id:2,
      title: 'take out trash',
      completed : false
    },
    {
      id:3,
      title: 'teach coding',
      completed : true
    },

  ]

}

  render(){
    return (
      <div className="App">
        <Todos todos = {this.state.todos}/>
      </div>
    );
  }
}

export default App;
