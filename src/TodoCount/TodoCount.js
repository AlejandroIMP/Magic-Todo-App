import './TodoCount.css';


function TodoCount({total, completed}){
    
    return (
      <h2 className='todo--counter'>
        Se han completado {completed} de {total} To-Do 
      </h2>
    );
  }

export {TodoCount}; 