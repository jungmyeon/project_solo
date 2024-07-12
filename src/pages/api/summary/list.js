import { connectDB } from "@/util/db";
import { ObjectId } from "mongodb";


export default async function handler(req,res){
    const db = (await connectDB).db('mydb');
    let notices = await db.collection('group').find({
        parent:ObjectId.createFromHexString(req.query.id)
    }).toArray();
    res.state(200).json(notices)
}