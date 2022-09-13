import { ArrowBackOutlined } from "@material-ui/icons";
import "./watch.scss";

export default function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <video
        className="video"
        autoPlay
        progress
        controls
        src="https://player.vimeo.com/video/743556886?h=4051a8ce41&title=0&byline=0" 
      />
    </div>
  );
}
