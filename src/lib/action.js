'use server'

import { connectDB } from "@/util/db";
import { redirect } from "next/navigation";



export default async function wirteAction(formData){
    const data = {
        name: formData.get('name'),
        title: formData.get('title'),
        summary: formData.get('summary')
    }

    await saveData(data);
    redirect('/detail')
}

async function saveData(data){
    const db = (await connectDB).db('mydb');
    let result = await db.collection('group').insertOne(data);    
}