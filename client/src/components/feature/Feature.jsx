import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import { useEffect, useState } from "react";
import './feature.scss';
import axios from "axios";
import { useHistory } from "react-router";

export default function Feature ({type, setGenre}) {
    const [content, setContent] = useState({});
    const history = useHistory();
    const handlePlay = () => {history.push("/watch")};
    const axiosInstance = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
    }); 
    useEffect(() => {
      const getRandomContent = async () => {
        try {
          const res = await axiosInstance.get(`/movies/random?type=${type}`, {
            headers: {
              token:
                "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
            },
          });
          setContent(res.data[0]);
        } catch (err) {
          console.log(err);
        }
      };
      getRandomContent();
    }, [type]);
    
    console.log(content)
    return (
        <div className="feature">
            {type && (
                <div className="fea-category">
                    <span>{type === "movies" ? "Movies" : "Series"}</span>
                    <select name="genre" id="genre" 
                    onChange={(e) => setGenre(e.target.value)}>
                        <option>Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </div>
            )}
            <img src={content.img} alt="" />
                <div className="fea-info">
                    <img src={content.imgTitle} alt="" />
                    <span className="info-desc">{content.desc}</span>
                    <div className="buttons">
                    <button className="play-btn" onClick={() => {handlePlay()}}>
                        <PlayArrow />
                        <span>Play</span>
                    </button>
                    <button className="more-btn">
                        <InfoOutlined />
                        <span>Info</span>
                    </button>
                 </div>
             </div>
        </div>
  );
}

/* <img
                src="https://www.hollywoodreporter.com/wp-content/uploads/2022/09/Sophia-Nomvete-Rings-of-Power-Still-Amazon-Publicity-H-2022.jpg?w=1296"
                alt=""
            />
            <div className="fea-info">
                <img
                    src="https://m.media-amazon.com/images/G/01/pv_starlight/trop-c9184079-2c78-432f-9f38-49d5ab3c4158/en-US_HRZ_LT_TT-3056de86-c0d6-4bd8-a25e-1bc700b00ed4._FMpng_.png"
                    alt=""
                /> */