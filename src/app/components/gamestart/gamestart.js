'use client'

import styles from './gamestart.module.css';


export default function GameStart(){
    return(
        <div className={styles.game}>
            <button onClick={()=>{
                alert('게임시작 중입니다!')
            }}>Game Start</button>
        </div>
    )
}