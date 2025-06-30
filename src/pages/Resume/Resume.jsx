import React from 'react'
import './resume.css'
import EducationCard from '../../components/EducationCard/EducationCard'
import ExperienceCard from '../../components/ExperienceCard/ExperienceCard';
import SkillBar from '../../components/SkillBar/SkillBar';

export default function Resume() {
    const softwareDescription = "Bachelor of Science candidate in Software Engineering at Addis Ababa University, specializing in systematic software development methodologies, algorithmic problem-solving, and software design patterns. Actively applying theoretical knowledge through practical projects.";
    const backendDescription = "Completed comprehensive backend development training with hands-on experience in building RESTful APIs (Django), relational database architecture (MySQL), and authentication systems (JWT/OAuth). Implemented CI/CD pipelines for automated deployment.";
    const proBackendDescription = "Advanced Back End ProDev participant, mastering microservices architecture, containerization (Docker), and high-performance systems design. Developing expertise in distributed systems, message brokers (RabbitMQ/Kafka), and cloud-native application development.";
    const awsDescription = "AWS Cloud Computing certification candidate with demonstrated proficiency in implementing the AWS Well-Architected Framework. Designing fault-tolerant architectures leveraging EC2, S3, RDS, and Lambda, while optimizing for cost-efficiency and security best practices.";
    
    const frontendDescription = "Engineer dynamic, responsive user interfaces leveraging modern framework (React) with CSS-in-JS (Tailwind, Styled Components) and state management solutions (Redux, Context API). Implement accessibility standards (WCAG) and cross-browser compatibility.";
    const expBackendDescription = "Design and optimize scalable server-side architectures using Node.js/Django, with expertise in RESTful API development, database schema design (SQL/NoSQL), and cloud deployment (AWS/Docker). Implement authentication/authorization flows (OAuth, JWT) and caching strategies.";
    const uiuxDescription = "Apply user-centered design methodologies to create intuitive interfaces through wireframing (Figma), prototyping, and usability testing. Implement design systems with atomic design principles while balancing aesthetic appeal with technical feasibility.";
    const mobileDescription = "Develop performant cross-platform applications (Flutter) with native module integration. Optimize for device constraints, implement platform-specific UX patterns, and leverage CI/CD pipelines for streamlined deployment.";    
    
    return (
        <div id="resume" className='min-h-screen py-10 px-5 flex items-center dark:bg-dark-void dark:text-marigold'>
            <div className='mx-auto'>
                <h1 className='text-4xl font-bold text-center mt-5'>A summary of my resume</h1>
                <div id="resume-container" className='my-10 lg:flex lg:gap-5 max-w-[1400px] mx-auto'>
                    <div id="education" className='my-10 lg:fex-1'>
                        <h2 className='text-2xl font-bold my-5'>My Education</h2>
                        <div id="education-container" className='border-l-4 border-[#d9d9d9] pl-5 py-3 dark:border-dusty-grey'>
                            <EducationCard title="BSc in Software Engineering" completionTime="AAU | 2022 - 2027" description={softwareDescription}/>
                            <EducationCard title="Backend Development Program" completionTime="ALX Ethiopia | 2024 - 2025" description={backendDescription}/>
                            <EducationCard title="Pro Backend Development" completionTime="ALX Ethiopia | 2025 - 2026" description={proBackendDescription}/>
                            <EducationCard title="AWS Cloud Computing" completionTime="ALX Ethiopia | 2025 - 2026" description={awsDescription}/>
                        </div>
                    </div>

                    <div id="experience" className='my-10 lg:fex-1'>
                        <h2 className='text-2xl font-bold my-5'>My Experience</h2>
                        <div id="experience-container" className='border-l-4 border-[#d9d9d9] pl-5 py-3 dark:border-dusty-grey'>
                            <ExperienceCard title="Front End Developer" description={frontendDescription}/>
                            <ExperienceCard title="Backend Developer" description={expBackendDescription}/>
                            <ExperienceCard title="UI/UX Designer" description={uiuxDescription}/>
                            <ExperienceCard title="Mobile Application Developer" description={mobileDescription}/>
                        </div>
                    </div>
                </div>
                <h2 className='font-bold mb-10 text-2xl text-center'>My Skills</h2>
                <div id="skill-container" className='lg:flex lg:gap-15 px-2 max-w-[1400px] mx-auto'>
                    <div className='lg:flex-1'> 
                        <SkillBar skill="Python" progress="85%"/>
                        <SkillBar skill="Django/DRF" progress="85%"/>
                        <SkillBar skill="HTML5/CSS" progress="90%"/>
                        <SkillBar skill="Java" progress="60%"/>
                        <SkillBar skill="Javascript" progress="75%"/>
                        <SkillBar skill="Bootstrap/Tailwind" progress="75%"/>
                    </div>
                    <div className='lg:flex-1'>
                        <SkillBar skill="Flutter" progress="60%"/>
                        <SkillBar skill="Node/Express" progress="60%"/>
                        <SkillBar skill="React" progress="75%"/>
                        <SkillBar skill="MongoDB" progress="70%"/>
                        <SkillBar skill="MySQL" progress="75%"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
