import ButtonBlue from '../comm/ButtonBlue';

const Div3 = ({num, setNum}) => {
    console.log(num);

    const handleUp = () =>{
        setNum(num+1);
    }

    const handleDown = () => {
        setNum(num-1)
    }
    return (
        <div className='bg-green-200 p-4 m-2 rounded-lg'>
            Div3
            <div className='grid grid-cols-2'>

                <ButtonBlue caption='증가' handleClick={handleUp}/>
                <ButtonBlue caption='감소' handleClick={handleDown}/>
            </div>
        </div>
    )
}

export default Div3
