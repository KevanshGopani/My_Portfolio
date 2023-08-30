import React from 'react'
import './Footer.css'
import Wave from '../../img/wave.png'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'

const Footer = () => {
  return (
   <div className="footer">
    <img src={Wave} alt="" style={{width:'100%'}}/>
    <div className="f-content">
        <span>Kevanshgopani5@gmail.com</span>
        <div className="f-icons">
        <Insta color='black' size='3rem'/>
        <Facebook color='black' size='3rem'/>
        <a href="https://github.com/KevanshGopani" target="_blank" rel="noreferrer"><Github color='black' size='3rem'/></a>
        
        </div>
        
    </div>
   </div>
  )
}

export default Footer