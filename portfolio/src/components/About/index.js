import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useState, useEffect } from 'react'
import { faAws, faBootstrap, faCss3, faGitAlt, faHtml5, faJava, faJs, faNodeJs, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)

        // Clean up timeout on component unmount
        return () => clearTimeout(timer)
    }, [])


    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                    idx={15}
                    />
                </h1>
                <p>
                My journey began with an interest in computer science and evolved through various 
                projects that span artificial intelligence, machine learning, and web development. 
                I've had the opportunity to work with inspiring teams and organizations like The Luminosity Lab and Dugree, 
                where I’ve developed my skills in problem-solving and innovative thinking.
                </p>
                <p>
                With a foundation in engineering and a drive to continuously learn, I’m dedicated to building tools 
                and applications that enhance user experiences and drive efficiency. 
                Beyond coding, I’m an advocate for making technology accessible and meaningful 
                in industries like healthcare, where I believe tech can make a real difference.
                </p>
                <p>
                Beyond software, I enjoy tutoring and sharing my love for problem-solving with others. 
                You might also find me at the gym, where I channel my energy into fitness and personal growth. 
                </p>
            </div>
            <div className='stage-cube-cont'>
                <div className='cubeSpinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faReact} color="#b8dbd9"/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faJava} color="#b8dbd9"/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faJs} color="#b8dbd9"/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faAws} color="#b8dbd9"/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faPython} color="#b8dbd9"/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faNodeJs} color="#b8dbd9"/>
                    </div>

                </div>

            </div>
        </div>
        <Loader type="ball-spin-fade-loader"/>
        </>
    )
}
export default About