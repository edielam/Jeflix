import Navbar from "../../components/navbar/Navbar";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Navbar/>
      <img
          src="https://staticc.sportskeeda.com/editor/2022/02/f4b06-16444289757908-1920.jpg"
          alt=""
      />
    </div>
  );
};

export default Home;
