import React, { useState } from 'react';
import "./Navbar.css"

import { NavLink } from 'react-router-dom';
import { FiAlignRight, FiXCircle } from "react-icons/fi";
import logo from '../../assets/logo.png';


const Navbar = () => {

    const [isMenu, setisMenu] = useState(false);
    const [isResponsiveclose, setResponsiveclose] = useState(false);
    const toggleClass = () => {
        setisMenu(isMenu === false ? true : false);
        setResponsiveclose(isResponsiveclose === false ? true : false);
    };

    let boxClass = ["main-menu menu-right menuq1"];
    if (isMenu) {
        boxClass.push('menuq2');
    } else {
        boxClass.push('');
    }

    const [isMenuSubMenu, setMenuSubMenu] = useState(false);

    const toggleSubmenu = () => {
        setMenuSubMenu(isMenuSubMenu === false ? true : false);
    };

    let boxClassSubMenu = ["sub__menus"];
    if (isMenuSubMenu) {
        boxClassSubMenu.push('sub__menus__Active');
    } else {
        boxClassSubMenu.push('');
    }



    return (
        <header className="header__middle">
            <div className="container">
                <div className="row">

                    {/* Add Logo  */}
                    <div className="header__middle__logo">
                        <NavLink exact activeClassName='is-active' to="/">
                            <img src={logo} alt="logo" />
                        </NavLink>
                    </div>

                    <div className="header__middle__menus">
                        <nav className="main-nav " >
                            {/* Responsive Menu Button */}
                            {isResponsiveclose === true ? <>
                                <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiXCircle />   </span>
                            </> : <>
                                <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiAlignRight />   </span>
                            </>}
                            <ul className={boxClass.join(' ')}>
                                <li className="menu-item" >
                                    <NavLink exact activeClassName='is-active' onClick={toggleClass} to={`/`}> Home </NavLink>
                                </li>
                                <li className="menu-item " >
                                    <NavLink onClick={toggleClass} activeClassName='is-active' to={`/about-us`}> About us </NavLink>
                                </li>
                                <li className="menu-item " >
                                    <NavLink onClick={toggleClass} activeClassName='is-active' to={`/services`}> Services </NavLink>
                                </li>
                                <li className="menu-item " >
                                    <NavLink onClick={toggleClass} activeClassName='is-active' to={`/pricing-list`}> Pricing List </NavLink>
                                </li>
                                <li className="menu-item " >
                                    <NavLink onClick={toggleClass} activeClassName='is-active' to={`/login-signup`} className="login-btn-home"> Login/SignUp </NavLink>
                                </li>

                                <li className="menu-item " >
                                    <NavLink onClick={toggleClass} activeClassName='is-active' to={`/franchise`} className="franchise-btn">Franchise</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar










// {/* <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="#"> Shop <FiChevronDown /> </Link>
//                                 <ul className={boxClassSubMenu.join(' ')} >
//                                     <li> <NavLink onClick={toggleClass} activeClassName='is-active' to={`/Online`}> Online Shop </NavLink> </li>
//                                     <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Offline`}> Offline Shop </NavLink> </li>
//                                 </ul>
//                             </li> */}