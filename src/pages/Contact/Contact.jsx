import React, {useRef} from 'react'
import './contact.css'
import { sendEmail } from '../../utils/emailService'
import { FaXTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa6';

export default function Contact() {
    return (
        <div id="contact" className='contact-container min-h-screen py-15 px-4 lg:flex lg:items-center dark:bg-dark-void dark:text-marigold'>
            <div className='lg:flex lg:gap-10 lg:px-20 justify-center max-w-[1800px] mx-auto'>
                <div data-aos="fade-up" id="contact-info " className='text-center lg:flex-1'>
                    <h1 className="text-5xl font-bold text-center mb-10">Let's get in touch</h1>
                    <p className="mb-10">I'm always eager to collaborate on exciting web development or AI projects that make a difference. If you're looking for someone passionate, dedicated, and ready to contribute to your team or project, I'd love to hear from you. Feel free to reach out with any opportunities or questions, and let's work together to create something impactful!</p>
                    <p className="font-bold mb-1">Currently studying at:</p>
                    <p className="mb-5">AAiT, Addis Ababa, Ethiopia</p>
                    <p className="font-bold mb-1">Call:</p>
                    <p className="">+251972489050</p>
                    <div className="icons flex my-5 gap-3 justify-self-center">
                        <a href="https://www.linkedin.com/kaku-amsalu"><FaLinkedin size={24}/></a>
                        <a href="https://www.twitter.com/in/k4_kuu"><FaInstagram size={24}/></a>
                        <a href="https://www.instagram.com/kakuu.a"><FaXTwitter size={24}/></a>
                    </div>
                </div>
                <div data-aos="fade-up" id="form-container" className='lg:flex-1'>
                    <h1 className='text-5xl font-bold my-20 text-center lg:mt-0'>Estimate your Project?</h1>
                    <form onSubmit={sendEmail} className='w-11/12 m-auto'>
                        <label for="fname" className='text-left mb-[5px] block'>Name:</label>
                        <input type="text" name="fname" id="fname" required className="block transition-transform duration-300 focus:shadow-lg focus:shadow-black/20 w-full p-[10px] border-none outline-none mb-[1rem] border-b border-solid border-b-[#d2d2d2]"/>

                        <label for="email-address" className='text-left mb-[5px] block'>Email:</label>
                        <input type="email" name="email-address" id="email-address" required className='block transition-transform duration-300 focus:shadow-lg focus:shadow-black/20 w-full p-[10px] border-none outline-none mb-[1rem] border-b border-solid border-b-[#d2d2d2]' />

                        <label for="subject" className='text-left mb-[5px] block'>Subject:</label>
                        <input type="text" name="subject" id="subject" className='block transition-transform duration-300 focus:shadow-lg focus:shadow-black/20 w-full p-[10px] border-none outline-none mb-[1rem] border-b border-solid border-b-[#d2d2d2]' />

                        <label for="client-work" className='text-left mb-[5px] block'>How can I Help you?:</label>
                        <textarea name="client-work" id="client-work" required rows="4" className='w-full p-2.5 border-none mb-4 transition-transform duration-300 focus:shadow-lg focus:shadow-black/20 outline-none border-b border-solid border-b-[#d2d2d2]'></textarea>

                        <button type="submit" className='w-[104px] text-white bg-black border-none cursor-pointer p-2.5 block transition-transform duration-300 hover:scale-105 focus:scale-105 dark:text-marigold dark:bg-dusty-grey '>Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
