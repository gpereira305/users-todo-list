import React from 'react' 
import TodoUsers from "./pages/TodoUsers"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; 
import Todo from './pages/Todo';
 

const App = () => {  

  return (
    <>
    <Router>
     <Switch> 
       <Route exact path={'/'} render={() => <TodoUsers/>}/>
       <Route exact path={'/user-todo/:id/:name'} render={() => <Todo />}/>
     </Switch> 
    </Router>
    </>
  );
};

export default App;
