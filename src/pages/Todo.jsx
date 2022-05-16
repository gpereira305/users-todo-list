import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { apiUrl } from "../api";
import TodoList  from "../components/TodoList"
import TodoLoading from "../components/TodoLoading";
import { 
   TodoButton, 
   TodoFormItem, 
   TodoInput, 
   TodoUl, 
   TodoGoback, 
   TodoSection, 
   TodoTitle 
} from "../styles/TodoStyled";




const Todo = () => {
    const { id, name } = useParams();
    const [allTodos, setAllTodos] = useState([]);
    const [title, setTitle] = useState("");
    const [loading, setLoading] = useState(false); 


    const handleGetInput = (e) => {  
        setTitle(e.target.value); 
    };
 
    // adiciona o todo digitado à lista de todos
    const handleAddItem = (e) => {
        e.preventDefault();
        if (!title) {
            alert("Por favor, adicione um texto!");
            return;
          }
          setLoading(true);
          const newItem = {
              userId: id,
              id: allTodos.length + 1,
              title: title,
              completed: false,
          };
          setAllTodos([newItem, ...allTodos]);
          setLoading(false);
          setTitle("");    
    };  
    
    // recebe o array de objetos de todos para o usuário
    useEffect(() => {
        apiUrl.get("/todos").then((response) => {
          const todos = response.data;
          const filtered = todos.filter((todo) => 
            todo.userId === parseInt(id)
          );
          setAllTodos(filtered);
        });
      }, [id]);  
 
  return (
    <TodoSection>
        <TodoGoback>
            <Link to={'/'}>
              <span className="material-icons">
                  arrow_back
                </span>
                <span>Voltar</span>
            </Link> 
        </TodoGoback>

        <TodoTitle>
            <h1>{name}</h1>  
        </TodoTitle>
        <TodoFormItem>
            <TodoInput
                type="text"
                placeholder="Inserir novo item"
                onChange={handleGetInput}
                value={title}
            /> 
            <TodoButton type="submit" onClick={handleAddItem}>
                Add
            </TodoButton>
        </TodoFormItem>
        <div>
            <TodoUl>
                  {loading ? (<TodoLoading/>) : (
                      allTodos.length > 0 && allTodos.map(todo => (
                      <TodoList
                          key={todo.id}
                          title={todo.title}
                          state={todo.completed}
                      />
                      ))
                  )}
              </TodoUl>
        </div>
        
    </TodoSection>
  )
}

export default Todo