import { AiFillHome } from "react-icons/ai";
import { MdOndemandVideo } from "react-icons/md";
import { FaBookOpen } from "react-icons/fa"

export const menuItems = [
    {
        name: 'Home',
        url: '/YourAnimeList/',
        icons: AiFillHome,
    },
    {
        name: 'Anime',
        icons: MdOndemandVideo,
        index: 1,
        submenu: [
            {
                name: 'Top Anime',
                url: '/YourAnimeList/anime/top',
            },
            {
                name: 'Seasonal Anime',
                url: '/YourAnimeList/anime/seasonal',
            },
            {
                name: 'Upcoming Anime',
                url: '/YourAnimeList/',
            },
            {
                name: 'Anime Search',
                url: '/YourAnimeList/',
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
                url: '/YourAnimeList/',
            },
            {
                name: 'Seasonal Manga',
                url: '/YourAnimeList/',
            },
            {
                name: 'Manga Search',
                url: '/YourAnimeList/',
            },
        ]
    },
];