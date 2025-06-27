import React, { useEffect, useState } from 'react'
import profileImage from '../../assets/profile/profile.jpg'
import downArrow from '../../assets/icons/down-arrow.png'
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
    <div className='homePage py-20'>
      <div className='text-center'>
        <div id="profile-img"  className='rounded-full w-80 h-80 rounded overflow-hidden justify-self-center mb-20'>
          <img src={profileImage}/>
        </div>
        <div id="intro">
          <h1 className='text-2xl p-3'>
            HI, I'M A <br/>
            <span className='animated-title'>{displayedText}&nbsp;</span>
          </h1>
          <div className="my-name text-5xl font-bold my-5">
            KAKU AMSALU
          </div>
          <p>Aspiring Full-Stack Developer | Passionate About Web Development & AI</p>
          <div id="work-contact" className='my-10 md:flex md:flex-row md:gap-2 md:justify-self-center md:gap-10'>
            <a href='#' className='portfolio-link block justify-self-center bg-black text-white p-3'>View My Works</a>
            <a href='#' className="contact-me underline flex items-center justify-self-center h-full justify-center my-auto">
              Contact me
              <img src={downArrow} alt="" className='w-4 h-4'/>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}