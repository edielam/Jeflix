import { useEffect } from "react";
import { useState } from "react";
import Feature from "../../components/feature/Feature";
import Movlist from "../../components/movlist/Movlist";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import axios from 'axios';

const Home = ({type}) => {
  const [movlists, setMovLists] = useState([]);
  const [genre, setGenre] = useState(null);
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axiosInstance.get(
          `lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
              "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
            },
          }
        );
        setMovLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);
  return (
    <div className="home">
      <Navbar/>
      <Feature type={type} setGenre={setGenre}/>
      {movlists.map((mlist) => (
        <Movlist category={mlist}/>
      ))}
    </div>
  );
};

export default Home;
