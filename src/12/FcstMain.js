import { useState, useEffect, useRef } from 'react';
import TailH1 from '../comm/TailH1'
import TailSelect from '../comm/TailSelect';
import ButtonBlue from '../comm/ButtonBlue';
import getxy from './getxy.json';
import { Link } from 'react-router-dom';

const FcstMain = () => {
    // 상태변수
    const dtRef = useRef();
    const [dt, setDt] = useState();
    const [area, setArea] = useState();
    const [x, setX] = useState();
    const [y, setY] = useState();

    // 이벤트 처리
    const handleDtChange = (e) => {
        console.log(e.target.value); // useRef 사용하지않고 값 가져오기
        setDt(e.target.value.replaceAll("-", ""));
    };

    const handleSelChange = (e) => {
        let temp = e.target.value.split("-");
        setX(temp[0]);
        setY(temp[1]);
        setArea(temp[2]);
    };

    const handleBtClick = (e) => {
        e.preventDefault();
        alert("항목을 선택해주세요");
    }

    // select option

    const opItems = getxy.map((item) => [item['격자 X'] + "-" + item['격자 Y'] + "-" + item["1단계"], item['1단계']])

    useEffect(() => {
        // 오늘 날짜를 input=date의 초기값으로 설정
        const today = new Date().toISOString().slice(0, 10);
        console.log(today);
        dtRef.current.value = today;
        setDt(today.replaceAll("-", ""));

    }, [])

    useEffect(() => {
        if (!dt || !area) return;

        console.log(dt, x, y, area);
    }, [dt, x, y, area])

    return (
        <section className='p-10 shadow-lg'>
            <form>
                <TailH1 title='기상청 예보 정보입력' />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-5 my-10">
                    <div>
                        <input ref={dtRef} type='date' id='dt' name='dt' onChange={handleDtChange} />
                    </div>
                    <div className='mb-4'>
                        <TailSelect id={'sel'} opItem={opItems} handleChange={handleSelChange} />
                    </div>
                    <div>
                        {x ?
                            <Link to={`/fetch/${dt}/${area}/${x}/${y}/1`}>
                                <ButtonBlue caption={'초단기예보'} handleClick={() => { }} />
                            </Link>
                            : <ButtonBlue caption={'초단기예보'} handleClick={handleBtClick} />
                        }
                    </div>
                    <div>
                        {x ?
                            <Link to={`/fetch/${dt}/${area}/${x}/${y}/2`}>
                                <ButtonBlue caption={'단기예보'} handleClick={() => { }} />
                            </Link>
                            : <ButtonBlue caption={'단기예보'} handleClick={handleBtClick} />
                        }
                    </div>
                </div>
            </form>
        </section>
    )
}

export default FcstMain
