import React from 'react'
import './about.css'
import profileImage from '../../assets/profile/profile-square.jpg'

export default function About() {
    return (
        <div id="about" className='md:pt-10 lg:flex lg:justify-self-center lg:items-center lg:justify-center lg:gap-9 min-h-screen lg:px-10 w-full dark:bg-dark-void dark:text-marigold'>
            <div id="about-me" className='text-center'>
                <h1 className="font-bold text-5xl py-12">Know Me More</h1>
                <h2 className='text-3xl my-5'>Hi, I'm <span className="font-semibold">Kaku Amsalu</span></h2>
                <div className='personal-info justify-self-center mb-20'>
                    <p className=''>
                        I am a 3rd-year Software Engineering student at Addis Ababa University
                        with a strong passion for web & mobile applications development and artificial intelligence.
                        I thrive on designing intuitive and efficient web applications while
                        exploring the limitless possibilities of AI to solve complex,
                        real-world problems. Over the years, I have gained experience in
                        various programming languages and tools, allowing me to build projects
                        that emphasize both functionality and user experience. My curiosity
                        drives me to continuously learn and stay updated on the latest
                        technologies, ensuring I can adapt to the ever-evolving tech
                        landscape. I am committed to creating innovative solutions that blend
                        creativity, practicality, and cutting-edge technology to make a
                        meaningful impact.
                    </p>
                </div>
            </div>
            <div id="profile" className='lg:py-20'>
                <div id="profile-img" className='rounded-full w-50 h-50 rounded overflow-hidden justify-self-center mb-5'>
                    <img src={profileImage} alt="" />
                </div>
                <div className="contact-info flex gap-10 justify-self-center pb-20 px-5">
                    <div>
                        <p className="color-6c">Name:</p>
                        <p className="font-bold">Kaku Amsalu</p>
                    </div>
                    <div>
                        <p className="color-6c">Email:</p>
                        <a href="mailto:amsalukaku122@gmail.com" className='font-bold'>amsalukaku122@gmail.com</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
