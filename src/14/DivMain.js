import { useRecoilValue } from "recoil";
import Div1 from "./Div1"
import { DivAtom, DivAtom2 } from "./DivAtom";


const DivMain = () => {
    const n = useRecoilValue(DivAtom); // 값 가져오기
    const n2 = useRecoilValue(DivAtom2);

    return (
        <main className="w-3/4 mt-10 m-auto bg-green-950 p-4 rounded-lg">
            <p className="text-white">DivMain</p>
            <p className="text-white">n = {n}</p>
            <p className="text-white">n2 = {n2}</p>

            <Div1 />

        </main>
    )
}

export default DivMain
