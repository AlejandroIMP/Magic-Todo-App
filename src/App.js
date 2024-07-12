import { TodoCount } from './TodoCount/TodoCount';
import { TodoInputSearch } from './TodoInputSearch/TodoInputSearch';
import { TodoList } from './TodoList/TodoList';
import { TodoItem } from './TodoItem/TodoItem';
import { TodoButton } from './TodoButton/TodoButton';
import { TodoTitle } from './TodoTitle/TodoTitle';
import './styles.css';
import React from 'react';

const defaultTodos = [
  {text: 'Take a Shower', description: "Take a laarge shower at 9 o'clock", date: '01/01/24', completed: true}, 
  {text: 'Terminar el curso de React', description: "Finish all videos of the course ", date: '01/01/24', completed: false},
  {text: 'Llorar con la llorona', description: "All day, everyday", date: '01/01/24', completed: true},
  {text: 'Ola', description: "Ola", date: '01/01/24', completed: true}
];

function App() {
  return (
    <div className='todo--container'>

      <TodoTitle/>
      <TodoInputSearch/>

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem 
          key={todo.text} 
          text={todo.text}
          description={todo.description}
          date={todo.date}
          completed ={todo.completed}
          />
        ))}
        
      </TodoList>
      <TodoCount  completed={16} total={40}/>
      <TodoButton/>

    </div>
  );
}

export default App;
