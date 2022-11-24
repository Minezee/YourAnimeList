import { AiFillHome } from "react-icons/ai";
import { MdOndemandVideo } from "react-icons/md";
import { FaBookOpen } from "react-icons/fa"

export const menuItems = [
    {
        name: 'Home',
        url: '/',
        icons: AiFillHome,
    },
    {
        name: 'Anime',
        icons: MdOndemandVideo,
        index: 1,
        submenu: [
            {
                name: 'Top Anime',
                url: '/anime/top',
            },
            {
                name: 'Seasonal Anime',
                url: '/anime/seasonal',
            },
            {
                name: 'Upcoming Anime',
                url: '/anime/upcoming',
            },
            {
                name: 'Anime Search',
                url: '/anime/seasonal',
            },
        ]
    },
    {
        name: 'Manga',
        icons: FaBookOpen,
        index: 2,
        submenu: [
            {
                name: 'Top Manga',
                url: '/manga/top',
            },
            {
                name: 'Seasonal Manga',
                url: '/',
            },
            {
                name: 'Manga Search',
                url: '/',
            },
        ]
    },
];