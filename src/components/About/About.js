import "./About.css"
import aboutImg from "../../images/Group 17.png"


function About() {
    return (
      <div className="App">
    <section class="about">
            <div class="container">
                <div class="about__wrapper">
                    <div class="about__thumbnail">
                        <img src={aboutImg} alt="about"/>
                    </div>
                    <div class="about__content">
                        <h3>Find Out a Little More <br/>
                            About Us</h3>
                        <p>We are a company dedicated to the distribution of products by delivery to your home or to the
                            place where you are, with the best quality of delivery.</p>
                    </div>
                </div>
            </div>
        </section>
      </div>
    );
  };
  
  export default About;