import type { NextAuthOptions } from "next-auth";
import GithubProvider from 'next-auth/providers/github'
import CredentialProvider from 'next-auth/providers/credentials'

export const options: NextAuthOptions = {
  providers:[
      GithubProvider({
         clientId: process.env.GITHUBPROVIDER_CLIENT_ID as string,
         clientSecret: process.env.GITHUBPROVIDER_CLIENT_SECRET as string
      }),
      CredentialProvider({
        name: "Credentials",
        credentials: {
          username: {
            label: "Username:",
            type: "text",
            placeholder: "your-cool-username"
          },
          password: {
            label: "Password:",
            type: "Password",
            placeholder: "your-awesome-password"
          }
        },
        async authorize(credentials) {
          //  Here we recieve the user data and verify with user data.
          // but for now, let it be hard-coded
          const user = {id: "42", name: "Dave", password: "nextauth"}
          if(credentials?.username === user.name && credentials?.password === user.password){
            return user
          }
          else {
            return null
          }
        }

      })
  ],

}