import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';


const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_xluh5rs', 'template_vdu61fb', refForm.current, 'To1j1cAQ6k2Ox77-2')
        .then(
            (result) => {
                alert('Message successfully sent!');
                window.location.reload(false);
            },
            (error) => {
                alert('Failed to send the message. Please try again.');
            }
        );
        
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)

        // Clean up timeout on component unmount
        return () => clearTimeout(timer)
    }, [])

    return (
    <>
    <div className='container contact-page'>
        <div className='text-zone'>
            <h1>
                <AnimatedLetters 
                letterClass={letterClass}
                strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                idx={15}
                />
            </h1>
            <p>
            I’d love to connect for any coffee chats! 
            I’m also open to tutoring opportunities in a range of subjects, 
            from elementary math to college-level math and GRE preparation, 
            as well as coding in Python, frontend development, mobile app development, and C/C++.
            </p>
            <div className='contact-form'>
                <form ref={refForm} onSubmit={sendEmail}>
                    <ul>
                        <li className='half'>
                            <input type='text' name='from_name' placeholder='Name' required/>
                        </li>
                        <li className='half'>
                            <input type='email' name='reply_to' placeholder='Email' required/>
                        </li>
                        <li>
                            <input type='text' name='subject' placeholder='Subject' required/>
                        </li>
                        <li>
                            <textarea placeholder='Message' name='message' required/>
                        </li>
                        <li>
                            <input type='submit' className='flat-button' value="SEND"/>
                        </li>
                    </ul>
                </form>

            </div>
        </div>
        <div className='map-wrap'>
            <MapContainer center={[37.7749, -122.4194]} zoom={13}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                <Marker position={[37.7749, -122.4194]}>
                    <Popup>Come meet me for a coffee! :)</Popup>
                </Marker>
            </MapContainer>
        </div>
    </div>
    <Loader type='ball-spin-fade-loader' />
    </>)
}

export default Contact