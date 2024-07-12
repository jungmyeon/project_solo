'use client'
import Image from 'next/image'
import styles from './page.module.css'

import cat from '@/assets/cat.jpg'


export default function Infopage({login}){
    const userName = login?.user.name;
    return(
        <div>
            <Image className={styles.img} src={cat}/>
            <span>{userName}</span>
        </div>
    )
}