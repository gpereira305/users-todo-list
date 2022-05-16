
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import TodoLoading from '../components/TodoLoading' 
import {apiUrl} from '../api'
import TodoUser from '../components/TodoUser';
import { TodoTitle, TodoUserGrid } from '../styles/TodoStyled';




const TodoUsers = () => { 
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);


  // recebe o array de objetos de todos os usuários
  useEffect(() => {
    apiUrl.get("/users").then((response) => {
      setLoading(true);
      setData(response.data);
      setLoading(false);
    });
  }, []);
 

  return (
    <>
       <TodoTitle> 
         <h1>Base de Usuários</h1> 
       </TodoTitle>

          <TodoUserGrid>
              {loading ? (<TodoLoading/>) : (  
                  data.map((user) =>  (  
                    <Link  key={user.id}
                        to={`/user-todo/${user.id}/${user.name}`} 
                        text={user.name} 
                      >
                        <TodoUser id={user.id} user={user} />
                    </Link>  
                  )) 
              )} 
          </TodoUserGrid> 
    </>
  )
}

export default TodoUsers