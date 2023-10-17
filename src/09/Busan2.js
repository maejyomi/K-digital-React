import pusandata from "./pusandata.json";
import GalleryCard from "../comm/GalleryCard";

const Busan = () => {
    // json 파일에서 내용 읽어서 출력하기
    const tag = pusandata.map((i)=>{
        return (<GalleryCard 
            key={i.콘텐츠ID}
            imgsrc={i.이미지URL}
            title={i.제목}
            content={i.상세내용.substring(0,100)+"..."}
            sptag={[i.구군]}
        />);
    })

    return (
        <main className="container">
            <article>
                <header>
                    <h1 className="text-2xl font-bold">부산축제정보</h1>
                </header>
            </article>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {tag}
            </div>
            
        </main>
    )
}

export default Busan
