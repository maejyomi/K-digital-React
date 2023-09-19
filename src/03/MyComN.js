import style from './MyCom.module.css';

const MyComN = (probs) => {

    return (
        <>
            <div className={style.numDiv}>{probs.num}</div>
        </>
        
    );
}

export default MyComN;