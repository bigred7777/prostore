import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/lib/prisma";

export const { handlers, signIn, signout, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [],
});
