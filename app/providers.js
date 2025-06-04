<<<<<<< HEAD
'use client'
import {SessionProvider} from "next-auth/react"

export const AuthProvider = ({children, session}) => {
    return <SessionProvider session={session}>{children}</SessionProvider>
=======
'use client'
import {SessionProvider} from "next-auth/react"

export const AuthProvider = ({children, session}) => {
    return <SessionProvider session={session}>{children}</SessionProvider>
>>>>>>> 72ab78614fbbc9379365085ebf0c9f004550bbc9
}