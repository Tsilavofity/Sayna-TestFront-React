function Card1(props) {
    return (
        <div className="card3">
            <div className="imgSection3" style={{ background: props.color }}>
                <h1 style={{ color: props.color1 }}>{props.number}</h1>
            </div>
            <div className="contentCard3">
                <h3>{props.title}</h3>
                <p>{props.content}</p>
            </div>
        </div>
    );
}

export default Card1;