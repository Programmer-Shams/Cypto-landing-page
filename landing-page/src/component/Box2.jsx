import React from 'react'
import { Vector, carbon, solid } from '../assets'

const Box2 = () => {
    const content = [
        {
            name:'Instant',
            text:'Real-time balance updates and notifications',
            logo:solid
        },
        {
            name:'Low fees',
            text:'All our fees are transparent, upfront and listed when you make a trade.',
            logo:carbon
        },
        {
            name:'24/7 Support',
            text:'Our support staff is available 24 hours a day to help',
            logo:Vector
        }
    ]
  return (
    <div>
            <div className='boxStyle'>
                {
                content.map((value) =>(
                    <div key={value.name} className='pay2'>
                        <div><img src={value.logo} alt={value.name} /></div>
                        <h1>{value.name}</h1>
                        <p>{value.text}</p>
                    </div>
                ))
            }
            </div>
    </div>
  )
}

export default Box2