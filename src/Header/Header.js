import React, {useState, useRef, useEffect} from 'react'
import styles from "./Header.module.scss"
import { Link} from "react-router-dom";
import { gsap } from "gsap"

function Header() {

    const [isPhoneNavOpen, setIsPhoneNavOpen] = useState(false)
    const headerRef = useRef(null)

    console.log(headerRef)

    useEffect(() => {

        const eventFunction = (e)=> {
            const width = e.target.innerWidth

            
    
            if (width > 1100 && isPhoneNavOpen){
                setIsPhoneNavOpen(false)
                gsap.to("body", {overflow: "unset"})
                gsap.to(`.${styles.phoneNav}`, {width: "0%", display:"none", duration: "0"})
    
            }
        }

        window.addEventListener("resize", eventFunction)

        return () => {
            window.removeEventListener("resize", eventFunction)
        }
    }, [isPhoneNavOpen])

    
    const toggleMenu = ()=> {




        if (isPhoneNavOpen){
            setIsPhoneNavOpen(false)

            // let tl = gsap.timeline({defaults: {duration: 0.2}})
            // .to("body", {overflow: "unset"})
            // .to(`.${styles.phoneNav}`, {width: "0%", display:"none"})

            gsap.to("body", {overflow: "unset"})
            gsap.to(`.${styles.phoneNav}`, {width: "0%", display:"none", duration: "0.2"})


        }

        else{
            setIsPhoneNavOpen(true)
            // let tl = gsap.timeline()
            // .to("body", {overflow: "hidden"})
            // .to(`.${styles.phoneNav}`, {width: "100%", display:"block", duration: "0.2", delay: 0})

            gsap.to("body", {overflow: "hidden"})
            gsap.to(`.${styles.phoneNav}`, {display:"block", width: "100%", duration: "0.2"})
        }
        
    }
    
    return (
        <header className={styles.Header} ref={headerRef}>
            <div className={styles.menuContainer}>
                <Link className={styles.logo} to={"/"} onClick={isPhoneNavOpen ? toggleMenu : null}>
                    <h4>PHOTOSNAP</h4>
                </Link>
        
                {/* <button  onClick={toggleMenu}>CLICK HEREE</button> */}
                <div className={isPhoneNavOpen ? `${styles.menu} ${styles.open}` : `${styles.menu}`} onClick={toggleMenu} >
                    <div className={styles.burger}></div>
                </div>
        
                
            </div>
        
          <nav className={styles.phoneNav} style={headerRef && headerRef.current ? {top: headerRef.current.getBoundingClientRect().bottom} : {}}>
            <ul>
                <Link className={styles.navLinks} onClick={toggleMenu} to={"/"}>HOME</Link>
                <Link className={styles.navLinks} onClick={toggleMenu} to={"/stories"}>STORIES</Link>
                <Link className={styles.navLinks} onClick={toggleMenu} to={"/features"}>FEATURES</Link>
                <Link className={styles.navLinks} onClick={toggleMenu} to={"/pricing"}>PRICING</Link>
{          //  <Link className={styles.inv} onClick={toggleMenu} to={"/"}>GET AN INVITE</Link>
}            </ul>
          </nav>

          <nav className={styles.nav}>
            <ul >
                <Link className={styles.navLinks} to={"/"}>HOME</Link>
                <Link className={styles.navLinks} to={"/stories"}>STORIES</Link>
                <Link className={styles.navLinks} to={"/features"}>FEATURES</Link>
                <Link className={styles.navLinks} to={"/pricing"}>PRICING</Link>
{                // <Link className={styles.inv} to={"/"}>GET AN INVITE</Link>
}            </ul>
          </nav>
    
    
        </header>
    )
}

export default Header
