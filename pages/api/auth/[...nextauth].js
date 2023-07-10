import { verifyPassword } from "lib/auth";
import { connectToDatabase } from "pages/api/db";
import NextAuth from "next-auth";
import Provider from "next-auth/providers";

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    Provider.Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const client = await connectToDatabase();
        const db = await client.db();
        const userCollection = await db.collection("users");

        const user = await userCollection.findOne({
          email: credentials.email,
        });

        if (!user) {
          client.close();
          throw new Error("No user found!");
          return user;
        }
        console.log(user);
        console.log(credentials.password, user.password);

        const isValid = await verifyPassword(
          credentials.password,
          user.password
        );

        if (!isValid) {
          client.close();
          throw new Error("Could not log you in, invalid password!");
          return null;
        }

        client.close();
        return { email: user.email };
      },
    }),
  ],
});
