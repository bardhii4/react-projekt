import "./Services.css"

import servicesImg from "../../images/Group 4.png"
import services2Img from "../../images/Group 5.png"
import services3Img from "../../images/Group 3.png"

function Services() {
    return (
      <div className="App">
       <section class="services">
            <div class="container">
                <div class="services__wrapper">
                    <h3>Some Services We <br/>
                        Offer</h3>
                    <div class="services__boxes">
                        <div class="services__box">
                            <div class="services__box--wrapper">
                                <h4>Payment Done</h4>
                                <img src={services3Img} alt="image"/>
                                <p>Pay with a Visa or PayPal card and without much ado.</p>
                                <a href="#">Learn More</a>
                            </div>
                        </div>
                        <div class="services__box">
                            <div class="services__box--wrapper">
                                <h4>Find Your Product</h4>
                                <img src={servicesImg} alt="image"/>
                                <p>We offer sale of products through the Internet.</p>
                                <a href="#">Learn More</a>
                            </div>
                        </div>
                        <div class="services__box">
                            <div class="services__box--wrapper">
                                <h4>Product Received</h4>
                                <img src={services2Img} alt="image"/>
                                <p>In our app you can see the delay time of your order.</p>
                                <a href="#">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </div>
    );
  };
  
  export default Services;