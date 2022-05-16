import styled from "styled-components";

//  TODO USERS COMPONENT 
export const TodoTitle = styled.div`
   text-align: center;
   margin: 2% auto 5%;

   h1 {
     color: #fff;
     text-transform: uppercase;
     font-weight: normal;

     @media (max-width: 720px) {
       font-size: 1.5rem; 
     }
   }

   @media (max-width: 920px){
     margin-top: 10%;
   }
`;

export const TodoUserGrid = styled.div`
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px; 
      margin: 10px 8%;

    @media (max-width: 1290px) { 
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 790px) { 
      grid-template-columns: repeat(1, 1fr);
    }  
    
    > a {
      text-decoration: none;
      color: rgb(0 0 199 / 90%);
    }
`

export const TodoUserGridItem = styled.div`
    background-color: rgb(237 237 237);
    padding: 25px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    transition: all 0.3s ease;
    min-height: 150px;

    &:hover {
      transform: translateY(-4px);
      background-color: rgb(199 239 204);
    }

    > img {
      width: 100px;
      border-radius: 100%;
    }

    > div {
      display: flex;
      flex-direction: column;
      margin-left: 15px;

      h3 {
      margin: 0;
      text-transform: uppercase;
      font-weight: normal;
      color: #2c2c2c;
    }

    span { 
      color: #504f4f;
    }

    small {
      text-transform: lowercase;
      font-size: .75rem; 
    }
  }
`;


//  TODOLIST  COMPONENT
export const Container = styled.section`
  width: calc(100% - 80px);
  margin: auto;
  letter-spacing: 1px;
`;

export const TodoSection = styled.div`  
  background: rgb(0 0 0 / 70%);
  padding: 30px; 
`;


export const TodoGoback = styled.div` 
  > a {
    display: flex;
    align-items: center;
    text-decoration: none;
    text-transform: uppercase;
    color: #FFF;
  } 
`

export const TodoFormItem = styled.form`
  display: flex;
  margin: 20px auto 2%;
  justify-content: center;
`;

export const TodoInput = styled.input`
  width: 100%;
  max-width: 450px;
  padding: 15px 20px;
  background: rgb(0 0 0 / 40%);
  color: #fff;
  border: none;
  font-size: 1rem;
  font-style: italic;
  letter-spacing: 1px; 
  outline: none;

  &:focus {
    border: 2px rgb(0 47 96) solid;
  }
`;

export const TodoButton = styled.button`
  min-width: 80px;
  background: rgb(0 47 96);
  border: none;
  outline: none;
  color: #fff;
  cursor: pointer; 
  text-transform: uppercase;
`;

export const TodoUl = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: column; 
  align-items: center;    
  padding: 4% 0;
`;

export const TodoLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  list-style-type: none;
  padding: 10px 20px;
  margin-top: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 60%;
  min-width: 315px;

  @media (max-width: 500px) {
    font-size: 0.85rem;
    padding: 10px;
  }

  & p { 
    line-height: 0.95;
    margin: 0;
    text-transform: uppercase;
    font-weight: 500;
  }

  &:hover { 
    background-color: rgb(230 233 163);
  }
`;

 

//  TODO LOADING COMPONENT
export const TodoLoadingContainer = styled.div` 
  min-width: 80vw;  
  z-index: 1; 
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
 

 > h2 {
   margin: 0;
   font-weight: 400;
 }
`