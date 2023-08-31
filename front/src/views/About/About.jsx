import React from "react";
import styles from './About.module.css'
import { BiLogoGithub, BiLogoLinkedin, BiMailSend, BiLogoWhatsapp } from "react-icons/bi";
import {FiExternalLink} from "react-icons/fi"
import portafolio from '../../Sources/portafolio.gif'


export default function About() {
    return (
        <div className={styles.container}>

            <div className={styles.info}>
                <div className={styles.image}></div>
                <a href="https://github.com/SanBran" target="_blank" className={styles.lines}>
              <BiLogoGithub className={styles.icons} /> 
              <h2 className={styles.links}>/SanBran</h2><FiExternalLink  /> 
              </a>
            
              
              <a href="https://www.linkedin.com/in/brandon-galarza/" target="_blank" className={styles.lines}>
              <BiLogoLinkedin className={styles.icons} /> 
              <h2 className={styles.links}>/brandon-galarza</h2><FiExternalLink  /> 
              </a>
              
              
              <a href="mailto:luminoforos@gmail.com" target="_blank" className={styles.lines}>
              <BiMailSend className={styles.icons} /> 
              <h2 className={styles.links}>luminoforos@gmail.com</h2><FiExternalLink  /> 
              </a>
              
              <a href="https://api.whatsapp.com/send?phone=5530390859" target="_blank" className={styles.lines}>
              <BiLogoWhatsapp className={styles.icons} /> 
              <h2 className={styles.links}>+52 5530390859</h2><FiExternalLink  /> 
              </a>
            </div>
            
        <div className={styles.text}>
        <h1 className={styles.wubba}>WUBBA LUBBA DUB DUB!</h1>  
            <h2>Hi there!✌️</h2>
        <p>{"I'm Brandon Galarza, a Full Stack Developer with a strong passion for frontend development and web design. This 'Rick and Morty' project was developed as an academic integrator project during my time at Henry Bootcamp. Here, you can search for characters from the series by name. Additionally, you have the option to create an account, allowing you to select your favorite characters and save them in your 'Favorites' section. This project serves as a sandbox for me, a place where I can put my newly acquired knowledge into practice. As a result, the project is in a constant state of development and design improvements. I hope you enjoy it!"} </p>          
        <h2>Also you chan see my other projects in my page👇</h2>
        <a  href="https://portafolio-sanbran.vercel.app/">
        <img className={styles.portafolio} src={portafolio} alt="portafolio" />
        </a>
        </div>
        </div>
     );
}