import React, { useState } from 'react';
import './NavBar.css';

const NavBar = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    }
    return (
        <div className="nav">
            <div className="logo">
                <h1>LOGO</h1>
            </div>

            <ul>
                <li>HOME</li>
                <li>PROJECTS</li>
                <li>ABOUT</li>
                <li>CONTACT</li>
            </ul>

            <div className="login">
                <img src="src/assets/demopic.jpg" alt="" />
            </div>

        </div>
    );
}

export default NavBar;
