import Image from 'next/image';
import styles from "./index.module.css";
import { IoLogoGithub, IoLogoLinkedin, IoMail } from 'react-icons/io5';



function HomePage() {
  return <div className={styles.page}>
    <div className={styles.image}>
      <div style={{ borderRadius: '50% !important', width: '75%', marginBottom: '1rem', marginTop: '1rem' }}>
        <Image src="/images/profile.png" width={185} height={200} layout="responsive" style={{ borderRadius: '50% !important' }}/>
      </div>


      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '2rem'}}>
        <h2 style={{ marginBottom: '0.2rem' }}>Mohammad Ismail</h2>
        <h2 style={{ color: '#8b949e' }}>Full Stack Developer</h2>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '85%' }}>
        <div className={styles.buttonsDiv}><IoLogoGithub size={25}/>&nbsp;<span>@ismailwork</span></div>
        <div className={styles.buttonsDiv}><IoLogoLinkedin size={25} />&nbsp;<span>ismail</span></div>
        <div className={styles.buttonsDiv}><IoMail size={25}/>&nbsp;<span>forwork.ismail@gmail.com</span>
        </div>
      </div>

    </div>
    <div className={styles.projects}>
      <h2>CDE</h2>
      <h2>CDE</h2>
      <h2>CDE</h2>
      <h2>CDE</h2>
      <h2>CDE</h2>
      <h2>CDE</h2>
    </div>
  </div>
}

export default HomePage
