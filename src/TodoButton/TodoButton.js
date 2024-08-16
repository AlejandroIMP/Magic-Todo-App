import './TodoButton.css'
function TodoButton(){
    return(
        <button className="todo--button">
            <span className="todo--button__text">+</span>
        </button>
    );
}

export { TodoButton };