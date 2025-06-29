import React from 'react'
import './serviceCard.css'

export default function (props) {
    return (
        <div className='text-center flex-column items-center align-center gap-5 justify-items-center m-7 p-5 bg-white/70 rounded-lg shadow-2xl transition-transform duration-500 hover:scale-110'>
            <img className='service-icon mb-3 w-[40px]' src={props.src}/>
            <h3 className='font-bold text-lg mb-3'>{props.service}</h3>
            <p className='description-text max-w-[370px] mb-2'>{props.description}</p>
        </div>
    )
}
