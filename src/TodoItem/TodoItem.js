import './TodoItem.css'
function TodoItem({text, description, date, completed}){
    return(
      <li className="list--item">
        <button className='button--delete'><span className="item--delete"></span></button>
          <h3 className="item--title">{text}</h3>
          <p className="item--description">{description}</p>
          <p className="item--date">{date}</p>
        <button className='button--checked'><span className="item--done"></span></button>
      </li>
    );
  }

  export { TodoItem };