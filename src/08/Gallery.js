import { FaInstagram } from "react-icons/fa6";
import ButtonBlue from "../comm/ButtonBlue";
import { useRef, useState, useEffect } from "react";
import GalleryItem from "./GalleryItem";

const Gallery = () => {
    const txt1 = useRef();
    const [keyword, setKeyword] = useState();
    const [item, setItem] = useState();

    const handleOk = (e) => {
        e.preventDefault();
        if(txt1.current.value === "") return; // 공백이면 안 바꿈
        setKeyword(txt1.current.value);
    }

    const handleCancel = (e) => {
        e.preventDefault();
    }

    const getFetch = (keyword)=>{
        let url = "https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=TXiX77HLlCsqLjm0KKb3WvOUucoIxj55VKolbgCr51UgnxyfhLwJgQkvGnmB6XWUp14OZc42Lejma%2FHo26mVzw%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=";
        const enKw = encodeURI(keyword); // 한글 인코딩
        url = url + enKw + "&_type=json";
        console.log("URL :",url);

        fetch(url)
        .then(resp => resp.json())
        .then(data => setItem(data.response.body.items.item))
        .catch(err => console.log(err));

    }

    useEffect(()=>{
        txt1.current.focus();
    },[])

    // 컴포넌트 업데이트
    useEffect(()=>{
        getFetch(keyword);
    }, [keyword])

    useEffect(()=>{
      
    },[item])


    return (
        <main className="container">
            <article>
                <header className="flex justify-between items-center">
                    <div className="text-3xl font-bold">
                        한국관광공사_관광사진_정보
                    </div>
                    <div>
                        <FaInstagram className="text-3xl font-bold" />
                    </div>
                </header>
                <form>
                    <div className="grid">
                        <div>
                            <input ref={txt1} type="text" id="txt1" name="txt1" placeholder="키워드를 입력하세요" />
                        </div>
                        <div className="grid">
                            <ButtonBlue handleClick={handleOk} caption="확인" />
                            <ButtonBlue handleClick={handleCancel} caption="취소" />
                        </div>
                    </div>
                </form>
            </article>
            <section>
                {item && <GalleryItem item={item} />} 
            </section>
        </main>
    )
}

export default Gallery
