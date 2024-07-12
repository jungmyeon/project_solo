import { getServerSession } from "next-auth"
import Link from "next/link"
import Login from "../login/login"
import { authOptions } from "@/pages/api/auth/[...nextauth]"
import Logo from '@/assets/logo.png'
import styles from './header.module.css'
import HeaderBackground from "./header-background"

export default async function Header(){
    let session = await getServerSession(authOptions)
  
    return(
        <>
            <HeaderBackground/>

        <div className={styles.navbar}>
            <Link href='/' className={styles.logo}>
               <img className={styles.navimg} src={Logo.src} alt="logo"/> 
            </Link>
            <Login login={session} className={styles.login}/>
        </div>
        </>
    )
}