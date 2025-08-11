'use client'
import { CartProvider } from "@/context/CartContext"
import { SessionProvider } from "next-auth/react"

export const AuthProvider = ({ children, session }) => {
    return <SessionProvider session={session}><CartProvider>{children}</CartProvider></SessionProvider>
}