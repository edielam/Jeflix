import { Switch } from "@material-ui/core";
import { Route, BrowserRouter as Router, } from "react-router-dom";
import "./app.scss"
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Registeration from "./pages/registeration/Registration";
import Watch from "./pages/watch/Watch";

const App = () => {
  return <Router>
    <Switch>
      <Route exact path ="/"></Route>
      <Route path=""></Route>
      <Route></Route>
      <Route></Route>
      <Route></Route>
    </Switch>
  </Router>
}
export default App;