'use client'
import './slide.css'

import Image from 'next/image'

import back1 from '@/assets/back1.jpg'
import back2 from '@/assets/back2.jpg'
import back3 from '@/assets/back3.jpg'
import back4 from '@/assets/back4.jpg'
import back5 from '@/assets/back5.jpg'
import back6 from '@/assets/back6.jpg'
import { useEffect, useState } from 'react'

const images = [
    back1,
    back2,
    back3,
    back4,
    back5,
    back6
];
export default function Slide(){

    const [curSlideIdx, setCurSlideIdx] = useState(0);

    useEffect(()=>{
        const slideTimer = setInterval(()=>{
            setCurSlideIdx((prev)=>{return(prev < images.length -1 ? prev+1 :0)});
        }, 3000)

        return()=>clearInterval(slideTimer);
    },[])
    return(
        <div className='slide'>
            {
                images.map((item,index)=>{
                    return(
                        <Image src={item} className={index === curSlideIdx ? 'active' : ''} 
                        alt='...' key={index}/>
                    )
                })
            }
        </div>
    )
}