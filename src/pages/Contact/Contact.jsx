import React from 'react'
import './contact.css'

import xIcon from '../../assets/icons/x-icon.png'
import instagramIcon from '../../assets/icons/instagram-icon.png'
import linkedinIcon from '../../assets/icons/linkedin-icon.png'

export default function Contact() {
    return (
        <div className='contact-container min-h-screen py-15 px-4 lg:flex lg:items-center'>
            <div className='lg:flex lg:gap-10 lg:px-20 justify-center max-w-[1800px] mx-auto'>
                <div id="contact-info " className='text-center lg:flex-1'>
                    <h1 className="text-5xl font-bold text-center mb-10">Let's get in touch</h1>
                    <p className="mb-10">I'm always eager to collaborate on exciting web development or AI projects that make a difference. If you're looking for someone passionate, dedicated, and ready to contribute to your team or project, I'd love to hear from you. Feel free to reach out with any opportunities or questions, and let's work together to create something impactful!</p>
                    <p className="font-bold mb-1">Currently studying at:</p>
                    <p className="mb-5">AAiT, Addis Ababa, Ethiopia</p>
                    <p className="font-bold mb-1">Call:</p>
                    <p className="">+251972489050</p>
                    <div className="icons flex my-5 gap-3 justify-self-center">
                        <a href="https://www.linkedin.com/kaku-amsalu"><img src={linkedinIcon} alt="" className='w-5 h-5'/></a>
                        <a href="https://www.twitter.com/in/k4_kuu"><img src={xIcon} alt="" className='w-5 h-5'/></a>
                        <a href="https://www.instagram.com/kakuu.a"><img src={instagramIcon} alt="" className='w-5 h-5'/></a>
                    </div>
                </div>
                <div id="form-container" className='lg:flex-1'>
                    <h1 className='text-5xl font-bold my-20 text-center lg:mt-0'>Estimate your Project?</h1>
                    <form action="" className='w-11/12 m-auto'>
                        <label for="fname">Your Name:</label>
                        <input type="text" name="fname" id="fname" />

                        <label for="email-address">Your Email Address:</label>
                        <input type="text" name="email-address" id="email-address" />

                        <label for="client-work">How can I Help you?:</label>
                        <textarea name="client-work" id="client-work" rows="4" className='w-full p-2.5 border-none mb-4'></textarea>

                        <button type="submit" className='text-white bg-black border-none cursor-pointer p-2.5 block'>Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
