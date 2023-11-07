import { useRecoilValue } from "recoil"
import Div3 from "./Div3"
import { DivAtom4 } from "./DivAtom"

const Div2 = () => {
    const n4 = useRecoilValue(DivAtom4);
    return (
        <div className="bg-green-600 p-4 m-2 rounded-lg">
            <p className="text-white">Div2</p>
            <p className="text-white">n4 = {n4}</p>
            <Div3/>
        </div>
    )
}

export default Div2
