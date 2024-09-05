'use server'

import prisma from "@/db/db"

export async function createUser(formData:FormData) {
    try {
        await prisma.user.create({
            data: {
                email: 'jahid@gmail.com',
                name: 'Jahid'
            }
        })
    } catch (error) {
        
    }
}