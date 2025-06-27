import React from 'react'

export default function ExperienceCard(props) {
  return (
    <div>
        <div className="last:mb-0">
            <h3 className='font-bold text-xl mb-3'>{props.title}</h3>
            <p className='description mb-6'>{props.description}</p>
        </div>
    </div>
  )
}
