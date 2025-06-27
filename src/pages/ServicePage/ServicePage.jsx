import React from 'react'
import './services.css'
import frontendIcon from '../../assets/icons/front-end.png'
import backendIcon from '../../assets/icons/back-end.png'
import mobiledevIcon from '../../assets/icons/mobile-dev.png'
import uiuxIcon from '../../assets/icons/paint-palette.png'
import ServiceCard from '../../components/ServiceCard/ServiceCard'

export default function ServicePage() {
    const frontendDescription = "I create visually appealing, responsive, and user-friendly interfaces using modern web technologies like HTML, CSS, and JavaScript. My focus is on delivering intuitive designs that enhance user experiences across devices."
    const mobileDescription = "I develop high-performance, cross-platform mobile applications using frameworks like React Native or Flutter. My focus is on creating smooth, intuitive, and visually engaging apps that deliver seamless user experiences on both iOS and Android.";  
    const backendDescription = "I build scalable and secure backend systems for mobile apps using Node.js, Firebase, or Django REST. I ensure efficient API integration, real-time data synchronization, and cloud-based solutions for optimal performance.";  
    const uiuxDescription = "I design sleek, user-centric interfaces with a focus on usability and accessibility. Using Figma, I craft pixel-perfect prototypes and animations that enhance engagement and streamline navigation.";      return (
    <div className='min-h-screen service-page py-15 md:flex md:items-center md:justify-center'>
        <div className='w-full'>
            <h1 className='font-bold text-4xl text-center mb-20'>How I Bring Your Vision to Life</h1>
            <div class="service-container md:flex md:flex-wrap md:justify-center md:mx-auto md:gap-3">
                <ServiceCard src={frontendIcon} service="Frontend Development" description={frontendDescription}/>
                <ServiceCard src={backendIcon} service="Backend Development" description={backendDescription}/>
                <ServiceCard src={mobiledevIcon} service="Mobile Development" description={mobileDescription}/>
                <ServiceCard src={uiuxIcon} service="UI/UX Design" description={uiuxDescription}/>
            </div>
        </div>
    </div>
    )
}
