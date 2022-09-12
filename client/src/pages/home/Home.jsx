import Feature from "../../components/feature/Feature";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Navbar/>
      <Feature type="movie"/>
    </div>
  );
};

export default Home;
