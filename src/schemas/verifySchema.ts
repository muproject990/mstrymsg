import { z } from "zod";


export const verifySchema = z.object({
    code:z.string().length(4,"Varification must be 6 digits"),
})