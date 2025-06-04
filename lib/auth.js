<<<<<<< HEAD
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";



export const { auth, handlers } = NextAuth({
  providers: [
    Credentials({
      name: "credentials",
      credentials: {

      },
      async authorize(credentials) {
        const { username, password } = credentials
        await connectMongoDB()
        const user = await User.findOne({ username })
      
        if (!user) return null
      
        const passwordMatch = await bcrypt.compare(password, user.password)
        if (!passwordMatch) return null
      
        return { id: user._id, username: user.username, email: user.email }
      }
    }),
  ],
  session: { strategy: "jwt" },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.username = user.username // Add username to token
        token.email = user.email
      }
      return token
    },
    async session({ session, token }) {
      session.user.username = token.username // Add username to session
      session.user.email = token.email
      return session
    }
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: { signIn: "/login" },
});
=======
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";



export const { auth, handlers } = NextAuth({
  providers: [
    Credentials({
      name: "credentials",
      credentials: {

      },
      async authorize(credentials) {
        const { username, password } = credentials
        await connectMongoDB()
        const user = await User.findOne({ username })
      
        if (!user) return null
      
        const passwordMatch = await bcrypt.compare(password, user.password)
        if (!passwordMatch) return null
      
        return { id: user._id, username: user.username, email: user.email }
      }
    }),
  ],
  session: { strategy: "jwt" },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.username = user.username // Add username to token
        token.email = user.email
      }
      return token
    },
    async session({ session, token }) {
      session.user.username = token.username // Add username to session
      session.user.email = token.email
      return session
    }
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: { signIn: "/login" },
});
>>>>>>> 72ab78614fbbc9379365085ebf0c9f004550bbc9
