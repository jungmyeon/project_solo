'use client'

import styles from './count.module.css'
import { useState } from "react"



export default function Count(){
    const [count, setCount] = useState(0);
    const handleCountClick = ()=>{
        setCount(count +1);
    }
    return(
        <div>
            <p>이게임을 추천합니다</p>
            <button onClick={handleCountClick} className={styles.count}>👍</button>
            <p>추천 수: {count}</p>
        </div>
    )
}