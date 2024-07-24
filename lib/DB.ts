import { PrismaClient } from "@prisma/client";

declare global {
    var prisma: PrismaClient | undefined
}

export const DB_PRISMA = globalThis.prisma ?? new PrismaClient()

// Esto es para evitar el crear un nuevo cliente de prisma cada vez que se reinicia la app, si estamos en desarrollo guarda la instancia
// de prisma en un globalThis
if (process.env.NODE_ENV === 'development') globalThis.prisma = DB_PRISMA