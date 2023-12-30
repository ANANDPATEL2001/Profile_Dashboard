import { IoGridOutline, IoHomeOutline } from "react-icons/io5";
import { BsSpeedometer2 } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineBarChart } from "react-icons/ai";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

const arr = [
    {
        to: '/',
        name: 'Home',
        Icon: IoHomeOutline
    },
    {
        to: '/profile',
        name: 'Profile',
        Icon: BiUserCircle
    },
    {
        to: '/dashboard',
        name: 'Dashboard',
        Icon: BsSpeedometer2
    },
    {
        to: '/billing',
        name: 'Billing',
        Icon: RiMoneyDollarCircleLine
    },
    {
        to: '/statistics',
        name: 'Statistics',
        Icon: AiOutlineBarChart
    }
];

export default arr;