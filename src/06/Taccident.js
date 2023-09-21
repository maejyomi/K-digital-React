import Hh1 from '../comm/Hh1'
import data from './dataTaccident.json'

const Taccident = () => {    
    let c1 = []

    console.log(data.data)
    c1 = data.data.map((item) => item.사고유형_대분류)
   /* 
   {
        if(c1.indexOf(item["사고유형_대분류"]) < 0){
            c1.push(item["사고유형_대분류"])
        }
    } 
    */
    
    c1 = [...new Set(c1)]; 
    // Set으로 중복제거 -> 배열로 만들기
    // ... -> spread 연산자
    console.log(c1)

    let c1Tag = c1.map((item, idx) => {
        return <li key={`li${idx}`}><button>{item}</button></li>
    });

    return (
        <main className='container'>
            <article>
                <Hh1 title="도로교통공단_사고유형별 교통사고 통계"/>
                <nav>
                    <ul>
                        <li><strong>대분류</strong></li>
                    </ul>
                    <ul>
                        {c1Tag}
                    </ul>
                </nav>
            </article>
            
        </main>
    )
}

export default Taccident
