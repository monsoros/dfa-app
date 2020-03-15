import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return(
        <div className="navigationContainer">
            <nav>
                <ul className="navBar">
                    <Link to="/" className="link"><li>Home</li></Link>
                    <Link to="/developers" className="link"><li>Developers</li></Link>
                    <Link to="" className="link"><li>About</li></Link>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;