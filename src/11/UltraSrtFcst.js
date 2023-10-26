import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import getcode from './getcode.json';
import FcstTable from "./FcstTable";

const UltraSrtFcst = () => {
    let temp = getcode.filter((item) => item.예보구분 == '초단기예보');
    //console.log("temp:", temp);
    const options = temp.map((item) => {
        return <option value={item.항목값} key={item.항목값}>{item.항목명}({item.항목값})</option>
    })

    // 파라미터로 전송되는 자료 추출
    const dt = useParams().dt;
    const area = useParams().area;
    const x = useParams().x;
    const y = useParams().y;

    const [items, setItems] = useState();
    const [tags, setTags] = useState([]);
    // 이벤트 처리
    const sel = useRef();
    const handleSelect = () => {
        if (!items) return;
        if (sel.current.value == '') {
            setTags([]);
        }

        let data = items.filter((item) => item.category == sel.current.value);
        setTags(data);
    }

    useEffect(() => {
        const apikey = "TXiX77HLlCsqLjm0KKb3WvOUucoIxj55VKolbgCr51UgnxyfhLwJgQkvGnmB6XWUp14OZc42Lejma%2FHo26mVzw%3D%3D"
        let url = "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?";
        url = url + `serviceKey=${apikey}`;
        url = url + "&numOfRows=60&pageNo=1";
        url = url + `&base_date=${dt}&base_time=0630&`;
        url = url + `nx=${x}&ny=${y}&dataType=json`;

        console.log(url);

        fetch(url)
            .then(resp => resp.json())
            .then(data => setItems(data.response.body.items.item))
            .catch(err => console.log(err));
    }, []);

    useEffect(() => {
        if (!items) return;
        // console.log("items:", items);

    }, [items])

    useEffect(() => {
        if (!tags) return;

    }, [tags])
    return (
        <div className="shadow-xl p-8 mt-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <h1 className="text-l font-bold col-span-1 md:col-span-2 mb-4">
                        {area} 초단기예보 ({dt.substring(0, 4)}-{dt.substring(4, 6)}-{dt.substring(6, 8)})
                    </h1>
                </div>
                <div>
                    <select id="sel" name="sel" onChange={handleSelect} ref={sel}>
                        <option value=''>항목선택</option>
                        {options}
                    </select>
                </div>
                <div className="col-span-2">
                    {
                        (tags.length != 0) && <FcstTable data={tags} title='초단기예보'/>
                    }
                </div>
            </div>


        </div>
    )
}
export default UltraSrtFcst
