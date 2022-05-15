import React, { useState, useEffect } from "react";
import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";
import TodoItem from "../components/TodoItem";
import {
  Container,
  TodoWrapper,
  TodoTitle,
  TodoMessage,
  TodoMessageH2,
} from "../styles/TodoStyled.js";
import { Link } from "react-router-dom";
// import userEvent from "@testing-library/user-event";

//  message component
const AddItem = () => {
    return (
      <TodoMessage>
        <TodoMessageH2>Please add an item...</TodoMessageH2>
      </TodoMessage>
    );
  };


const TodoUserList = ({user, getUser, match}) => {
  const {
    name, 
    id
  } = user; 

    const [items, setItems] = useState([]); 
    const [userId, setUserId] = useState(''); 

    console.log(items,'ITEMS');
    
    useEffect(() => {
      getUser(match.params.id); 
    }, []);


    
     

    // const SAVED_TODOS = "todos"; 

    useEffect(() => {
      const savedTodos = JSON.parse(localStorage.getItem('todos'));   

      if (savedTodos) {
          setItems(savedTodos);  
      }
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(items));   
    }, [items, user]);

  
    
      //  add items in the list when created
      const onAddItem = (text) => {
        const textItem = new TodoItem(text); 
        setItems([textItem, ...items]);
      };
    
    
      // delete an item from the list
      const onItemDeleted = (item) => {
        const filteredItem = items.filter((i) => item.id !== i.id);
        if (window.confirm("Você tem certeza que quer remover esse todo?")) {
          setItems(filteredItem);
        }
      };
    
      // set an to 'done' when clicked on the icon
      const onDone = (item) => {
        const updatedItems = items.map((i) => {
          if (i.id === item.id) {
            i.done = !i.done;
          }
          return i;
        });
        setItems(updatedItems);
      };

  

  return (
    <Container className="fade-in-image">
    <TodoWrapper>
          <div>
            <Link to={'/'}>Voltar</Link>
          </div>  
          <div>
            <TodoTitle>Todos</TodoTitle>
            <h4>{name}</h4>
          </div>

          <TodoForm onAddItem={onAddItem} />

          {items.length === 0 ? (
            <AddItem />
          ) : (
            <TodoList
              onItemDeleted={onItemDeleted}
              items={items} 
              setItems={setItems}
              onDone={onDone}
            />
          )}
    </TodoWrapper>
  </Container>
  )
}

export default TodoUserList