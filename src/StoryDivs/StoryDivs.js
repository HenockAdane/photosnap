import React from 'react'
import {Link } from "react-router-dom";
import styles from "./StoryDivs.module.scss"
import Arrow from "../Arrow/Arrow"


function StoryDivs(props) {
    return (
        <Link to={"/stories"} className={styles.storyDivsContainer} style={{backgroundImage: props.img}} >
        <div className={styles.storyInfoDiv}>
        <p>{props.p1}</p>
        <h4>{props.h4}</h4>
        <p>{props.p2}</p>


        <Arrow customStyles={{boxShadow: "unset", margin: "unset", justifyContent: "flex-start", border: "none"}} border="solid" h4="READ THE STORY"/>
            
        </div>
        </Link>
    )
}

export default StoryDivs
