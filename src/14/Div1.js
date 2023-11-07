import { DivAtom3 } from "./DivAtom"
import { useRecoilValue } from "recoil";
import Div2 from "./Div2"


const Div1 = () => {
    const n3 = useRecoilValue(DivAtom3);
    
    return (
        <div className="bg-green-900 p-4 m-2 rounded-lg">
            <p className="text-white">Div1</p>
            <p className="text-white">n3 = {n3}</p>
            <Div2/>
        </div>
    )
}

export default Div1
