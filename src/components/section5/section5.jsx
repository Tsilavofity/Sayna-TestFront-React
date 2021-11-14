import shield_2 from "./assets/img/shield-2.png"
import "./assets/styles/style.css"

function FifthSection(){
    return (
        <div className="container5">
            <div className="section2-5">
                <img src={shield_2} alt="" className="logo5" />
                <div>
                    <h1>100% Satisfaction Guarantee</h1>
                    <p>We offer no questions asked refund policy for 14 days from the policy date</p>
                </div>
                <button>Get your free Quote</button>
            </div>
        </div>    
    );
}

export default FifthSection;