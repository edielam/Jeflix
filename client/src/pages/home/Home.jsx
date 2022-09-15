import Feature from "../../components/feature/Feature";
import MovList from "../../components/movlist/Movlist";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";

const Home = ({type}) => {
  return (
    <div className="home">
      <Navbar/>
      <Feature type={type}/>
      <MovList category={"Trending"}/>
      <MovList category={"Continue to Watch"}/>
      <MovList category={"My List"}/>
    </div>
  );
};

export default Home;
