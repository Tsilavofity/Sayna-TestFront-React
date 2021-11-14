import bg from "./assets/img/family-illustration-1.png"
import "./assets/styles/style.css"
import shield_1 from "./assets/img/shield-1.png"
import Card7 from "./card7";

function SeventhSection() {
    return (
        <div className="section7">
                <img src={bg} alt="" className="bgSection7" />
            <div className="container7">
                <div className="table">
                    <Card7
                    button = "What are the documents required for claiming?"
                    display = "block" 
                    content = "A pre-authorization form is required in case of cashless which are to be submitted to the TPA. Other documents might also be required and should have knowledge of required documents."
                    transform = "rotate(180deg)"
                    />
                    <Card7
                    button = "which are the network hospitals in your vicinity?"
                    display = "none"  
                    />
                    <Card7
                    button = "Will I get covered for my pre-existing illness?"
                    display = "none"  
                    />
                    <Card7
                    button = "Is maternity covered in health insurance policies?"
                    display = "none"  
                    />

                </div>
                <div className="content7">
                    <img src={shield_1} alt="" className="logo7" />
                    <div>
                        <h1>Insurance made easy</h1>
                        <p>At fincorp, we are commited to provide top-notch services to our customers.</p>
                    </div>
                    <button className = "buttonGet">Get your free Quote</button>
                </div>
            </div>
        </div>
    );
}

export default SeventhSection;