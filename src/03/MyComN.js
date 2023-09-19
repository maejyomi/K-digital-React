import style from './MyCom.module.css';

const MyComN = (props) => {

    return (
        <>
            <div className={style.numDiv}>{props.num}</div>
        </>
        
    );
}

export default MyComN;