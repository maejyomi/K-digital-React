import { Link } from "react-router-dom"
import { HiSun } from "react-icons/hi";
import { AiOutlineHome } from "react-icons/ai";


const FcstNav = () => {
    return (
        <nav className="px-8 items-center mb-6">
            <ul>
                <li className="flex justify-between items-center">
                    <HiSun className="text-3xl  text-orange-500 mr-1" />
                    <strong className="text-2xl">기상청 예보</strong>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to='/'>
                        <AiOutlineHome className="text-2xl hover:text-sky-500 hover:scale-125 transition-all" />
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default FcstNav
