'use client'

import Link from 'next/link'
import styles from './sublogin.module.css'
import { signIn, signOut } from 'next-auth/react'

export default function SubLogin({login}){
    return(
        <div className={styles.login}>
        {
            !login ? (
                <button onClick={()=>{signIn()}}>로그인</button>
            ) : (
                <div className={styles.myinfo}>
                <span><h1>{login?.user.name}</h1></span>
                <br/>
                <div className={styles.action}>
                    <Link href='/info'><p>내정보</p></Link>
                    <span className={styles.mylogout} onClick={()=>{signOut()}}>로그아웃</span>
                </div>
                </div>
            )
        }
        </div>
    )
}