import Card from "./card";
import "./assets/styles/style.css"

function SecondSection(){
    return(
        <div class="container2">
            <div class="title2">
                <h1>Choose your Insurance</h1>
                <p>Keep Your Life Smile, and Wealthy</p>
            </div>
            <div className="section">
                <Card
                img = "https://firebasestorage.googleapis.com/v0/b/sayna-test.appspot.com/o/section2%2Fhome-insurance-1.png?alt=media&token=e7df7204-ac4c-42f5-9b5b-614ec2ec52bc"
                color = "#aef3ff"
                title = "Home Insurance"
                content = "Insurance can have various effects on society though the way that it changes who bears the cost of losses and damage" 
                />

                <Card
                color = "#facffe"
                img = "https://firebasestorage.googleapis.com/v0/b/sayna-test.appspot.com/o/section2%2Fcar-insurance-1.png?alt=media&token=2d69debe-d751-450d-ae08-cdaf99d56c1d"
                title = "Car Insurance"
                content = "Insurance can have various effects on society though the way that it changes who bears the cost of losses and damage" 
                />

                <Card
                color = "#d8ffd2"
                img = "https://firebasestorage.googleapis.com/v0/b/sayna-test.appspot.com/o/section2%2Flife-insurance-1.png?alt=media&token=502007f9-36bc-4261-8374-9ff6f2a27b31"
                title = "Life Insurance"
                content = "Insurance can have various effects on society though the way that it changes who bears the cost of losses and damage" 
                />

                <Card
                color = "#fef4b1"
                img = "https://firebasestorage.googleapis.com/v0/b/sayna-test.appspot.com/o/section2%2Fbusiness-insurance-1.png?alt=media&token=bcdacc68-0b4c-40f9-a3cf-de70da49cbc6"
                title = "Business Insurance"
                content = "Insurance can have various effects on society though the way that it changes who bears the cost of losses and damage" 
                />

                <Card
                color = "#fed9cf"
                img = "https://firebasestorage.googleapis.com/v0/b/sayna-test.appspot.com/o/section2%2Ftravel-insurance-1.png?alt=media&token=d96f3c43-73e4-4753-8f53-da2216937d38"
                title = "Travel Insurance"
                content = "Insurance can have various effects on society though the way that it changes who bears the cost of losses and damage" 
                />

                <Card
                color = "#d1d2ff"
                img = "https://firebasestorage.googleapis.com/v0/b/sayna-test.appspot.com/o/section2%2Fother-insurance-1.png?alt=media&token=b9520cda-8335-496f-8cc9-9a118c37292b"
                title = "Other Insurance"
                content = "Insurance can have various effects on society though the way that it changes who bears the cost of losses and damage" 
                />
            </div>
        </div>
    );   
}

export default SecondSection;