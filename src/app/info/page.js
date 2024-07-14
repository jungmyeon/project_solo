import Image from "next/image";
import styles from "./page.module.css";

import cat from "@/assets/cat.jpg";
import Login from "../components/login/login";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export default async function Infopage({ login }) {
  let session = await getServerSession(authOptions);
  return (
    <div className={styles.info}>
      <Image className={styles.img} src={cat} />
      <span>{session?.user.name}</span>
    </div>
  );
}
