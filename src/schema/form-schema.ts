import z from "zod";

export const formSchema=z.object({
    firstName:z.string().min(3).max(25),
    lastName:z.string().min(2).max(25)

})