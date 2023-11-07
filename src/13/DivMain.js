import { useState,useEffect } from "react"
import Div1 from "./Div1"

const DivMain = () => {
    const [num, setNum] = useState(0);
    const [num2, setNum2] = useState(0)

    useEffect(()=>{
        setNum2(num*2)
    },[num])
   
    return (
        <main className="w-3/4 mt-10 m-auto bg-green-950 p-4 rounded-lg">
            <p className="text-white">DivMain</p>
            <p className="text-white">n = {num}</p>
            <p className="text-white">n2 = {num2}</p>

            <Div1 num={num} setNum={setNum} />

        </main>
    )
}

export default DivMain
