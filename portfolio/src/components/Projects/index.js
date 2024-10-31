import Masonry from 'react-masonry-css';
import ProjectCard from '../ProjectCard';
import './index.scss';
import Loader from 'react-loaders';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';

const Projects = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [isDimmed, setIsDimmed] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const projects = [
        {
            title: 'Clean my Pantry',
            description: 'UNDER CONSTRUCTION',
            techStack: ['React Native', 'Node.js', 'Express', 'CSS', 'MongoDB'],
            liveLink: 'https://example.com',
            codeLink: 'https://github.com/example'
        },
        {
            title: 'Steve',
            description: 'Conversational AI chatbot directowards towards senior citizens for tech support.',
            techStack: ['JavaScript', 'Node.js', 'HTML/CSS', 'Electron', 'Agile Framework', 'Github'],
            liveLink: 'https://example.com',
            codeLink: 'https://github.com/example'
        },
        {
            title: 'AI Generated Scientific Paper Detection',
            description: 'Detect AI-generated scientific publications.',
            techStack: ['Python', 'TensorFlow', 'Pandas', 'NumPy', 'Scikit-learn'],
            liveLink: '',
            codeLink: 'https://github.com/example'
        },
        {
            title: 'Abortion Debate Analysis',
            description: '•	Crawled and analyzed Mastodon social media data to visualize user relationships and viewpoints.',
            techStack: ['Python', 'Llama2-7B', 'Networkx', 'JSON'],
            liveLink: '',
            codeLink: 'https://github.com/example'
        },
        {
            title: 'BetterBudget',
            description: 'Aapplication directed towards low-income families to aid with emergency fund establishment, renting and buying homes, and other general budgeting directives.',
            techStack: ['Java', 'JavaScript', 'HTML/CSS'],
            liveLink: '',
            codeLink: 'https://github.com/example'
        },
        {
            title: 'Census Data Analyzer',
            description: 'Aanalyze U.S Census data on occupations and earnings, using advanced data structures based on user queries.',
            techStack: ['C++'],
            liveLink: '',
            codeLink: 'https://github.com/example'
        },
    ];

    const breakpointColumnsObj = {
        default: 3,
        1100: 2,
        700: 1,
    };

    const openModal = () => {
        setIsDimmed(true);
        document.body.classList.add('blurred');
    };

    const closeModal = () => {
        setIsDimmed(false);
        document.body.classList.remove('blurred');
    };

    return (
        <>
        <div className={`projects-container ${isDimmed ? 'dimmed' : ''}`}> {/* Add dimmed class when modal is open */}
           <div className='text-zone'>
            <h1 className='project-title'>
                <AnimatedLetters 
                letterClass={letterClass}
                strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
                idx={15}
                />
            </h1>
            </div>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="masonry-grid"
                columnClassName="masonry-grid_column"
            >
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        {...project}
                        openModal={openModal}
                        closeModal={closeModal}
                    />
                ))}
            </Masonry>
        </div>
        <Loader type="ball-spin-fade-loader" /> 
        </>
    )
}

export default Projects;
