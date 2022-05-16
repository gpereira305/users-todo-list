import React from "react";  
import userImg from "../assets/images/user-lead.png" 
import { TodoUserGridItem, TodoUserItem } from "../styles/TodoStyled";

const User = ({user}) => {

  console.log(user)

  const {
    name,
    username,
    email
  } = user 

  return (
      <TodoUserGridItem>
          <img src={userImg} alt="usuário"/>
          <div>
            <h3>{name}</h3> 
            <span>"{username}"</span>
            <small>{email}</small>
          </div>
      </TodoUserGridItem>
  );
};

export default User;