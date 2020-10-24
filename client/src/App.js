import React from "react";
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom'
import { Board } from "./features/board/Board";

import { useAuth} from './features/authentication/auth'
import AuthRoute from './features/authentication/AuthRoute'
import "./App.css";
import { selectColumns } from "./features/board/boardSlice";

function Login() {
  const history = useHistory()
  const { login } = useAuth()
  function handle(e) {
    e.preventDefault()
    login('test', 'test').then((resp) => {
      history.push('/board')
    })
  }

  return (
    <div className="container">
   <button className="invalid">Invalid username or password</button>
   <h4>Log in to Jellow</h4>
<form className="form" onSubmit={handle}>
   <input type="text" placeholder="Enter email" value="test" />
   <input type="password" placeholder="Enter password" value="test" />
   <button type="submit">submit</button>
</form>
</div>
  )
}



function Dashboard() {
  return <div>dash</div>
}

function App() {
  return (
    <Router>
    <Switch>
      <Route exact path="/login">
        <Login />
      </Route>
      <AuthRoute path="/board">
        <Board />
      </AuthRoute>
    </Switch>
</Router>
    // <div className="App">
    //   <Board />
    // </div>
  );
}

export default App;
