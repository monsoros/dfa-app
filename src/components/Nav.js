import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return(
        <div className="navigationContainer">
            <nav>
                <ul className="navBar">
                    <li><Link to="/" className="link">Home</Link></li>
                    <li><Link to="/developers" className="link">Developers</Link></li>
                    <li><Link to="" className="link">About</Link></li>
                </ul>
            </nav>
            <hr></hr>
        </div>
    )
}

export default Nav;