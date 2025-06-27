import React from 'react'
import './serviceCard.css'

export default function (props) {
    return (
        <div className='text-center flex-column items-center align-center gap-5 justify-items-center mb-5'>
            <img className='service-icon mb-3' src={props.src}/>
            <h3 className='font-bold text-lg mb-3'>{props.service}</h3>
            <p className='description-text'>{props.description}</p>
        </div>
    )
}
