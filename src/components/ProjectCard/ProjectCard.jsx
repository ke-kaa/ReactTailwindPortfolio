import React, { useState } from 'react'
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

import './projectCard.css'


export default function ProjectCard({title, imgSrc, description, languages, githubUrl, visitUrl }) {

    return (
        <div className='flex flex-col rounded-lg overflow-hidden shadow-2xl bg-[#fff] border-black transition-transform ease-in-out duration-700 hover:scale-105'>
            <div className='h-[270px] w-full overflow-hidden flex items-center justify-center'>
                {imgSrc ? (
                    <img src={imgSrc} alt={title} className='w-full h-full object-cover'/>
                ) : (
                    <span className="text-2xl font-bold text-gray-500 text-center ">{title}</span>
                )}
            </div>
            <div className='p-4 flex-1'>
                <h2 className='font-bold text-xl my-2'>{title}</h2>
                <p>{description}</p>
                <div className='flex flex-wrap gap-2 my-3'>
                    {languages && languages.map((lang, idx) =>(
                        <div key={idx} className='inline-block border border-gray-400 rounded px-2 py-1 text-xs'>
                            {lang}
                        </div>
                    ))}
                </div>
                
            </div>
            <div className='flex gap-2 justify-around w-full justify-self-end'>
                    <a href={githubUrl} target='_blank' rel='noopener noreferrer' className='flex-1 p-3'><FaGithub size={24} className='justify-self-center' /></a>
                    <a href={visitUrl} target='_blank' rel='noopener noreferrer' className='flex-1 self-center p-3'><FiExternalLink size={24} className='justify-self-center' /></a>
            </div>
        </div>
    )
}
