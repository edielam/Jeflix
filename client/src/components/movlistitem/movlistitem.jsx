import "./movlistitem.scss";
import { PlayArrow, Add, ThumbUpAltOutlined, ThumbDownOutlined} from "@material-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ListItem({ index, item }) {
  const [isHovered, setIsHovered] = useState(false);
  const [movies, setMovie] = useState({});

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get("/movies/find/" + item, {
          headers: {
            token:
            "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setMovie(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, [item]);
  return (
    <Link to={{ pathname: "/watch", movies: movies }}>
    <div
      className="movlistItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={movies?.imgSm} alt="" />
      {isHovered && (
        <>
          <video src={movies.trailer} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>{movies.duration}</span>
              <span className="limit">+{movies.limit}</span>
              <span>{movies.year}</span>
            </div>
            <div className="desc">{movies.desc}</div>
            <div className="genre">{movies.genre}</div>
          </div>
        </>
      )}
    </div>
  </Link>
  );
}
