import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { apiUrl } from "../api";
import TodoLista from "../components/TodoLista";
import TodoLoading from "../components/TodoLoading";
import { TodoButton, TodoFormItem, TodoInput, TodoUl, TodoGoback, TodoSection, TodoTitle } from "../styles/TodoStyled";




const Todo = () => {
    const { id, name } = useParams();
    const [listaTodos, setListaTodos] = useState([]);
    const [title, setTitle] = useState("");
    const [loading, setLoading] = useState(false); 


    const handleGetInput = (e) => {  
        setTitle(e.target.value); 
    };


    const handleAddItem = (e) => {
        e.preventDefault();
        if (!title) {
            alert("Por favor, adicione um texto!");
            return;
          }
          setLoading(true);
        const newItem = {
            userId: id,
            id: listaTodos.length + 1,
            title: title,
            completed: false,
        };
        setListaTodos([newItem, ...listaTodos]);
        setLoading(false);
        setTitle(""); 
    };     
    
    useEffect(() => {
        apiUrl.get("/todos").then((response) => {
          const todos = response.data;
          const filtrados = todos.filter((todo) => 
            todo.userId === parseInt(id)
          );
          setListaTodos(filtrados);
        });
      }, [id]); 

      console.log(listaTodos)

  return (
    <TodoSection>
        <TodoGoback>
            <Link to={'/'}>
              <span class="material-icons">
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
                    listaTodos.length > 0 && listaTodos.map(todo => (
                     <TodoLista
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