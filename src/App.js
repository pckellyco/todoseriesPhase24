import { Component } from 'react';
import './App.css';
import TodoContainer from './components/TodoContainer'

class App extends Component {

  state = {
    todos: [
      {title: "First Todo", content: "This is my First Todo"},
      {title: "Second Todo", content: "This is my Second Todo"},
      {title: "Third Todo", content: "This is my Third Todo"},
    ]
  }

  render(){
    return (
      <div className="App">
        <TodoContainer todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
