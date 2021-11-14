import Card from "./card";
import "./assets/styles/style.css"
import home_insurance from "./assets/img/home-insurance-1.png"
import car_insurance from "./assets/img/car-insurance-1.png"
import life_insurance from "./assets/img/life-insurance-1.png"
import business_insurance from "./assets/img/business-insurance-1.png"
import travel_insurance from "./assets/img/travel-insurance-1.png"
import other_insurance from "./assets/img/other-insurance-1.png"

function SecondSection(){
    return(
        <div class="container2">
            <div class="title2">
                <h1>Choose your Insurance</h1>
                <p>Keep Your Life Smile, and Wealthy</p>
            </div>
            <div className="section">
                <Card
                img = {home_insurance}
                color = "#aef3ff"
                title = "Home Insurance"
                content = "Insurance can have various effects on society though the way that it changes who bears the cost of losses and damage" 
                />

                <Card
                color = "#facffe"
                img = {car_insurance}
                title = "Car Insurance"
                content = "Insurance can have various effects on society though the way that it changes who bears the cost of losses and damage" 
                />

                <Card
                color = "#d8ffd2"
                img = {life_insurance}
                title = "Life Insurance"
                content = "Insurance can have various effects on society though the way that it changes who bears the cost of losses and damage" 
                />

                <Card
                color = "#fef4b1"
                img = {business_insurance}
                title = "Business Insurance"
                content = "Insurance can have various effects on society though the way that it changes who bears the cost of losses and damage" 
                />

                <Card
                color = "#fed9cf"
                img = {travel_insurance}
                title = "Travel Insurance"
                content = "Insurance can have various effects on society though the way that it changes who bears the cost of losses and damage" 
                />

                <Card
                color = "#d1d2ff"
                img = {other_insurance}
                title = "Other Insurance"
                content = "Insurance can have various effects on society though the way that it changes who bears the cost of losses and damage" 
                />
            </div>
        </div>
    );   
}

export default SecondSection;