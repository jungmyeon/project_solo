export default function handler(req, res){
    if(req.method == 'POST'){
        return res.status(200).json('POST완료');
    }else if(req.method == 'GET'){
        let detetime = new Date();
        return res.status(200).json(detetime);
    }
}