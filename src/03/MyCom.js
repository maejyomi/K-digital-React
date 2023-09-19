import MyComN from "./MyComN";

const MyCom = () => {
    // let n = 10;
    let n = undefined;
    
    // 1. if-else로 값이 없을 때 처리하기
    // let comTag;

    // if (n === undefined){
    //     comTag = <div>값이 없습니다.</div>;
    // } else {
    //     comTag = <MyComN num={n}/> ;
    // }
    

    return (
        <main className="container"> 
            <article>
                <header>MyCom</header>
                {
                    // 변수 처리
                    //  {result}

                    // 삼항연산 처리
                    // {
                    //     n===undefined 
                    //     ? <div>값이 없습니다.</div> 
                    //     :  <MyComN num={n}/> 
                    // }                       
                
                    //falsy 연산
                    n && <MyComN num={n}/> // n이 undefined면 false 처리
                }
            </article>
        </main>
    );
}

export default MyCom;