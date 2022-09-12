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
                    src="https://m.media-amazon.com/images/G/01/pv_starlight/trop-c9184079-2c78-432f-9f38-49d5ab3c4158/en-US_HRZ_LT_TT-3056de86-c0d6-4bd8-a25e-1bc700b00ed4._FMpng_.png"
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