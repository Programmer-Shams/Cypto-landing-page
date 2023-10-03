import React from 'react'
import Button from '../component/Button'
import "../index.css";
const Suscribe = () => {
  return (
    <section>
        <div className='start'>
            <div>
                <h1 style={{fontSize:'2rem', marginBottom:'25px'}}>Start with Cryptocurrency now</h1>
                <h4 style={{color:'#343434'}}>Get started with 5$ now</h4>
            </div>
            <div style={{display:'flex', gap:'1rem', textAlign:'center', alignItems:'center'}}>
                <input type="text" placeholder='Email Adress' style={{padding:'18px 10px', height:'0', borderRadius:'5px', border:'1px solid #222222', outline:'none', display:'flex', textAlign:'left', width:'15rem' }}/>
                <Button />  
            </div>
        </div>
    </section>
  )
}

export default Suscribe