import Div3 from "./Div3"

const Div2 = ({ num, setNum }) => {
    return (
        <div className="bg-green-600 p-4 m-2 rounded-lg">
            <p className="text-white">Div2</p>
            <Div3 num={num} setNum={setNum} />
        </div>
    )
}

export default Div2
