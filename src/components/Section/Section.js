import "./Section.css"
import sectionImg from "../../images/Group.png"

function Section() {
    return (
      <div className="App">
       <section class="home">
            <div class="container">
                <div class="home__wrapper">
                    <div class="home__content">
                        <h1>Order Products <br/>
                            Faster Easier</h1>
                        <p>Order your favorite foods at any time and we will deliver them right to where you are.</p>
                        <a href="#">Get Started</a>
                    </div>
                    <div class="home__thumbnail">
                        <img src={sectionImg} alt="home product"/>
                    </div>
                </div>
            </div>
        </section>
      </div>
    );
  };
  
  export default Section;