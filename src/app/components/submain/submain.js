
import Link from 'next/link'
import styles from './submain.module.css'
import Notice from '../notice/notice'
import { connectDB } from '@/util/db';
import NoticeItem from '../notice/notice-item';

export default async function Submain(){
    const db = (await connectDB).db('mydb');
    let notices = await db.collection('group').find().toArray();

    notices = notices.map((item,index)=>({
        ...item,
        _id: item._id.toString()
    }))

    return(
        <div className={styles.submain}> 
        <div className={styles.detail}>
            <div className={styles.detailhead}>
            <Link href='/detail'>
            <h2>공지사항</h2>
            </Link>
            <Link href='/detail'>
            <span>더보기</span>
            </Link>
            </div>
            <NoticeItem notices={notices}/>
        </div>
        <div>
            <p>이게임을 추천합니다</p>
        </div>
        </div>
    )
}