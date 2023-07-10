import { NextResponse } from "next/server";
import { connectToDatabase } from "../lib/db";
import { hashPassword } from "../lib/auth";

export default async function handler(req, res) {
  const data = await req.body;
  console.log("data: ", data);

  const { email, password } = data;
  console.log(await hashPassword(password));

  if (
    !email ||
    !email.includes("@") ||
    !password ||
    !password.trim() ||
    password.trim().length < 7
  ) {
    return NextResponse.json(
      { message: "Invalid email or password" },
      { status: 402 }
    );
  }

  const client = await connectToDatabase();
  const db = client.db();

  const existingUser = await db.collection("users").findOne({ email });

  if (existingUser) {
    client.close();
    return res.status(422).json({ message: "User exists already!" });
  }

  await db
    .collection("users")
    .insertOne({ email, password: await hashPassword(password) });

  client.close();
  return res.status(201).json({ message: "Created user!" });
}
