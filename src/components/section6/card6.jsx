import Tick6 from "./tick6"

function Card6(props) {
    return (
        <div className="card6" style={{ height: props.height }}>
            <h3 style={{ color: props.color2 }}>{props.title}</h3>
            <div className="imgSection6" style={{ background: props.color }}>
                <h1 style={{ color: props.color1 }}>{props.number}</h1>
            </div>
            <p className="button6" style={{ display: props.display }}>{props.contentButton}</p>
            <Tick6 content="Rapidously strategize value" />
            <Tick6 content="Progressively visualize leadership" />
            <Tick6 content="Equity invested supply chains" />
            {props.children}

            <button className="buttonPlan" style={{ backgroundColor: props.colorButton }}>Choose Plan</button>

        </div>
    );
}

export default Card6;