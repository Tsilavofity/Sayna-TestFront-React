import "./assets/styles/style.css"
import Card7 from "./card7";

function SeventhSection() {
    return (
        <div className="section7">
                <img src="https://firebasestorage.googleapis.com/v0/b/sayna-test.appspot.com/o/section7%2Ffamily-illustration-1.png?alt=media&token=ffc24740-af1f-4c0e-af0e-43d908620078" alt="" className="bgSection7" />
            <div className="container7">
                <div className="table">
                    <Card7
                    button = "What are the documents required for claiming?"
                    display = "none" 
                    transform = "rotate(180deg)"
                    />
                    <Card7
                    button = "which are the network hospitals in your vicinity?"
                    display = "block"  
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
                    <img src="https://firebasestorage.googleapis.com/v0/b/sayna-test.appspot.com/o/section7%2Fshield-1.png?alt=media&token=4f89f561-5f89-4e7a-a6ca-b29360445619" alt="" className="logo7" />
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