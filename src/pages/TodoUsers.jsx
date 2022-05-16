
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import TodoLoading from '../components/TodoLoading' 
import {apiUrl} from '../api'
import User from '../components/User';
import { TodoSection, TodoTitle, TodoUserGrid, TodoUsersList } from '../styles/TodoStyled';




const TodoUsers = ({users}) => { 
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

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
                        title={user.name} 
                      >
                        <User id={user.id} user={user} />
                      </Link>  
                  )) 
              )} 
          </TodoUserGrid> 
    </>
  )
}

export default TodoUsers