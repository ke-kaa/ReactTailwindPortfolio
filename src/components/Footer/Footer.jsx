import React from 'react'
import './footer.css'
import linkedinIcon from '../../assets/icons/linkedin-icon-white.png'
import xIcon from '../../assets/icons/x-icon-white.png'
import instagramIcon from '../../assets/icons/instagram-icon-white.png'
import facebookIcon from '../../assets/icons/facebook-icon-white.png'
import gmailIcon from '../../assets/icons/gmail-icon-white.png'

export default function Footer() {
    return (
        <div className='footer bg-black p-15 text-white text-center'>
            <p>Quick Access</p>
            <ul className="flex gap-3 justify-center text-sm my-2">
                <li><a href="#">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="services.html">Services</a></li>
                <li><a href="resume.html">Resume</a></li>
                <li><a href="portfolio.html">Portfolio</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
            <p className='mt-10'>Stay in touch</p>
            <div id="social-links" className='flex justify-center gap-1.5 my-5'>
                <a href="https://www.linkedin.com/kaku-amsalu" className="inline" target='_blank'><img src={linkedinIcon} width="20px" height="20px" alt=""/></a>
                <a href="https://x.com/k4_kuu" target='_blank'><img src={xIcon} width="20px" height="20px" alt=""/></a>
                <a href="https://www.instagram.com/kakuu.a" target='_blank'><img src={instagramIcon} width="20px" height="20px" alt="" /></a>
                <a href="https://www.facebook.com/kaku/" target='_blank'><img src={facebookIcon} width="20px" height="20px" alt="" /></a>
                <a href="mailto:amsalukaku122@gmail.com" target='_blank'><img src={gmailIcon} width="20px" height="20px" alt="" /></a>
            </div>

            <p className=' text-white text-center text-xs'>&copy; 2025 Kaku Amsalu. Crafted with passion and dedication.</p>
        </div>
    )
}
