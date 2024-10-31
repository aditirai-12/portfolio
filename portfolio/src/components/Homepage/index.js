import { Link } from "react-router-dom";
import './index.scss';
import pic from './assets/images/profile.JPG';
import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import Loader from "react-loaders";

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray= ['A', 'd', 'i', 't', 'i']
    const roleArray = ['s', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'e', 'n', 'g', 'i', 'n', 'e', 'e', 'r']

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)

        // Clean up timeout on component unmount
        return () => clearTimeout(timer)
    }, [])

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, I'm <br /> 
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15}/> !
                <br />
                <h2>~ <AnimatedLetters letterClass={letterClass}
                strArray={roleArray}
                idx={19}/> ~</h2>
                </h1>
                <Link to="contact" className='flat-button'>contact me.</Link>
            </div>
            <img src={pic} alt="Profile" className="animated-image" />
        </div>
        <Loader type="ball-spin-fade-loader"/>
        </>
    );
}

export default Home