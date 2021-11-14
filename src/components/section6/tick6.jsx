import check from "./assets/img/tick.png"

function Tick6(props){
    return(
        <div className="tick6">
            <img src={check} alt="" className="check" />
            <p>{props.content}</p>
        </div>
    );
}

export default Tick6;