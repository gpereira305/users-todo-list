
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import TodoLoading from '../components/TodoLoading' 
import {apiUrl} from '../api'
import User from '../components/User';




const TodoUsers = ({users}) => { 
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    apiUrl.get("/users").then((response) => {
      setLoad(true);
      setData(response.data);
      setLoad(false);
    });
  }, []);

  return (
    <div>
       <h1>Todo list</h1>

       <section>
         <h2>Usuários</h2>
         <div>
           {load ? (<TodoLoading/>) : (
              data.map((user) => {
              return (
                <Link
                  key={user.id}
                  to={`/todo/${user.id}/${user.name}`} 
                >
                  <User id={user.id} name={user.name} />
                </Link>
              );
            })
           )}
         </div>
       </section>
    </div>
  )
}

export default TodoUsers