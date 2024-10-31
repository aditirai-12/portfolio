import './index.scss';
import { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const ProjectCard = ({ title, description, imageUrl, techStack, fullDescription, challenges, role, liveLink, codeLink, openModal, closeModal }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [closing, setClosing] = useState(false);

    const handleOpenModal = () => {
        setModalIsOpen(true);
        setClosing(false); // Reset closing state when reopening modal
        openModal(); // Call parent function to dim background if needed
    };

    const handleCloseModal = () => {
        setClosing(true); // Start fade-out animation
        closeModal(); // Call parent function to undim background if needed

        // Wait for the animation to finish before actually closing the modal
        setTimeout(() => {
            setModalIsOpen(false);
            setClosing(false); // Reset closing state for future opens
        }, 500); // Match the duration of the fadeOut animation in milliseconds
    };

    return (
        <div className="project-card">
            <h3>{title}</h3>
            <p>{description}</p>
            <button onClick={handleOpenModal} className="learn-more-button">Learn More</button>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={handleCloseModal}
                contentLabel={`${title} Project Details`}
                className={`project-modal ${closing ? 'closing' : ''}`} // Apply `closing` class conditionally
                overlayClassName="project-modal-overlay"
            >
                <h2>{title}</h2>
                <p><strong>Description: </strong> {fullDescription}</p>
                <p><strong>Challenges: </strong> {challenges}</p>
                <p><strong>Role: </strong> {role}</p>
                <div className="tech-stack">
                    <strong>Tech Stack: </strong>
                    {techStack.map((tech, index) => (
                        <span key={index} className="tech">{tech}</span>
                    ))}
                </div>
                <div className="project-links">
                    {liveLink && <a href={liveLink} target="_blank" rel="noopener noreferrer">Live Demo</a>}
                    {codeLink && <a href={codeLink} target="_blank" rel="noopener noreferrer">GitHub</a>}
                </div>
                <button onClick={handleCloseModal} className="close-modal-button">Close</button>
            </Modal>
        </div>
    );
};

export default ProjectCard;
