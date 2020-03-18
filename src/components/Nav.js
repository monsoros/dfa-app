import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return(
        <div className="navigationContainer">
            <nav>
                <ul className="navBar">
                    <li><Link to="/" className="link">Home</Link></li>
                    <li><Link to="/docs" className="link">Docs</Link></li>
                    <li><Link to="/developers" className="link">Developers</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;