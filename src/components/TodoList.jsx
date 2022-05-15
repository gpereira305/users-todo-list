import React from "react";
import { TodoUl, TodoLi, TodoIcons } from "../styles/TodoStyled.js";

const TodoList = ({ items,   onItemDeleted, onDone }) => {
  const DoneItem = ({ done }) => {
    if (done) {
      return (
        <span
          className="material-icons"
          style={{ color: "#008cff" }}
          title="Item completo"
        >
          check_circle
        </span>
      );
    } else {
      return (
        <span
          className="material-icons"
          style={{ color: "#505050" }}
          title="Item incompleto"
        >
          check_circle
        </span>
      );
    }
  };
 
 

  return (
    <TodoUl>
       {items.map((item) => (
          <TodoLi key={item.id}>
            <span className={item.done ? "done " : ""}>{item.text}</span>
            {console.log()}
            <span>{item.name}</span>
            <TodoIcons>
              <div
                onClick={() => {
                  onDone(item);
                }}
              >
                <DoneItem done={item.done} />
              </div>
              <span
                onClick={() => onItemDeleted(item)}
                className="material-icons"
                title="Deletar item"
                style={{ color: "red" }}
              >
                delete
              </span>
            </TodoIcons>
          </TodoLi>
        ))}
    </TodoUl>
  );
};

export default TodoList;
