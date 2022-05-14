import styled from "styled-components";

//  TODO APP COMPONENT
export const Container = styled.section`
  width: calc(100% - 80px);
  margin: auto;
  letter-spacing: 1px;
`;

export const TodoWrapper = styled.div`
  max-width: 750px;
  margin: 5% auto;
  min-height: 70vh;
  background: rgb(0 0 0 / 40%);
  padding: 30px;
`;

export const TodoTitle = styled.h2`
  margin: 0;
  padding-top: 2%;
  width: 100%;
  text-align: center;
  text-transform: uppercase;
  color: #fff;
`;

export const TodoFormItem = styled.form`
  display: flex;
  margin: 3% auto;
  justify-content: center;
`;

export const TodoInput = styled.input`
  width: 100%;
  max-width: 450px;
  padding: 5px 20px;
  background: rgb(0 0 0 / 40%);
  color: #fff;
  border: 1.5px #ccc solid;
  font-size: 1rem;
  font-style: italic;
  letter-spacing: 1px;
  outline: none;
  &:focus {
    border: 1.5px #008cff solid;
  }
`;

export const TodoButton = styled.button`
  min-width: 60px;
  background: #008cff;
  border: none;
  outline: none;
  color: #fff;
  cursor: pointer;
`;

export const TodoUl = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: column;
`;

export const TodoLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #e7e7e7;
  list-style-type: none;
  padding: 10px 20px;
  margin-top: 10px;
  cursor: pointer;
  transition: all 0.3s ease;

  @media (max-width: 500px) {
    font-size: 0.85rem;
    padding: 10px;
  }

  & span {
    line-break: anywhere;
    line-height: 0.95;
  }

  &:hover {
    transform: translateY(-5px);
    background-color: rgb(183 221 245);
  }
`;

export const TodoIcons = styled.div`
  display: flex;
  min-width: 65px;
  justify-content: space-between;

  @media (max-width: 500px) {
    min-width: 40px;
  }

  & span {
    @media (max-width: 500px) {
      font-size: 1.1rem;
    }
  }
`;

export const TodoMessage = styled.div`
  display: flex;
  min-height: 200px;
  align-items: end;
  justify-content: center;
  width: 100%;
  text-align: center;
`;

export const TodoMessageH2 = styled.h2`
  color: #bbb;
  font-weight: 500;

  @media (max-width: 500px) {
    font-size: 1.1rem;
  }
`;
