import arrow from "./assets/img/arrow.svg"

function Card7(props) {
    return(
        <div className="card7">
            <button className="buttonCard"><span>{props.button}</span><img style={{ transform: props.transform }} className="arrow" src={arrow} alt="" /></button>
            <p className="extend" style={{ display: props.display }}>{props.content}</p>
        </div>
    );
}

export default Card7;