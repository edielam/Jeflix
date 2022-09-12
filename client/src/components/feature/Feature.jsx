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
                    src="https://assets-prd.ignimgs.com/2022/01/19/ringsofpowerlotr-sq-1642614059904.jpg"
                    alt=""/>
            </div>
        </div>
    )
}