import React from 'react'
import Button from '../component/Button'
// import arrow from '../assets'
const Header = () => {
    const navList = [
        {
            name:'Product',
            path:'/product',
            // img: arrow
        },
        {
            name:'Price',
            path:'/price'
        },
        {
            name:'Company',
            path:'/company'
        }
    ]
  return (
    <header>
        <nav className='nav'>
            <div className='left'>
            <h2>CRYPRTODS</h2>
                <ul className='list'>
                {
                    navList.map((list) =>(
                    <p>{list.name}</p>
                    ))
                }
                </ul>
            </div>
            <div className='right'>
                <p>Login</p>
                <Button />
            </div>
        </nav>
    </header>
  )
}

export default Header