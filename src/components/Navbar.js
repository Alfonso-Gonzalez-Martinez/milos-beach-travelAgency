import React, {useState, useEffect} from 'react';
import Logo from '../assets/milos-icon.png';
import {Link} from 'react-router-dom'; // It works as the <a> but it is specifically designed for react-router-dom
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css'


function Navbar(){

    const [openLinks, setOpenLinks] = useState(false);

    const toggleNavbar = () => {
        setOpenLinks(!openLinks)
    }

    useEffect(() => {
        window.addEventListener("resize", handleWidth);
        return() => {
            window.removeEventListener("resize", handleWidth);
        }
    }, []);

    const handleWidth = () => {
        if(window.innerWidth >= 600)
            {setOpenLinks(false)}
    }

    return(

        <div className="navbar">
            <div className="leftSide" id={openLinks ? "open" : "close"}>
            <Link id="logo-link" to="/"><img src={Logo} alt='Greek Flag'/></Link>
                <div className="hiddenLinks">
                    <Link to="/">Home</Link>
                    <Link to="/destinations">Menu</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
            <div className="rightSide">
                <Link to="/">Home</Link>
                <Link to="/destinations">Menu</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <button onClick={toggleNavbar}>
                    <ReorderIcon />
                </button>
            </div>
        </div>
    )
}

export default Navbar;