import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import { connectDB } from "@/util/db";
import bcrypt from 'bcrypt'

export const authOptions = {
    providers:[
        CredentialsProvider({
            name:'credentials',
            credentials:{
                email:{label:'email', type:'text'},
                password:{label:'비밀번호', type:'password'},
            },
            async authorize(credentials){
                let db = (await connectDB).db('mydb');
                let user = await db.collection('user').findOne({email:credentials.email});

                if(!user){
                    console.log('일치하는 아이디가 없습니다.')
                    return null;
                }
                const checkPassword = await bcrypt.compare(credentials.password, user.password)
                if(!checkPassword){
                    console.log('비밀번호가 일치하지 않습니다.')
                    return null;
                }
                return user;
            },
        }),
    ],

    callbacks:{
        jwt: async({token, user})=>{
            if(user){
                token.user = {};
                token.user.name = user.name;
                token.user.email = user.email;
            }
            return token;
        }
    },
    session: async({session, token})=>{
        session.user = token.user;
        return session;
    },
    session:{
        strategy:'jwt',
        MaxAge: 24*60*60
    },
    secret:'anything'
};

export default NextAuth(authOptions);