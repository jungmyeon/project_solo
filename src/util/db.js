import {MongoClient} from "mongodb";
const url = "mongodb+srv://jung:wjdaus@jung.7uoi0pa.mongodb.net/?retryWrites=true&w=majority&appName=jung";
const options = {};
let connectDB;

if(process.env.NODE_ENV === "development"){
    if(!global._mogo){
        global._mongo = new MongoClient(url, options).connect();
    }
    connectDB = global._mongo;
}else{
    connectDB = new MongoClient(url, options).connect();
}

export {connectDB};