"use client";
import Link from "next/link";
import styles from "./notice-item.module.css";
import { useEffect, useState } from "react";

export default function NoticeItem({ notices }) {
  const [noticesData, setNoticesData] = useState(notices);
  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();

    if (month < 10) {
      month = "0" + month;
    }
    if (day < 10) {
      day = "0" + day;
    }
    return `${year}-${month}-${day}`;
  };

  return (
    <>
      {noticesData && noticesData.length > 0
        ? noticesData.map((item, index) => {
            return (
              <div className={styles.noticeitem} key={index}>
                <Link href={"/noticedetail/" + item._id}>
                  <p>{item.title}</p>
                </Link>
                <span>{getCurrentDate()}</span>
              </div>
            );
          })
        : null}
    </>
  );
}
