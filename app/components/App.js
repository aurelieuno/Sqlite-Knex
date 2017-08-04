import React from "react";
import {
  BrowserRouter,
  Route,
  NavLink,
  Switch
} from 'react-router-dom';


import Form from "./Form";
import Results from "./Results";

const App = () => (
  <BrowserRouter>
    <div>
      <ul className = "nav">
        <li><NavLink activeClassName='active' to="/">Form</NavLink></li>
        <li><NavLink activeClassName='active' to="/results">Results</NavLink></li>
      </ul>

      <Switch>
      <Route exact path="/" component={Form}/>
      <Route exact path="/results" component={Results}/>
      <Route render={() => (
        <h3>404-Not Found</h3>)}/>
      </Switch>
    </div>
    </BrowserRouter>
)
module.exports = App;//common JS
//export default App;