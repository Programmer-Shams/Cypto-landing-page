import React from 'react'
import { btc, masterCard, sepa } from '../assets'
import '../index.css'

const Box = () => {
    const content = [
        {
            name:'Debits/ Credit Card',
            text:'Buy your cryptocurrency with Mastercards/ visa',
            logo:masterCard
        },
        {
            name:'Bank Transfer',
            text:'You can transfer from anywhere in the world',
            logo:sepa
        },
        {
            name:'Cryptocurrency',
            text:'Over 30 currencies you can trade from',
            logo:btc
        }
    ]
  return (
    <div>
            <div className='boxStyle'>
                {
                content.map((value) =>(
                    <div key={value.name} className='pay'>
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

export default Box