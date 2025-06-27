import React from 'react'
import './skillBar.css'

export default function SkillBar(props) {
    return (
        <div>
            <div className="progress-container">
                <div className="progress-label">
                    <span>{props.skill}</span>
                    {/* <span>{props.progress}</span> */}
                </div>
                <div className="progress-bar">
                <div className="progress-fill"
                    style={{ width: typeof props.progress === 'number' ? `${props.progress}%` : props.progress }}>
                </div>
                </div>
            </div>
        </div>
    )
}
