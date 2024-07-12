import './TodoCount.css';


function TodoCount({total, completed}){
    
    return (
      <h1 className='todo--counter'>
        Se han completado {completed} de {total} To-Do 
      </h1>
    );
  }

export {TodoCount}; 