import React, { useState } from "react";
import { TodoFormItem, TodoButton, TodoInput } from "../styles/TodoStyled.js";

const TodoForm = ({ onAddItem }) => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    const text = e.target.value;
    setText(text);
  };

  const addText = (e) => {
    e.preventDefault();
    if (!text) {
      alert("Please enter text!");
      return;
    }
    onAddItem(text);
    setText("");
  };

  return (
    <TodoFormItem>
      <TodoInput type="text" onChange={handleChange} value={text} />
      <TodoButton type="submit" onClick={addText}>
        Add
      </TodoButton>
    </TodoFormItem>
  );
};

export default TodoForm;
