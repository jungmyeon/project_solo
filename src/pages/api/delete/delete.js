import { connectDB } from "@/util/db";
import { ObjectId } from "mongodb";


export default async function handler(req,res){
    console.log(res.body)
    if(req.method === 'DELETE'){
        try{
            console.log('test')
            let{id} = req.body;
            
            let result = await db.collection('group').deleteOne({_id: ObjectId.createFromHexString(id)});
            const db = (await connectDB).db('mydb');
            res.status(200).json({msg:'삭제완료'});
        }catch(error){
            console.log('fail')
            res.status(500).json({msg:'서버기능오류: ' + error})
        }
    }else{
        res.status(405).json({msg:'DELETE 요청만 처리합니다.'})
    }
}