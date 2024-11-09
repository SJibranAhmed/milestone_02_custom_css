
import styles from './styles/hero.module.css' 
import Navbar from "./Navbar"
const Hero = () => {
  return (
    <div className={styles.container}>
      <Navbar/>
      <div className={styles.section}>
        <div className={styles.box}></div>
        <div className={styles.heading}>
          <div>
            <p>I&apos;m</p>
            <p>Sheikh</p>
            <p>Jibran</p>
            <p>Ahmed</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero