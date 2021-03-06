import "./assets/css/style.css"
import Tick from "./tick"


function FirstSection(){
    return (
        <div className="container">
            <div className="section1">
                <nav className="menu">
                    <img src="https://firebasestorage.googleapis.com/v0/b/sayna-test.appspot.com/o/section1%2Flogo.png?alt=media&token=fcb260e7-af21-4994-a44c-4efaa0164934" alt="" />
                    <ul>
                        <li><a href="/">For you & family</a></li>
                        <li><a href="/">For Buisiness</a></li>
                    </ul>
                </nav>
            </div>
            <div className="section2">
                <div className="card1Section2">
                    <p>HELLO, WE ARE FINCORP</p>
                    <h1>Insurance <br/> made easy.</h1>
                    <button>Get your free Quote</button>
                </div>
                <div className="card2Section3">
                    <img src="https://firebasestorage.googleapis.com/v0/b/sayna-test.appspot.com/o/section1%2Fbanner-1.png?alt=media&token=adf8a95f-eb19-4dfb-af5c-024613072980" alt="" class = "imgRight"/>
                </div>
            </div>
            <div className="section3">
                <h1>A new take on insurance</h1>
                <p>Great for individuals and buisiness</p>
            </div>
            <div className="section4">
                <div className="card1Section4">
                    <img className="family" src="https://firebasestorage.googleapis.com/v0/b/sayna-test.appspot.com/o/section1%2Fhealth-family-1.png?alt=media&token=ed59b4e3-4874-41ed-8258-4d643b857fd1" alt="" />
                </div>
                <div className="card2Section4">
                    <h4 class="blue">Monotonectally deploy seamless data and <br /> resource maximizing systems.</h4>
                    <h5>Great for individuals and small families up to 4 members.</h5>
                    <p>
                        A strong up-to-date, employee benefits insurance program is vital for <br /> attracting and retaining good employees. It takes diligence, creativity and attention to <br /> detail to ensure you are getting the best "bang for your buck" each and every year.
                    </p>
                    <div className="card2Section4Item1">
                        <Tick
                        title="COMPREHENSIVE INSURANCE"
                        content="Dynamycally repurpose e-business users rather than granular products."
                        />                  
                    </div>
                    <div className="card2Section4Item2">
                        <Tick
                        title="SUPPORT IS JUST A CALL AWAY"
                        content="Rapidously customize value-added platforms compliant action items."
                        />
                    </div>
                    <div className="card2Section4Item3">
                        <Tick
                        title="SAY GOODBYE TO PAPERWORK"
                        content="Globally deliver economically sound communities relationships."
                        />
                    </div>

                </div>
            </div>
            
            
        </div>
    );
}
export default FirstSection;