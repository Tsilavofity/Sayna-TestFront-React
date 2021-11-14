import Card6 from "./card6";
import "./assets/styles/style.css"
import Tick6 from "./tick6"
import bg from "./assets/img/bg-image4.png"

function SixthSection() {
    return (
        <div className="section6">
            <img src={bg} alt="" className="bg" />
            <div className="container6">
                <h1>Honest Pricing</h1>
                <p>Simple & honest pricing. No hidden fees</p>
                <div className="cards6">
                    <Card6
                        title="BASIC"
                        color="#a3ffdb"
                        color1="#3dd0b3"
                        color2="#00d9a4"
                        number="$9"
                        colorButton="#00daa4"
                        height="400px"
                        display = "none"
                    />
                    <Card6
                        title="PROFESSIONAL"
                        color="#ffab81"
                        color1="#fefefe"
                        color2="#ffab81"
                        number="$19"
                        colorButton="#ffab82"
                        height="500px"
                        contentButton = "SAVE 20%"
                    >
                        <Tick6 content="Proactively leverage" />
                    </ Card6>
                    <Card6
                        title="PREMIUM"
                        color="#d0f2ff"
                        color1="#68b8f2"
                        color2="#69b8f1"
                        number="$49"
                        colorButton="#5363ff"
                        height="400px"
                        display = "none"
                    />
                </div>
            </div>
            <p>*Prices shown per month if paid annually</p>
        </div>
    );
}

export default SixthSection;