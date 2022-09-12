import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import './feature.scss';

export default function Feature ({type}) {
    return (
        <div className="feature">
            <img
                src="https://www.hollywoodreporter.com/wp-content/uploads/2022/09/Sophia-Nomvete-Rings-of-Power-Still-Amazon-Publicity-H-2022.jpg?w=1296"
                alt=""
            />
            <div className="fea-info">
                <img
                    src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1"
                    alt=""
                />
                <span className="info-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Facere voluptas fuga, eligendi ab dolorum blanditiis pariatur 
                    molestiae unde molestias cum libero nisi, atque exercitationem 
                    quae commodi, aperiam voluptatem quasi porro.
                </span>
                <div className="buttons">
                    <button className="play-btn">
                        <PlayArrow/>
                        <span>Play</span>
                    </button>
                    <button className="more-btn">
                        <InfoOutlined/>
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}