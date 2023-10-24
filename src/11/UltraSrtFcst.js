import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getcode from './getcode.json';

const UltraSrtFcst = () => {
    let temp = getcode.filter((item) => item.예보구분 == '초단기예보');
    console.log(temp);
    const options = temp.map((item)=>{
        console.log(item.항목명);
        return <option>{item.항목명}</option>
    })

    // 파라미터로 전송되는 자료 추출
    const dt = useParams().dt;
    const area = useParams().area;
    const x = useParams().x;
    const y = useParams().y;

    const [items, setItems] = useState();

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
        console.log(items);
        /*
        items.map((data)=>{
            console.log(data.category);
        })
        */
    }, [items])

    return (
        <div className="shadow-xl p-8 mt-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <h1 className="text-l font-bold col-span-1 md:col-span-2 mb-4">
                        초단기예보 : {area} ({dt.substring(0, 4)}-{dt.substring(4, 6)}-{dt.substring(6, 8)})
                    </h1>
                </div>
                <div>
                    <select id="sel" name="sel">
                        <option value=''>--- 항목선택 ---</option>
                        {options}
                    </select>
                </div>
            </div>
        </div>
    )
}
export default UltraSrtFcst
