import Link from "next/link";
import styles from "./submain.module.css";
import { connectDB } from "@/util/db";
import NoticeItem from "../notice/notice-item";
import SubmainNotice from "../submain-notice/submain-notice";
import Count from "../count/count";


export default async function Submain() {
  const db = (await connectDB).db("mydb");
  let notices = await db.collection("group").find().toArray();

  notices = notices.map((item, index) => ({
    ...item,
    _id: item._id.toString(),
  }));

  return (
    <div className={styles.submain}>
      <div className={styles.detail}>
        <div className={styles.detailhead}>
          <Link href="/detail">
            <h2>공지사항</h2>
          </Link>
          <Link href="/detail">
            <span>더보기</span>
          </Link>
        </div>
        <SubmainNotice notices={notices} />
      </div>
      <div className={styles.recommand}>
        <Count/>
      </div>
    </div>
  );
}
