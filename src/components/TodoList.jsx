import React, { useState } from 'react'
import { TodoLi } from '../styles/TodoStyled';
import styled from "../styles/todoList.module.css"; 

const TodoList = (props) => {
    const [state, setState] = useState(props.state);

    const toggle = () => {
        setState(!state);
    };

  return (
    <TodoLi className={state ? styled.undone : styled.done}>
      <p className={styled.title}>{props.title}</p>
      <div onClick={toggle}> 
        <span className={`material-icons ${state ? styled.checked : styled.unchecked}`}>
           {state ? "done" : "close"}
        </span>
      </div>
    </TodoLi>
  )
}

export default TodoList