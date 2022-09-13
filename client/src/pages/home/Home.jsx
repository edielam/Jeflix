import Feature from "../../components/feature/Feature";
import MovList from "../../components/movlist/Movlist";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Navbar/>
      <Feature type="movie"/>
      <MovList category={"Trending"}/>
      <MovList category={"Continue to Watch"}/>
      <MovList category={"My List"}/>
    </div>
  );
};

export default Home;
