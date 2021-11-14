function Card7(props) {
    return(
        <div className="card7">
            <button className="buttonCard"><span>{props.button}</span><img style={{ transform: props.transform }} className="arrow" src="https://firebasestorage.googleapis.com/v0/b/sayna-test.appspot.com/o/section7%2Farrow.svg?alt=media&token=477df643-07e3-4cd3-b045-92b29486f92c" alt="" /></button>
            <p className="extend" style={{ display: props.display }}>A pre-authorization form is required in case of cashless which are to be submitted to the TPA. Other documents might also be required and should have knowledge of required documents.</p>
        </div>
    );
}

export default Card7;