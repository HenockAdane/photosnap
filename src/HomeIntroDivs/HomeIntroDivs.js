import React from 'react'
import styles from "./HomeIntroDivs.module.scss"
import Arrow from '../Arrow/Arrow';



function HomeIntroDivs(props) {



    return (
        <div className={styles.HomeIntroDiv}>
        <img className={styles.introImg} src={props.img} alt="cameras"  />
        
        <div className={styles.introTextDiv}>
            <h1>{props.h1}</h1>
            <p>{props.p}</p>
            {/* <Link to={props.to}>{props.Ltext}</Link> */}
            <Arrow customStyles={{margin: "0 auto"}} h4={props.arrowText} to={props.arrowTo} display={props.arrowDisplay}/>
        </div>
            
        </div>
    )
}

export default HomeIntroDivs

//rfce