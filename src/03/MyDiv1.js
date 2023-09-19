import MyDiv11
 from "./MyDiv11";

 //const MyDiv1 = (props) => {
const MyDiv1 = ({n}) => { // probs로 안써도 된다

    return (
        <>
            {/* <div>MyDiv1 n : {props.n}</div> */}
            <MyDiv11 n1={n}/>
        </>
        
    );
}

export default MyDiv1;