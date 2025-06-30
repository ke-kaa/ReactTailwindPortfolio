import React from 'react'
import './footer.css'
import { FaLinkedin, FaXTwitter, FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa6';

export default function Footer() {
    return (
        <div className='footer bg-black p-15 text-white text-center dark:bg-marigold dark:text-slate-grey'>
            <p>Quick Access</p>
            <ul className="flex gap-3 justify-center text-sm my-2">
                <li><a href="#" className='hover:ring-1'>Home</a></li>
                <li><a href="#about" className='hover:ring-1'>About</a></li>
                <li><a href="#services" className='hover:ring-1'>Services</a></li>
                <li><a href="#resume" className='hover:ring-1'>Resume</a></li>
                <li><a href="#portfolio" className='hover:ring-1'>Portfolio</a></li>
                <li><a href="#contact" className='hover:ring-1'>Contact</a></li>
            </ul>

            <p className='mt-10'>Stay in touch</p>
            <div id="social-links" className='flex justify-center gap-1.5 my-5'>
                <a href="https://www.linkedin.com/kaku-amsalu" className="inline" target='_blank'><FaLinkedin size={20}/></a>
                <a href="https://x.com/k4_kuu" target='_blank'><FaXTwitter size={20} /></a>
                <a href="https://www.instagram.com/kakuu.a" target='_blank'><FaInstagram size={20} /></a>
                <a href="https://www.facebook.com/kaku/" target='_blank'><FaFacebook size={20}/></a>
                <a href="mailto:amsalukaku122@gmail.com" target='_blank'><FaEnvelope size={20}/></a>
            </div>

            <p className=' text-white text-center text-xs dark:text-slate-grey'>&copy; 2025 Kaku Amsalu. All rights reserved. Crafted with <del>passion</del> caffeine and <del>dedication</del> spite.</p>
        </div>
    )
}
