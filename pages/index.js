import Image from 'next/image';
import styles from "./index.module.css";
import { IoLogoGithub, IoLogoLinkedin, IoMail, IoLocation } from 'react-icons/io5';



function HomePage() {
  return <div className={styles.page}>
    <div className={styles.image}>
      <div style={{ borderRadius: '50% !important', width: '85%', marginBottom: '1rem', marginTop: '1rem' }}>
        <Image src="/images/profile.png" width={180} height={200} layout="responsive" style={{ borderRadius: '50% !important' }}/>
      </div>


      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '2rem'}}>
        <h2 style={{ marginBottom: '0.2rem' }}>Mohammad Ismail</h2>
        <h2 style={{ color: '#8b949e' }}>Full Stack Developer</h2>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '95%' }}>
        <div className={styles.buttonsDiv}><IoLogoGithub size={25}/>&nbsp;<span>ismailwork</span></div>
        <div className={styles.buttonsDiv}><IoLogoLinkedin size={25} />&nbsp;<span>ismail</span></div>
        <div className={styles.buttonsDiv}><IoMail size={25}/>&nbsp;<span>forwork.ismail@gmail.com</span></div>
        <div className={styles.buttonsDiv}><IoLocation size={25}/>&nbsp;<span>Kabul, Afghanistan</span>
        </div>
      </div>

    </div>
    <div className={styles.projects}>
      <div className={styles.menuItems}>
        <div className={styles.menuItem}>Bio</div>
        <div className={styles.menuItem}>Work</div>
        <div className={styles.menuItem}>Projects</div>
      </div>
      <div style={{ minHeight: '20rem'}}>

      </div>
    </div>
  </div>
}

export default HomePage
