import Card1 from "./card1";
import "./assets/styles/style.css"
import after_blue from "./assets/img/after-blue.png"
import after_pink from "./assets/img/after-pink.png"

function ThirdSection() {
    return (
        <div className="container3">
            <h1>Simplified Claims</h1>
            <p>Easy as One, Two, Three</p>
            <div className="section3-3">
                <Card1
                    color="#adf2fe"
                    color1="#96e0ed"
                    number="1"
                    title="Report Claim"
                    content="Lorem ipsum dolor sit amet, consectetur adispiscing elit. Proin quis nunc vitae velit rutrum supscipit non et"
                />
                <img src={after_blue} alt="" class = "after" />
                <Card1
                    color="#fbcfff"
                    color1="#e8b2ec"
                    number="2"
                    title="Claim Processing"
                    content="Lorem ipsum dolor sit amet, consectetur adispiscing elit. Proin quis nunc vitae velit rutrum supscipit non et"
                />
                <img src={after_pink} alt="" class = "after"/>
                <Card1
                    color="#d9ffd1"
                    color1="#b8e6ae"
                    number="3"
                    title="Final Settlement"
                    content="Lorem ipsum dolor sit amet, consectetur adispiscing elit. Proin quis nunc vitae velit rutrum supscipit non et"
                />
            </div>
        </div>
    );
}

export default ThirdSection;