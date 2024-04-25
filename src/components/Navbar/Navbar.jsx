import React, {useState} from 'react'
import './Navbar.css'
import { AiFillCalculator } from 'react-icons/ai'
import { Link } from "react-router-dom";
import { VscThreeBars } from 'react-icons/vsc'

const Navbar = () => {

    const [style, setStyle] = useState(false)

    return (
        <div className='nav'>
            <div className='logo'>
                <Link to="/">
                    <AiFillCalculator id='calc' />
                    <span>THALE'S THEOREM</span>
                </Link>
            </div>
            <div className="others">
                <ul>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/theory">THEORY</Link></li>
                    <li><Link to="/sim">SIMULATOR</Link></li>
                    <li><Link to="/test">TEST</Link></li>
                </ul>
            </div>
            {style &&
            <div className="others-display-list">
                <ul>
                    <li><button onClick={() => setStyle(!style)}><Link to="/">HOME</Link></button></li>
                    <li><button onClick={() => setStyle(!style)}><Link to="/theory">THEORY</Link></button></li>
                    <li><button onClick={() => setStyle(!style)}><Link to="/sim">SIMULATOR</Link></button></li>
                    <li><button onClick={() => setStyle(!style)}><Link to="/test">TEST</Link></button></li>
                </ul>
            </div>}
            <button type='button' id='checkbars' className="nav-bars" onClick={() => setStyle(!style)}><VscThreeBars /></button>
        </div>
    )
}

export default Navbar
