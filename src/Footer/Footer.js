import React from 'react'
import styles from "./Footer.module.scss"
import { Link} from "react-router-dom";
import Arrow from '../Arrow/Arrow';

function Footer() {

    // alert(new Date().getFullYear())
    return (
        <footer className={styles.Footer}>

            <div className={styles.footerDiv1}>
                <Link className={styles.logo} to={"/"}>PHOTOSNAP</Link>
        
                <div className={styles.socialsDiv}>
                    <button className={styles.footerlinks}><img src="/images/shared/desktop/facebook.svg" alt="facebook"/></button>
                    <button className={styles.footerlinks}><img src="/images/shared/desktop/instagram.svg" alt="instagram"/></button>
                    <button className={styles.footerlinks}><img src="/images/shared/desktop/twitter.svg" alt="twitter"/></button>
                    <button className={styles.footerlinks}><img src="/images/shared/desktop/pinterest.svg" alt="pinterest"/></button>
                    <button className={styles.footerlinks}><img src="/images/shared/desktop/youtube.svg" alt="youtube"/></button>
                </div>
        
            </div>
    
            <div className={styles.footerDiv2}>
                <Link className={styles.footerlinks} to={"/"}>HOME</Link>
                <Link className={styles.footerlinks} to={"/stories"}>STORIES</Link>
                <Link className={styles.footerlinks} to={"/features"}>FEATURES</Link>
                <Link className={styles.footerlinks} to={"/pricing"}>PRICING</Link>
            </div>
    
            <div className={styles.footerDiv3}>
                <Arrow jc="center" h4="GET AN INVITE" />
                <p>This website was made by <a className={styles.madeBy} href="https://github.com/HenockAdane" target="_blank" rel="noopener noreferrer">HENOCK ADANE</a></p>
                <p>Copyright {new Date().getFullYear()}. All Rights Reserved</p>
    
            </div>
  
      </footer>
  
    )
}

export default Footer
