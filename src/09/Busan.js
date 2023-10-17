import pusandata from "./pusandata.json";
import ButtonBlue from "../comm/ButtonBlue";
import { useState, useRef, useEffect } from "react";
import GalleryCard from "../comm/GalleryCard";

const Busan = () => {
    const sel = useRef();
    const [data, setData] = useState();
    const [item, setItem] = useState();
    const [tag, setTag] =useState();

    const code = pusandata.map((i) => {
        let content = i.콘텐츠명.slice(0, i.콘텐츠명.lastIndexOf('('));
        return [i.콘텐츠ID, content]
    })
    // console.log(code);

    const addOption = code.map((i) => {
        return <option key={i[0]} value={i[0]}>{i[1]}</option>
    });

    const handleOk = (e) => {
        e.preventDefault();
        getFetch(data);
    }

    const handleCancel = (e, msg) => {
        e.preventDefault();
        console.log(msg);
        setItem("");
        sel.current.value = '';
        sel.current.focus();
    }

    const handleChange = () =>{
        setData(sel.current.value)
    }

    const getFetch = (data) => {
        let url = "https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?serviceKey=TXiX77HLlCsqLjm0KKb3WvOUucoIxj55VKolbgCr51UgnxyfhLwJgQkvGnmB6XWUp14OZc42Lejma%2FHo26mVzw%3D%3D&pageNo=1&numOfRows=10&resultType=json&UC_SEQ=" + data;
        console.log(url);
        fetch(url)
            .then(resp => resp.json())
            .then(data => setItem(data.getFestivalKr.item[0]))
            .catch(err => console.log(err));

    }

    useEffect(()=>{
        sel.current.focus();
    },[])

    useEffect(()=>{
        console.log("data: ",data)
        setItem("");
       
    },[data])

    useEffect(()=>{
        if (!item) return;
        console.log(item);
        setTag(()=><GalleryCard
            key={item.UC_SEQ}
            imgsrc={item.MAIN_IMG_NORMAL}
            title={item.TITLE}
            content={item.ITEMCNTNTS.substr(0,100)+"..."}
            //content={item.ITEMCNTNTS}
            sptag={[item.GUGUN_NM, item.USAGE_AMOUNT]}
        />)
        
    },[item])

    return (
        <main className="container">
            <article>
                <header>
                    <h1 className="text-2xl font-bold">부산축제정보</h1>
                </header>
                <form>
                    <div className="grid grid-cols-4 gap-4">
                        <div className="col-span-2">
                            <select id="sel" ref={sel} name="sel" onChange={handleChange}>
                                <option value=''>-- 축제명을 선택하세요 --</option>
                                {addOption}
                            </select>
                        </div>
                        <ButtonBlue caption="검색" handleClick={(e)=> handleOk(e)} />
                        <ButtonBlue caption="취소" handleClick={(e)=> handleCancel(e, 'cancel')}/>
                        
                    </div>
                </form>
            </article>
            <div className="flex justify-center">
                {item && tag}
            </div>
            
        </main>
    )
}

export default Busan
