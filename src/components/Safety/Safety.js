import "./Safety.css"
import safetyImg from "../../images/Group 6.png"

function Safety() {
    return (
      <div className="App">
       <section class="safety">
            <div class="container">
                <div class="safety__wrapper">
                    <div class="safety__content">
                        <h3>Your Safety Is <br/>
                            Important</h3>
                        <p>When your order reaches you, we have the health safety protocols, so that you are protected
                            from any disease. Watch the video of how the delivery is made.</p>
                    </div>
                    <div class="safety__thumbnail">
                        <img src={safetyImg} alt="safety"/>
                    </div>
                </div>
            </div>
        </section>
      </div>
    );
  };
  
  export default Safety;