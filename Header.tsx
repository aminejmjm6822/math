import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
    return (
        <header className="header">
            <h1 className="logo">Math Learning Platform</h1>
            <nav>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/lessons">Lessons</Link></li>
                    <li><Link to="/quiz">Quiz</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;