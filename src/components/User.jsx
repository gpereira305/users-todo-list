import React from "react"; 

const User = ({name}) => {
  return (
    <div>
      <img src="/assets/img/user.svg" alt="" />
      <div>
        <p>{name}</p> 
      </div>
    </div>
  );
};

export default User;