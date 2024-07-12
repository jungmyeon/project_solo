import { connectDB } from "@/util/db";
import bcrypt from 'bcrypt'


export default async function handler(req,res){
    try{
        if(req.method == "POST"){
            let hash = await bcrypt.hash(req.body.password,10);
            req.body.password = hash;

            let db = (await connectDB).db('mydb');
            await db.collection('user').insertOne(req.body);
            
            return res.redirect(302, '/api/auth/signin')
            
        }else{
            res.status(400).json({error:'method onlt POST'})
            
        }
    }catch(error){
        res.status(500).json({error:'signup failed: '+ error})
    }
}

