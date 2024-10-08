"use client";
import Link from "next/link";
import styles from "./notice-item.module.css";
import { useEffect, useState } from "react";

export default function NoticeItem({ notices }) {
  const [noticesData, setNoticesData] = useState(notices);

  // const getCurrentDate = () => {
  //   const today = new Date();
  //   const year = today.getFullYear();
  //   let month = today.getMonth() + 1;
  //   let day = today.getDate();
  //   let hours = today.getHours();
  //   let minutes = today.getMinutes();

  //   month = month < 0 ? `0${month}` : month;
  //   day = day < 10 ? `0${day}` : day;
  //   hours = hours < 10 ? `0${hours}` : hours;
  //   minutes = minutes < 10 ? `0${minutes}` : minutes;

  //   return `${year}-${month}-${day} ${hours}:${minutes}`;
  // };

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
                  <button
                    className={styles.noticebtn}
                    onClick={() => {
                      fetch("/api/delete/delete", {
                        method: "DELETE",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ id: item._id }),
                      }).then((res) => {
                        if (res.status == 200) {
                          setNoticesData((prev) =>
                            prev.filter((i) => i._id !== item._id)
                          );
                          return res.json();
                        } else {
                          return res.json();
                        }
                      });
                    }}
                  >
                    삭제
                  </button>
                </div>
              </div>
            );
          })
        : null}
      <div className={styles.noticebtnbox}></div>
    </>
  );
}
