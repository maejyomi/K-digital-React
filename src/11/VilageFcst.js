import { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import getcode from './getcode.json';
import FcstTable from "./FcstTable";

const VilageFcst = () => {

    const dt = useParams().dt;
    const area = useParams().area;
    const x = useParams().x;
    const y = useParams().y;

    const sel = useRef();

    const [item, setItem] = useState();
    const [tags, setTags] = useState([]);

    let temp = getcode.filter((item)=> item.예보구분 == '단기예보');
    
    const options = temp.map((item)=>{
        return <option value={item.항목값} key={item.항목값}>{item.항목명}({item.항목값})</option>
    })

    const handleSelect = () =>{
        if(sel.current.value == '') {
            setTags([]);
        }

        let data = item.filter((item) => item.category == sel.current.value);
        setTags(data);
    }

    useEffect(()=>{
        let url = "https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=TXiX77HLlCsqLjm0KKb3WvOUucoIxj55VKolbgCr51UgnxyfhLwJgQkvGnmB6XWUp14OZc42Lejma%2FHo26mVzw%3D%3D&pageNo=1&numOfRows=60&dataType=json&";
        url = url + `base_date=${dt}&base_time=0500&`;
        url = url + `nx=${x}&ny=${y}`;
        console.log(url);

        fetch(url)
        .then(resp => resp.json())
        .then(data => setItem(data.response.body.items.item))
        .catch(err => console.log(err))
    }, [])

    useEffect(()=>{
        if(!item) return;
        
    }, [item])

    return (
        <div className="shadow-xl p-8 mt-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <h1 className="text-l font-bold col-span-1 md:col-span-2 mb-4">
                        {area} 단기예보 ({dt.substring(0, 4)}-{dt.substring(4, 6)}-{dt.substring(6, 8)})
                    </h1>
                </div>
                <div>
                    <select id="sel" name="sel" ref={sel} onChange={handleSelect}>
                        <option value=''>항목선택</option>
                        {options}
                    </select>
                </div>
                <div className="col-span-2">
                    {
                        (tags.length != 0) && <FcstTable data={tags} title='단기예보'/>
                    }
                </div>
            </div>
        </div>
    )
}

export default VilageFcst
