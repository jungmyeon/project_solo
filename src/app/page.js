import Image from "next/image";
import styles from "./page.module.css";
import { connectDB } from "@/util/db";
import Login from "./components/login/login";
import Slide from "./components/slide/slide";
import SubLogin from "./components/sublogin/sublogin";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import GameStart from "./components/gamestart/gamestart";
import Detail from "./detail/page";
import Board from "./borad/page";
import Submain from "./components/submain/submain";

export default async function Home() {
  let session = await getServerSession(authOptions);

  return (
    <>
      <div className={styles.info}>
        <div className={styles.slide}>
          {session ? <GameStart /> : null}
          <Slide />
          <SubLogin login={session} />
        </div>
      </div>
      <div className={styles.submain}>
        <Submain />
      </div>
    </>
  );
}
