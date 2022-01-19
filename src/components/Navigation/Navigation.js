import React from 'react';
import { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navigation extends Component {
    render() {
        return (
            <nav className="navigation" >
                <ul>
                    <NavLink to="/">
                        <li>Home</li>
                    </NavLink>
                    <NavLink to="/dames">
                        <li>Dames</li>
                    </NavLink>
                    <NavLink to="/about">
                        <li>About</li>
                    </NavLink>
                </ul>
            </nav>
        );
    };
}
export default Navigation;