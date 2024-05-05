import { z } from "zod";

export const userNameValidation = z.
    string()
    .min(2, "User name must be atleast 2 characater")
    .max(20,'No more than 20')
    .regex(/^[a-zA-Z0-9_]+$/,"Username must not contain special character")
    

export const signUpSchema = z.object({
    username: userNameValidation,
    email: z.string().email({ message: "Invalid Email" }),
    password:z.string().min(6,{message:"Password must be atleast 6 characters"})
    })