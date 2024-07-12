
import Link from 'next/link'
import styles from './page.module.css'
import { connectDB } from '@/util/db';
import NoticeItem from '../components/notice/notice-item';


export default async function Detail(){
    const db = (await connectDB).db('mydb');
    let notices = await db.collection('group').find().toArray();

    notices = notices.map((item,index)=>({
        ...item,
        _id: item._id.toString()
    }))
    console.log(notices);

    return(
        <div className={styles.detailmain}>
            <div className={styles.detail}>
                <h2>공지사항</h2>
                <hr/>
                <NoticeItem notices={notices}/>
                <div>
                <Link href='/detail/writedetail'>
                    <span className={styles.write}>
                         새등록
                    </span>
                </Link>
                </div>
            </div>
            <div>
            <button className={styles.detailbtn}>
                삭제
            </button>
            </div>
        </div>
    )
}