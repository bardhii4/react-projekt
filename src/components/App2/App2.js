import "./App2.css"
import app2Img from "../../images/Group 13.png"
import vectorImg from "../../images/Vector.png"
import vector2Img from "../../images/Vector (1).png"

function App2() {
    return (
      <div className="App">
     <section class="app">
            <div class="container">
                <div class="app__wrapper">
                    <div class="app__thumbnail">
                        <img src={app2Img} alt="app image"/>
                    </div>
                    <div class="app__content">
                        <h4>Watch Your Delivery <br/>At Any Time</h4>
                        <p>With our app you can view the route of your order, from our local headquarters to the place
                            where you are. Look for the app now!</p>

                        <div class="app__buttons">
                            <div class="app__button">
                                <img src={vectorImg} alt="apple"/>
                                <a href="#" class="apple">App Store</a>
                            </div>
                            <div class="app__button">
                                <img src={vector2Img} alt="google"/>
                                <a href="#" class="google">Google Play</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </div>
    );
  };
  
  export default App2;