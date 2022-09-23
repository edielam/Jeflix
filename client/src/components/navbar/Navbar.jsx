import './navbar.scss'
import { Search, Notifications, ArrowDropDown } from '@material-ui/icons'
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../authContext/AuthContext';
import { logout } from '../../authContext/AuthActions';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const { dispatch } = useContext(AuthContext);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
        <div className='nav-container'>
            <div className='nav-left'>
                <img src="https://raw.githubusercontent.com/edielam/ReactNodeJava/main/practice/JEFLIX2-removebg-preview.png" alt=''/>
                <Link to='/' className='link'>
                    <span>Homepage</span>
                </Link>
                <Link to="/series" className='link'>
                    <span>Series</span>
                </Link>
                <Link to="/movies" className='link'>
                    <span>Movies</span>
                </Link>
                <span>New and Popular</span>
                <span>My List</span>
            </div>
            <div className='nav-right'>
                <Search className="nav-icon" />
                <span>KID</span>
                <Notifications className="nav-icon" />
                <img
                    src="https://www.hollywoodreporter.com/wp-content/uploads/2022/09/Sophia-Nomvete-Rings-of-Power-Still-Amazon-Publicity-H-2022.jpg?w=1296"
                    alt=""
                />
                <div className="nav-profile">
                    <ArrowDropDown className="nav-icon" />
                    <div className="nav-options">
                        <span>Settings</span>
                        <span onClick={() => dispatch(logout())}>Logout</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar