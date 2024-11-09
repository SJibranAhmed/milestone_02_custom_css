import { AiOutlineMenu } from "react-icons/ai"
import styles from './styles/navbar.module.css'
import Link from "next/link"
const Navbar = () => {
  return (
    <div className={styles.container} >
      <div className={styles.nav}>
        <div className={styles.logo}>PortFolio.com</div>
        <ul className={styles.navItem}>
          <li className="menuLink"><Link href={'/'}>Home</Link></li>
          <li className="menuLink"><Link href={'#skills'}>Skills</Link></li>
          <li className="menuLink"><Link href={"#contact"}>Contact</Link></li>
        </ul>
        <AiOutlineMenu className={styles.icons} size={30}/>
      </div>
    </div>
  )
}

export default Navbar