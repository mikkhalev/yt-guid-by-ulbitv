import React from 'react';
import '../css/header.css';
import {Link} from "react-router-dom";

function Header() {
  return (
    <header className="Header">
        <div className="nav-wrapper">
            <Link className="nav-item" to='/news'>
                Новости
            </Link>
            <Link className="nav-item" to='/about'>
                О проекте
            </Link>
        </div>
    </header>
  );
}

export default Header;
