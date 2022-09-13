import { ArrowBackOutlined } from "@material-ui/icons";
import "./watch.scss";

export default function Watch() {
  return (
    <div className="watch">
      {/* <div className="back">
        <ArrowBackOutlined />
        Home
      </div> */}
      <iframe className="video" width="966" height="543" src="https://www.youtube.com/embed/x8UAUAuKNcU" 
      title="The Lord of the Rings: The Rings of Power - Official Trailer | Prime Video" frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen></iframe>
    </div>
  );
}
