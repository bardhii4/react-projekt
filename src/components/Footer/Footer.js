import "./Footer.css"


function Footer() {
    return (
      <div className="App">
      <footer class="footer">
        <div class="container">
            <div class="footer__wrapper">
                <div class="footer__lists">
                    <div class="footer__list">
                        <h4>Delivery</h4>
                        <ul>
                            <li><a href=""> Order Products Faster</a></li>
                            <li><a href=""> Easier</a></li>
                        </ul>
                    </div>
                    <div class="footer__list">
                        <h4>Our Services</h4>
                        <ul>
                            <li><a href=""> Pricing</a></li>
                            <li><a href=""> Discounts</a></li>
                            <li><a href=""> Report a bug</a></li>
                            <li><a href=""> Terms of Service</a></li>
                        </ul>
                    </div>
                    <div class="footer__list">
                        <h4>Our Company</h4>
                        <ul>
                            <li><a href=""> Blog</a></li>
                            <li><a href=""> Our mission</a></li>
                            <li><a href=""> Get in touch</a></li>
                        </ul>
                    </div>
                </div>
                <p>Bedimcode. All right reserved</p>
            </div>
        </div>
    </footer>
      </div>
    );
  };
  
  export default Footer;