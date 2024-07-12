
import NoticeItem from './notice-item'
import styles from './notice.module.css'


export default function Notice({notices}){
    return(
        <div className={styles.notice}>
            <ul>
                {
                    notices.map((item,index)=>{
                        return(
                            <li key={item.title}>
                                <NoticeItem {...item}/>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}