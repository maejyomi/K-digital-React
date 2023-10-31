import { Link } from "react-router-dom"
import { HiSun } from "react-icons/hi";
import { AiOutlineHome } from "react-icons/ai";
const FcstNav = () => {
    return (
        <nav className="flex justify-between px-8 items-center my-3">
            <ul>
                <li className="flex items-center">
                    <HiSun className="animate-spin-slow text-3xl  text-orange-500 mr-1" />
                    <strong className="text-2xl">기상청 예보</strong>
                </li>
            </ul>
            <ul>
                <li className="flex items-center">
                    <Link to='/'>
                        <AiOutlineHome className="text-2xl hover:text-blue-500 hover:scale-125 transition-all items-center" />
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default FcstNav;
