import {React, useState} from 'react'
import './skillBar.css'

export default function SkillBar(props) {
    const [hovered, sethovered] = useState(false);
    
    return (
        <div>
            <div className="progress-container ">
                <div className="progress-label">
                    <span>{props.skill}</span>
                    <span>{hovered && (<span className='ml-2 font-bold'>{props.progress}</span>)}</span>
                </div>
                <div className="progress-bar transition-transform duration-500 hover:scale-105" onMouseEnter={() => sethovered(true)} onMouseLeave={() => sethovered(false)}>
                <div className="progress-fill "
                    style={{ width: typeof props.progress === 'number' ? `${props.progress}%` : props.progress }}>
                </div>
                </div>
            </div>
        </div>
    )
}
