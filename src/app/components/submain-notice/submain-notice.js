'use client';

import styles from "./submain-notice.module.css"
import Link from "next/link";
import { useState } from "react"

export default function SubmainNotice({notices}){
    const [noticesData, setNoticesData] = useState(notices);

    return (
        <>
          {noticesData && noticesData.length > 0
            ? noticesData.map((item, index) => {
                const createdAt = new Date(item.createdAt); // Assuming createdAt is a valid date string or timestamp
                console.log(item.createdAt);
                const formattedDate = `${createdAt.getFullYear()}-${(
                  "0" +
                  (createdAt.getMonth() + 1)
                ).slice(-2)}-${("0" + createdAt.getDate()).slice(-2)} ${(
                  "0" + createdAt.getHours()
                ).slice(-2)}:${("0" + createdAt.getMinutes()).slice(-2)}`;
                return (
                  <div className={styles.noticeitem} key={index}>
                    <Link href={`/noticedetail/` + item._id}>
                      <p>{item.title}</p>
                    </Link>
                    <div>
                      <span>{formattedDate}</span>
                    </div>
                  </div>
                );
              })
            : null}
        </>
      );
}