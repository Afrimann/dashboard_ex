import type { User } from "@/types";
import Image from "next/image"

interface Props{
    user?: User | undefined
}


export default function ProfilePicture({user}:Props) {
    return (
        <div>
            {}
        </div>
    )
}

