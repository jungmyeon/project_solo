'use server'

import { connectDB } from "@/util/db";
import { redirect } from "next/navigation";



export default async function wirteHandler(req,res){
    if(req.method == 'POST'){
        let {name, title,summary} = req.body;
        if(name && title && summary){
            try{
                const db = (await connectDB).db('mydb');
                let result = await db.collection('group').insertOne({name, title, summary});
            }catch(error){
                return req.status(500).json({error: '서버기능오류'})
            }
        }else{
            return req.status(500).json({error: '서버기능오류'})
        }
    }else{
        return res.status(405).json({error: 'Method Not Allowed'})
    }

    // const data = {
    //     name: formData.get('name'),
    //     title: formData.get('title'),
    //     summary: formData.get('summary')
    // }

    // await saveData(data);
    return res.redirect(302,'/detail')
}
