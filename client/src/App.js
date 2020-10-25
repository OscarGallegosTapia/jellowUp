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

    <div >
            <h1 className='loginPageHeader'>Jellow</h1>

  <div className="container">
   <h4>Log in to Jellow</h4>
<form className="form" onSubmit={handle}>
   <input className='email' type="text" placeholder="Enter email" value="test" /><br></br>
   <input className='password' type="password" placeholder="Enter password" value="test" /><br></br>
   <button className='submit' type="submit">Log In</button>
</form>
</div>

<div className='imagesOnLogin'>
 <img className='picOnLogin' src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/4752/direct/1579793583114-Trello%20Alternatives.jpg"></img> 
 <img className='picOnLogin' src="https://www.pmtoday.co.uk/wp-content/uploads/2020/06/PMO.gif"></img>
</div>
</div>
  )
}

function Logout() {
  const history = useHistory()
  const { login } = useAuth()
  function handle(e) {
    e.preventDefault()
    login('test', 'test').then((resp) => {
      history.push('/board')
    })
  }

  return (
    <div>

    <div >
            <h1 className='loginPageHeader'>Thanks for using Jellow</h1>

  <div className="container">
<form className="form" onSubmit={handle}>
   <input className='email' type="text" placeholder="Enter email" value="test" /><br></br>
   <input className='password' type="password" placeholder="Enter password" value="test" /><br></br>
   <button className='submit' type="submit">Log In</button>
</form>
</div>

<div className='imagesOnLogin'>
 <img className='picOnLogin' src="https://www.pmtoday.co.uk/wp-content/uploads/2020/06/PMO.gif"></img>
</div>


</div>
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
      <Route exact path="/logout">
        <Logout />
      </Route>
    </Switch>
</Router>
    // <div className="App">
    //   <Board />
    // </div>
  );
}

export default App;
