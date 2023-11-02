import Div2 from "./Div2"

const Div1 = ({ num, setNum }) => {
    return (
        <div className="bg-green-900 p-4 m-2 rounded-lg">
            <p className="text-white">Div1</p>
            <Div2 num={num} setNum={setNum} />
        </div>
    )
}

export default Div1
