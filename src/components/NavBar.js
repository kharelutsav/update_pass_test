import { Link } from 'react-router-dom'
import '../css/navbar.css'
import { useState } from 'react'
import '../css/account.css'
import * as cg from "react-icons/cg";
import * as fc from "react-icons/fc";
import * as bs from "react-icons/bs";

function NavBar() {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)
    return (
        <div>
            <nav>
                <Link to={'/', '/dashboard'}>Dashboard</Link>
                <Link to={'/library'}>Library</Link>
                <Link to={'/notices'}>Notices</Link>
                <Link to={'/routine'}>Routine</Link>
                <Link to={'/account'} onClick={showSidebar}>Account</Link>
            </nav>
            <div className={sidebar ? 'show_nav' : 'hide_nav'} onBlur={showSidebar}>
                <Link to={'/account/profile'}>
                    <cg.CgProfile/>
                    <span>Profile</span>
                    </Link>
                <Link to={'/account/results'}>
                    <bs.BsFillBookFill/>
                    <span>Result</span>
                    </Link>
                <Link to={'/account/Settings'}>
                    <fc.FcSettings/>
                    <span>Settings</span>
                    </Link>
                <Link to={'/account/signout'}>
                    <cg.CgLogOut/>
                    <span>Signout</span>
                    </Link>
            </div>
        </div>
    )
}

export default NavBar
