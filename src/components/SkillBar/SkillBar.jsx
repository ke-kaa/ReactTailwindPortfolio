import {React, useState} from 'react'
import './skillBar.css'

export default function SkillBar(props) {
    const [hovered, sethovered] = useState(false);
    
    return (
        <div>
            <div className="progress-container mb-[1.25rem]">
                <div className="progress-label flex justify-between font-sm mb-[0.3125rem]">
                    <span>{props.skill}</span>
                    <span>{hovered && (<span className='ml-2 font-bold'>{props.progress}</span>)}</span>
                </div>
                <div className="progress-bar transition-transform duration-500 hover:scale-105 bg-[#e0e0e0] rounded-[10px] ovreflow-hidden h-[8px] w-full dark:bg-dusty-grey" onMouseEnter={() => sethovered(true)} onMouseLeave={() => sethovered(false)}>
                <div className="progress-fill bg-[#000] h-full w-0 rounded-[10px] dark:bg-marigold"
                    style={{ width: typeof props.progress === 'number' ? `${props.progress}%` : props.progress }}>
                </div>
                </div>
            </div>
        </div>
    )
}
