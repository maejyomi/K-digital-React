
const ButtonBlue = (props) => {
    return (
        <button onClick={props.handleClick}className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded border-none">
            {props.caption}
        </button>
    )
}

export default ButtonBlue
