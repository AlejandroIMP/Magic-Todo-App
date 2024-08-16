import './TodoItem.css'
function TodoItem({text, description, date, completed}){
    return(
      <li className="list--item">
        <span className="item--delete">X</span>
          <h3 className="item--title">{text}</h3>
          <p className="item--description">{description}</p>
          <p className="item--date">{date}</p>
        <span className="item--done">V</span>
      </li>
    );
  }

  export { TodoItem };