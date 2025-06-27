import React from 'react'
import './educationCard.css'

export default function EducationCard(props) {
    return (
        <div className="last:mb-0">
            <h3 className='font-bold text-xl mb-3'>{props.title}</h3>
            <p className='font-bold mb-3'>{props.completionTime}</p>
            <p className='description mb-6'>{props.description}</p>
        </div>
    )
}
