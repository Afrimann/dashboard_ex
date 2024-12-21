import { Product, UserImage } from "@/types";


const userImages: UserImage[] = [
    {
        id: 1,
        image: '/user.png',
        name: 'Ahmad'
    },
    {
        id: 2,
        image: '/user2.png',
        name: 'Vicky'
    },
    {
        id: 3,
        image: '/user3.png',
        name: 'Jayla'
    },
    {
        id: 4,
        image: '/user4.png',
        name: 'Amos'
    },
    {
        id: 5,
        image: '/user5.png',
        name: 'Jane'
    },
    {
        id: 6,
        image: '/user6.png',
        name: 'Victor'
    }
];

export default userImages;

export const TopProducts:Product[] = [
    {
        id: 1,
        icon: '/icon2.png',
        name: 'Product A',
        desc: 'UI Kit',
        price: 3000
    },
    {
        id: 2,
        icon: '/icon.png',
        name: 'Product B',
        desc: 'UI Kit',
        price: 3040
    },
    {
        id: 3,
        icon: '/icon3.png',
        name: 'Product C',
        desc: 'UI Kit',
        price: 7000
    },
    {
        id: 4,
        icon: '/icon4.png',
        name: 'Product D',
        desc: 'UI Kit',
        price: 2000
    },
    
]