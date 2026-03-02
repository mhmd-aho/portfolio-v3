import * as z from 'zod'

export const contactSchema = z.object({
    name: z.string().min(3, 'First name must be at least 3 characters long').trim(),
    email: z.string().email('Invalid email').trim(),
    message: z.string().min(30, 'Message is too short').max(2000, 'Message is too long').trim(),
})

