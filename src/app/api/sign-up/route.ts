import UserModel from "@/model/User";

import dbConnect from '@/lib/dbConnect'

import bcrypt from 'bcryptjs'


import { sendVerificationEmail } from "@/helpers/sendVerificationEmail";

export async function POST(request:Request) {
    await dbConnect()
    try {
           const {username,email,password}= await request.json()

            

    } catch (error) {
        console.error('Error registering user',error)
        return Response.json(
            {
                success: false,
                message:"Error Registering User"
            },
            {
                status:500
            }
        )
    }
    
}