import NextAuth from "next-auth/next";
import Email from "next-auth/providers/email";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google"

const handler = NextAuth({
  providers: [
    CredentialsProvider({

      name: 'Login with Email',

      credentials: {
        username: { label: "Username", type: "text", placeholder: "Enter email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        const username = credentials?.username
        const password = credentials?.password

        const user = {
          name: "niraj",
          username: "niraj@gmail.com"
        }

        if (user) {
          return user
        }

        return null
      }
    }),

    GoogleProvider({
      clientId: "sfdsaf",
      clientSecret: 'sjfksd'
    })
  ],
  secret:process.env.NEXTAUTH_SECRET
  
});

export { handler as GET, handler as POST }