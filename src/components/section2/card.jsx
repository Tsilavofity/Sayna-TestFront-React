function Card(props) {
    return (
        <div className="card">
            <div className="imgSection2" style={{ background: props.color }}>
                <img className="logo" src={props.img} alt="" />
            </div>
            <div className="contentCard">
                <h3>{props.title}</h3>
                <p>{props.content}</p>
            </div>
        </div>
    );
}

export default Card;