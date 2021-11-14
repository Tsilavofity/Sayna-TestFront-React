import Card8 from "./card8";
import "./assets/styles/style.css"

function EightSection() {
    return (
        <div className="section8">
            <div className="container8">
                <Card8
                    title="ADDRESS"
                >
                    400-401 West Georgia Street <br />Vancouver, Bc, Canada ,V6B 5A1 <br /> +1 (123) 456 7890 <br />sales@insurance.com
                </Card8>
                <Card8
                    title="FOLLOW US"
                >
                    Twitter <br />Facebook <br /> LinkedIn <br />Instagram
                </Card8>
                <Card8
                    title="ABOUT US"
                >
                    Compellingly myocardinate market-driven infrastructures before team driven manufactured products. Monotonectally exploit tactical markets vis-a-vis excellent deliverables.
                </Card8>
            </div>
            <p>Copyright © 2019. Insurance LLC </p>
        </div>
    );
}

export default EightSection;