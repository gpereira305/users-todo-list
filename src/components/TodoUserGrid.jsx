import React from 'react'
import { TodoUserContainer } from '../styles/TodoStyled' 

const TodoUser = ({users}) => {
  return (
    <TodoUserContainer>
        {users.map((user) => ( 
          // <TodoUserItem name={user.name} id={user.id} key={user.id}/> 
          <div>item</div>
        ))}
    </TodoUserContainer>
  )
}

export default TodoUser