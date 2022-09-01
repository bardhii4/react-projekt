import "./Contact.css"


function Contact() {
    return (
      <div className="App">
    <section class="contact">
            <div class="container">
                <div class="contact__wrapper">
                    <div class="contact__content">
                        <h4>Contact Us From <br/>Here</h4>
                        <p>You can contact us from here, you can write to us, call us or visit our service center, we
                            will gladly assist you.</p>
                    </div>
                    <div class="contact__info">
                        <ul>
                            <li><strong> Telephone:</strong> 999 - 888 - 777</li>
                            <li><strong>Email:</strong> delivery@email.com</li>
                            <li><strong>Location:</strong> Lima - Peru</li>
                        </ul>
                        <div class="contact__button">
                            <a href="#">Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </div>
    );
  };
  
  export default Contact;
  