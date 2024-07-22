import React, { useContext, useRef, useState } from 'react';
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/TokenHiveLogo.png";
import arrow from "../../assets/arrow_icon.png";
import { CoinContext } from '../../context/CoinContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navRef = useRef();
    const [isNavOpen, setIsNavOpen] = useState(false);
    const { setCurrency } = useContext(CoinContext);

    const showNavbar = () => {
        setIsNavOpen(!isNavOpen);
    };

    const closeNavbar = () => {
        setIsNavOpen(false);
    };

    const currencyHandler = (e) => {
        switch (e.target.value) {
            case "usd":
                setCurrency({ name: "usd", symbol: "$" });
                break;
            case "eur":
                setCurrency({ name: "eur", symbol: "€" });
                break;
            case "huf":
                setCurrency({ name: "huf", symbol: "Ft" });
                break;
            default:
                setCurrency({ name: "usd", symbol: "$" });
                break;
        }
    };

    return (
        <div className='navbar'>
            <Link to={"/"}>
                <h1>#CryptoTracker</h1>
                {/* <img src={logo} alt="" className='logo' /> */}
            </Link>
            {!isNavOpen && <FaBars className="menu-btn" onClick={showNavbar} />}
            {isNavOpen && <FaTimes className="menu-btn" onClick={showNavbar} />}
                <ul className={isNavOpen ? 'show' : ''} ref={navRef}>
                    <Link to={"/"} onClick={closeNavbar}><li>Home</li></Link>
                    <Link to={"/MostPopular"} onClick={closeNavbar}><li>Trending</li></Link>
                    <Link to={"/AllCoins/"} onClick={closeNavbar}><li>Explore</li></Link>
                    <Link to={"/News/"} onClick={closeNavbar}><li>News</li></Link>
                    <div className="under768px">
                    <Link to={"/News/"} onClick={closeNavbar}><p>Learn more <img src={arrow} alt="" /></p></Link>
                    <select onChange={currencyHandler}>
                        <option value="usd">usd</option>
                        <option value="eur">eur</option>
                        <option value="huf">huf</option>
                    </select>
                </div>
                </ul>
                <div className="nav-right over768px">
                    <select onChange={currencyHandler}>
                        <option value="usd">usd</option>
                        <option value="eur">eur</option>
                        <option value="huf">huf</option>
                    </select>
                    <Link to={"/News/"}><p>Learn{String.fromCharCode(160)}more <img src={arrow} alt="" /></p></Link>
                </div>
                
        </div>
    );
};

export default Navbar;
