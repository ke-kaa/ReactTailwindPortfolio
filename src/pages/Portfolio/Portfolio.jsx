import React from 'react'
import './portfolio.css'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import profileIMg  from '../../assets/profile/profile.jpg'
import airbnbClone from '../../assets/projects_list/airbnbClone.png'
import githubProfileAnalyzerImg from '../../assets/projects_list/image.png'


export default function Portfolio() {
    return (
    <div id="portfolio" className='min-h-screen portfolio-container py-5 px-10 flex items-center bg-[#d2d2d2] dark:bg-dark-void dark:text-marigold'>
            <div className='mx-auto'>
                <h1 className='font-bold text-5xl text-center mt-5'>Some of my most recent projects</h1>
                <div className='flex flex-wrap gap-10 my-20 justify-self-center md:grid md:grid-cols-2 lg:grid-cols-3 max-w-[1360px]'>
                    <ProjectCard 
                        title="MediMap" 
                        description=" MediMap is a web app that lets users search for medicines, view nearby pharmacies with real-time stock levels on a map, and access pharmacy details, while pharmacies can register and manage their inventory." 
                        languages={["Django", "DRF", "React", "PostgreSQL [PostGIS]"]} 
                        githubUrl="https://github.com/ke-kaa/MediMap" 
                        visitUrl=""  
                    />

                    <ProjectCard
                        title="Github Profile Analyzer"
                        imgSrc={githubProfileAnalyzerImg}
                        description=" A React web application that allows you to search for any GitHub user and view detailed information about their profile, repositories, and language usage."
                        languages={["React", "React-Redux", "CSS"]}
                        githubUrl="https://github.com/ke-kaa/GithubProfileAnalyzer"
                        visitUrl=""
                    />

                    <ProjectCard
                        title="Airbnb Clone Backend"
                        imgSrc={airbnbClone}
                        description="The Airbnb Clone Backend provides a robust, scalable, and modular RESTful and GraphQL-powered backend system that mimics the core functionalities of Airbnb. This includes user authentication, property listings, booking management, payment processing, and user reviews."
                        languages={["Django", "DRF", "GraphQL", "Celery", "Redis", "Docker", "OpenAPI/Swagger"]}
                        githubUrl="https://github.com/ke-kaa/GithubProfileAnalyzer"
                        visitUrl=""
                    />
                    
                    <ProjectCard
                        title="Freelancer Escrow API"
                        description="Escrow API is a secure and scalable backend service built with Django and Django REST Framework to manage freelance project payments through an escrow-based workflow. It supports role-based access for clients, freelancers, and admins, with features such as Stripe-based payment handling, dispute resolution, audit logging, and a fully RESTful API documented with Swagger/OpenAPI."
                        languages={["Django", "DRF", "PostgreSQL","Celery", "Redis", "OpenAPI/Swagger"]}
                        githubUrl="https://github.com/ke-kaa/GithubProfileAnalyzer"
                        visitUrl=""
                    />

                    <ProjectCard
                        title="Employee Timesheet and Leave Management API"
                        description="The Employee Timesheet & Leave Management API is a secure backend system that enables companies to track employee attendance, manage leave requests, and generate reports through role-based access for Employees, Managers, and Admins."
                        languages={["Django", "DRF", "GraphQL", "Celery", "Redis", "Docker", "OpenAPI/Swagger"]}
                        githubUrl="https://github.com/ke-kaa/GithubProfileAnalyzer"
                        visitUrl=""
                    />

                </div>
            </div>
        </div>
    )
}
