import { useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import "./app.scss"
import { AuthContext } from "./authContext/AuthContext";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Registeration from "./pages/registeration/Registration";
import Watch from "./pages/watch/Watch";

const App = () => {
  const {user} = useContext(AuthContext)
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? <Home /> : <Redirect to="/register" />}
        </Route>
        <Route path="/register">
          {!user ? <Registeration /> : <Redirect to="/" />}
        </Route>
        <Route path="/login">{!user ? <Login /> : <Redirect to="/" />}</Route>
        {user && (
          <>
            <Route path="/movies">
              <Home type="movies" />
            </Route>
            <Route path="/series">
              <Home type="series" />
            </Route>
            <Route path="/watch">
              <Watch />
            </Route>
          </>
        )}
      </Switch>
    </Router>
  );
};
export default App;