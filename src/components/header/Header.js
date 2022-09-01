import './Header.css'


function Header() {
    return (
      <div className="Header">
        <header class="header">
        <div class="container">
            <div class="header__wrapper">
                <div class="header__logo">
                    <h2><a href="#">Delivery</a></h2>
                </div>
                <nav>
                    <ul class="header__list ">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#" class="order">Order Now!</a></li>
                    </ul>

                    <div class="hamburger">
                        <img src="" alt="hamburger"/>
                    </div>
                </nav>
            </div>
        </div>
    </header>
      </div>
    );
  }
  
  export default Header;
  