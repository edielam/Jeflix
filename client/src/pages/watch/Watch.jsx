import { ArrowBackOutlined } from "@material-ui/icons";
import { useHistory } from "react-router";
import "./watch.scss";

export default function Watch() {
  const history = useHistory();
  const handleHome = () => {
    history.push("/");
  } 
  return (
    <div className="watch">
      <button className="back" onClick={() => {handleHome()}}>
        <ArrowBackOutlined className="svg_icons" />
        
      </button>
      <iframe className="video" width="966" height="543" src="https://www.youtube.com/embed/x8UAUAuKNcU?autoplay=1" 
      title="The Lord of the Rings: The Rings of Power - Official Trailer | Prime Video" frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowFullScreen></iframe>
    </div>
  );
}
