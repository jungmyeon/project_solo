'use client'

import Link from "next/link"
import '../login/login.css'
import {signIn, signOut} from 'next-auth/react'


export default function Login({login}){

    return(
        <div className="login"> 
        {
            !login ? (
                <Link href='/register'><span className="link-style">회원가입</span></Link>
            ) : (
                <span>{login?.user.name}</span>
            )
        }
        {
            !login ? (
                <button onClick={()=>{signIn()}}>로그인</button>
            ) : (
                <button onClick={()=>{signOut()}}>로그아웃</button>
            )
        }
        </div>
    )
}