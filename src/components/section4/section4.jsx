import quote from "./assets/img/quote.png"
import composed_layer_2 from "./assets/img/Composed-layer-2.png"
import "./assets/styles/style.css"

function FourthSection(){
    return(
        <div className="container4">
            <div className="section1-4">
                <img src={quote} alt="" />
                <h3>I need to understand what's going on - it's my health and i want to feel secure in it. <br /> With my previous health insurance, I didn't know how any of it worked</h3>
                <p class="blue">Matthew Young</p>
                <p>Legal Consulting, United States</p>
            </div>
            <div className="section2-4">
                <img src={composed_layer_2} alt="" />
            </div>
        </div>
    );
}

export default FourthSection;