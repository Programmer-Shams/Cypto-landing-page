import React from 'react'
import "../index.css";
export const Footer = () => {
    const footerLinks = [
        {
            title: "Company",
            links: [
                { name: "About us", link: "/" },
                { name: "Fees", link: "/" },
                { name: "Legal and Privacy", link: "/" },
                { name: "Referral Program", link: "/" },
                { name: "Careers", link: "/" },
            ],
        },
        {
            title: "Learn",
            links: [
                { name: "Prices", link: "/" },
                { name: "Buy Bitcoin", link: "/" },
                { name: "Buy Ethereum", link: "/" },
                { name: "Buy Litecoin", link: "/" },
                { name: " Buy XRP", link: "/" },
            ],
        },
        {
            title: "Support",
            links: [
                { name: "Help Center", link: "/" },
                { name: "Contact us", link: "/" },
                { name: "API", link: "/" },
            ],
        },
        {
            title: "Social",
            links: [
                { name: "Blog", link: "/" },
                { name: "Facebook", link: "/" },
                { name: "Twitter", link: "/" },
                { name: "Reddit", link: "/" },
            ],
        },
    ]
  return (
    <footer>
        <div className='EndPoint'>
            <div style={{width: '40%'}}><h1>LAPPA</h1></div>
            <div className='links'>
                {
                    footerLinks.map((lin) =>(
                        <div key={lin.title} style={{ padding:' 0 60px', textAlign:'left', alignItems:'center'}}>
                            <h3>{lin.title}</h3>
                            {
                                lin.links.map((list) =>(
                                    <p style={{padding:'8px 0', textAlign:'left', color:'#000000', fontSize:'0.8rem'}}>{list.name}</p>
                                ))
                            }
                        </div>
                    ))
                    
                }
                
            </div>
        </div>
    </footer>
  )
}
