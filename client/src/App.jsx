import { Route, BrowserRouter as Router, Routes, Re, Navigate} from "react-router-dom";
import "./app.scss"
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Registeration from "./pages/registeration/Registration";
import Watch from "./pages/watch/Watch";

const App = () => {
  const user = false;
  return <Router>
    <Routes>
      <Route path="/" element={user ? <Home /> : <Navigate replace to="/register" />}/>
      <Route path="/movies" element={<Home type="movies"/>}/>
      <Route path="/series" element={<Home type="series"/>}/>
      <Route path="/register" element={<Registeration/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/watch" element={<Watch/>}/>
      </Routes>
  </Router>
}
export default App;