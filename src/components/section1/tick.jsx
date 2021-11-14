import tick from "./assets/img/tick.png"

function Tick(props){
    return(
        <div class="card2Section4Item">
            <img src={tick} alt="" class = "tick" />
            <div>
                <h5>{props.title}</h5>
                <p>{props.content}</p>
            </div>
        </div>
    );
}

export default Tick;