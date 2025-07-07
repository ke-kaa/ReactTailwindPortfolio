import React, {useState, useEffect} from 'react';
import { FaArrowDown } from 'react-icons/fa';
import profileImage from '../../assets/profile/profile.jpg'
import './homepage.css'

const TITLES = [
  "SOFTWARE ENGINEER",
  "FRONTEND DEVELOPER",
  "BACKEND DEVELOPER",
  "FULL STACK DEVELOPER"
];

export default function () {
  const [currentTitle, setCurrentTitle] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let typingSpeed = 100;
    let timeout;

    const fullText = TITLES[currentTitle];

    if (isDeleting) {
      typingSpeed = 50;
      timeout = setTimeout(() => {
        setDisplayedText(fullText.substring(0, displayedText.length - 1));
        if (displayedText.length - 1 === 0) {
          setIsDeleting(false);
          setCurrentTitle((prev) => (prev + 1) % TITLES.length);
        }
      }, typingSpeed);
    } else {
      timeout = setTimeout(() => {
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
        if (displayedText.length + 1 === fullText.length) {
          setTimeout(() => setIsDeleting(true), 1500); // Pause before deleting
        }
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentTitle]);

  useEffect(() => {
    setDisplayedText('');
  }, [currentTitle]);

  return (
    <div data-aos="fade-up"className='homePage py-20 min-h-screen flex items-center justify-center bg-[#d2d2d2] dark:bg-dark-void dark:text-marigold'>
      <div className='w-full max-w-6xl flex flex-col lg:flex-row-reverse items-center justify-center lg:gap-10'>
        <div data-aos="fade-up">
          <div id="profile-img"  className='rounded-full w-80 h-80 rounded overflow-hidden justify-self-center mb-20'>
            <img src={profileImage}/>
          </div>
        </div>
        <div data-aos="fade-up" id="intro" className='text-center'>
          <h1 className='text-2xl p-3 dark:text-marigold'>
            HI, I'M <br/>
          </h1>
          <div className="my-name text-5xl font-bold my-5">
            KAKU AMSALU
          </div>
          <span className='animated-title block text-2xl mb-3'>{displayedText}&nbsp;</span>
          <p className='px-3'>Aspiring Full-Stack Developer | Passionate About Web Development & AI</p>
          <div id="work-contact" className='my-10 md:flex md:flex-row md:gap-2 md:justify-self-center md:gap-10'>
            <a href='#portfolio' id="view-my-work" className='portfolio-link block justify-self-center bg-black text-white p-3 transition-transform duration-300 hover:scale-110 focus:scale-105 dark:text-marigold dark:bg-dusty-grey rounded'>View My Works</a>
            <a href='#contact' id="contact-me" className="contact-me underline flex items-center justify-self-center h-full justify-center my-auto transition-transform duration-300 hover:scale-110 focus:scale-105 focus:outline-none dark:text-marigold dark:focus:text-liquid-lova">
              <span className='mr-1'>Contact me</span>
              <FaArrowDown  size={16} className='animate-bounce'/>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}