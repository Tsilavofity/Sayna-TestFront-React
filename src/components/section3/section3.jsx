import Card1 from "./card1";
import "./assets/styles/style.css"

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
                <img src="https://firebasestorage.googleapis.com/v0/b/sayna-test.appspot.com/o/section3%2Fafter-blue.png?alt=media&token=62b65b77-cd5e-49b9-a545-85ea3e2c59d3" alt="" class = "after" />
                <Card1
                    color="#fbcfff"
                    color1="#e8b2ec"
                    number="2"
                    title="Claim Processing"
                    content="Lorem ipsum dolor sit amet, consectetur adispiscing elit. Proin quis nunc vitae velit rutrum supscipit non et"
                />
                <img src="https://firebasestorage.googleapis.com/v0/b/sayna-test.appspot.com/o/section3%2Fafter-pink.png?alt=media&token=f091b13d-2f46-4b11-b640-fecf67b61918" alt="" class = "after"/>
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