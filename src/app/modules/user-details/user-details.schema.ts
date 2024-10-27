import { z } from "zod";

const userSchema = z.object({
    name: z.object({
      first: z.string().trim().min(1, { message: "Nome é obrigatório" }),
      last: z.string().trim().min(1, { message: "Sobrenome é obrigatório" }),
    }),
    email: z.string().email({ message: "Email inválido" }),
    phone: z.string().trim().min(11, { message: "Telefone é obrigatório" }),
    dob: z.object({
        date: z.string().min(8, { message: "Data de nascimento é obrigatória" }),
    }),
    location: z.object({
      city: z.string().trim().min(1, { message: "Estado é obrigatório" }),
      country: z.string().trim().min(1, { message: "País é obrigatório" }),
      street: z.object({
        name: z.string().trim().min(1, { message: "Nome da rua é obrigatório" }),
        number: z.coerce.string().trim().regex(/^\d+$/, { message: "Número da rua deve ser um número" }),
      }),
    }),
});

export default userSchema;