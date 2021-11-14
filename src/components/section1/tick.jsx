function Tick(props){
    return(
        <div class="card2Section4Item">
            <img src="https://firebasestorage.googleapis.com/v0/b/sayna-test.appspot.com/o/section1%2Ftick.png?alt=media&token=3b8a327c-73c9-41af-a780-e7b32d8093f1" alt="" class = "tick" />
            <div>
                <h5>{props.title}</h5>
                <p>{props.content}</p>
            </div>
        </div>
    );
}

export default Tick;