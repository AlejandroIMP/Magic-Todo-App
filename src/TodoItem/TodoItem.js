import './TodoItem.css'
function TodoItem({text, description, date, completed}){
    return(
      <li className="list--item">
        
        <span className="item--completed">V</span>
          <p className="item--text">{text}</p>
          <p className="item--description">{description}</p>
          <p className="item--date">{date}</p>
        <span className="item--delete">X</span>
        
      </li>
    );
  }

  export { TodoItem };