import style from './Lotto.module.css'

const LottoNums = ({ns}) => { // 오브젝트로 받기
// const LottoNums = (props) => {
    // console.log("Lotto Nums : ", props.ns)
    console.log("Lotto Nums : ", ns);

    const nsTag = ns.map((item, idx) => 
        {
            console.log(idx);
            let n = Math.floor(item / 10);
            let temp = "";
            if(idx==6) temp = "+";
            return (
                <>
                    {temp}<div key={'ns'+idx} className={style[`lottonum${n+1}`]}>{item}</div>
                </>
            );
        }
        // {
        //     let n = Math.floor(item / 10);
        //     let temp;
        //     // switch-case문
        //     switch(num) {
        //         case 0:
        //             temp = <div key={'ns'+idx} className={style.lottonum1}>{item}</div>;
        //             break;
        //         case 1:
        //             temp = <div key={'ns'+idx} className={style.lottonum2}>{item}</div>
        //             break;
        //         case 2:
        //             temp = <div key={'ns'+idx} className={style.lottonum3}>{item}</div>
        //             break;
        //         case 3:
        //             temp = <div key={'ns'+idx} className={style.lottonum4}>{item}</div>
        //             break;
        //         case 4:
        //             temp = <div key={'ns'+idx} className={style.lottonum5}>{item}</div>
        //             break;
        //     }

        //     // if문 
        //     if (item < 10) temp = <div key={'ns'+idx} className={style.lottonum1}>{item}</div>
        //     else if(item < 20) temp = <div key={'ns'+idx} className={style.lottonum2}>{item}</div>
        //     else if(item < 30) temp = <div key={'ns'+idx} className={style.lottonum3}>{item}</div>
        //     else if(item < 40) temp = <div key={'ns'+idx} className={style.lottonum4}>{item}</div>
        //     else temp = <div key={'ns'+idx} className={style.lottonum5}>{item}</div>

        //     let ncss = style[`lottonum${n+1}`];
        //     let temp = <div key={'ns'+idx} className={ncss}>{item}</div>

        //     return temp;
        // }

    );
    return (
        <div className={style.lottobox}>
            {nsTag}
        </div>
    )
}

export default LottoNums

