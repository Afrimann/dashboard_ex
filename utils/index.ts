import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";

export const session = await getServerSession(options);
