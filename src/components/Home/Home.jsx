import React from 'react'
import './Home.css'
import { Typewriter } from 'react-simple-typewriter'
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className='homepage'>
            <div className="home-container">
                <div className="home-typewriter-text">
                    Excited to learn about
                    <span>
                        <Typewriter
                            words={['The Basic Proportionality Theorem!', 'The Thale\'s Theorem!',]}
                            loop={false}
                            cursor
                            cursorStyle='|'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span>
                </div>
            </div>
            <div className="home-btn">
                <Link to='/theory'><button>GET STARTED</button></Link>
            </div>
        </div>
    )
}

export default Home
