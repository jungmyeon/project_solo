import { connectDB } from "@/util/db";
import { ObjectId } from "mongodb";

export default async function Noticedetail({ params }) {
  const db = (await connectDB).db("mydb");
  let notices = await db
    .collection("group")
    .findOne({ _id: ObjectId.createFromHexString(params.slug) });

  return (
    <div>
      <h2>{notices.title}</h2>
      <p>{notices.summary}</p>
    </div>
  );
}
