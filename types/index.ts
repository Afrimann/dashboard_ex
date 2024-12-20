import { MouseEventHandler } from "react"

export type Button = {
    styles: string
    text: string
    event?: MouseEventHandler<HTMLButtonElement> 
}

export type User = {
    name?: string | null | undefined
    email?: string | null | undefined 
    image?: string | null | undefined
}
export type UserImage = {
    id: number
    image: string
    name: string
}