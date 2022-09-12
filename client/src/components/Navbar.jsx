import './navbar.scss'
import { Search, Notifications, ArrowDropDown } from '@material-ui/icons'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='nav-container'>
            <div className='nav-left'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt=''/>
                <span>Homepage</span>
                <span>Series</span>
                <span>Movies</span>
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
                        <span>Logout</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar