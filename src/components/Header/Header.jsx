import {React, useState, useRef, useEffect} from 'react'
import './header.css'
import instagramIcon from '../../assets/icons/instagram-icon.png'
import githubIcon from '../../assets/icons/github-icon.png'
import linkedinIcon from '../../assets/icons/linkedin-icon.png'

export default function Header() {
    const [menuVisible, setMenuVisible] = useState(false);
    const menuRef = useRef(null);
    const buttonRef = useRef(null);

    const handleClickOutside = (e) => {
        if (
            menuRef.current && 
            !menuRef.current.contains(e.target) &&
            buttonRef.current && 
            !buttonRef.current.contains(e.target)
        ){
            setMenuVisible(false);
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);
    
    const handleLickClick = () => {
        setMenuVisible(false)
    }
    
    return (
        <div className='NavBarCont shadow'>
            <div className="flex justify-between flex-wrap items-center mx-auto NavBar  px-5 w-full">
                <div id="m-name" className="self-center font-bold">
                    <a href="#">KAKU</a>
                </div>
                <div className="flex jusitfy-between ">
                    <button ref={buttonRef} id='more-button' onClick={() => setMenuVisible(!menuVisible)} className="relative lg:hidden" aria-label={menuVisible ? 'Clos menu' : 'Open menu'} aria-expande={menuVisible}>
                        <div className="relative flex items-center justify-center w-[50px] h-[50px] duration-200">
                            <div
                                className={`flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 ${
                                menuVisible ? '-rotate-[45deg]' : ''
                                } origin-center`}
                            >
                                <div
                                className={`bg-black h-[2px] w-1/2 rounded transform transition-all duration-300 ${
                                    menuVisible ? '-rotate-90 h-[1px] -translate-y-[1px]' : ''
                                } origin-right delay-75`}
                                ></div>
                                <div className="bg-black h-[2px] rounded"></div>
                                <div
                                className={`bg-black h-[2px] w-1/2 rounded self-end transform transition-all duration-300 ${
                                    menuVisible ? '-rotate-90 h-[1px] translate-y-[1px]' : ''
                                } origin-left delay-75`}
                                ></div>
                            </div>
                            </div>
                    </button>
                    <div className={`menu lg:flex flex-col lg:flex-row lg:gap-4 ${menuVisible ? 'block' : 'hidden'} lg:block`} id="menu-container" ref={menuRef}>
                        <ul id="menu" className="flex flex-col lg:flex-row gap-2">
                            <li><a href="#">HOME</a></li>
                            <li><a href="about.html">ABOUT</a></li>
                            <li><a href="services.html">SERVICES</a></li>
                            <li><a href="resume.html">RESUME</a></li>
                            <li><a href="portfolio.html">PORTFOLIO</a></li>
                            <li><a href="contact.html">CONTACT</a></li>
                        </ul>
                    </div>
                    <div id="social-links" className='flex justify-between items-center gap-1'>
                                <a href="https://www.linkedin.com/kaku-amsalu" className="inline" target='_blank'><img src={linkedinIcon} width="20px" height="20px" alt=""/></a>
                                <a href="https://github.com/ke-kaa" target='_blank'><img src={githubIcon} width="20px" height="20px" alt=""/></a>
                                <a href="https://www.linkedin.com/in/kaku-amsalu-5aa926283/" target='_blank'><img src={instagramIcon} width="20px" height="20px" alt="" /></a>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
