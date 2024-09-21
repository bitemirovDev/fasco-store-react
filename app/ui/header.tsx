export default function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="container">
          <div className="nav__row">
            <div className="nav__logo">
              <a href="#!">Fasco</a>
            </div>
            <ul className="nav__list" id="header-nav">
              <li className="nav__list-item active">
                <a href="#!">Home</a>
              </li>
              <li className="nav__list-item">Deals</li>
              <li className="nav__list-item">New Arrivals</li>
              <li className="nav__list-item">
                <a href="#!">Shop</a>
              </li>
              {/* <li className="nav__list-item">Pages <img src="./img/icons/arrow_down.svg" alt="arrow" /></li>
                  <li className="nav__list-item">Sign in</li> */}
            </ul>

            <div className="nav__btn">
              <button className="btn btn--small">
                <a href="#!">Sign in</a>
              </button>
            </div>
            {/* <ul className="nav__btns"> 
                  <li className="nav__btns-item">
                    <button>
                      <img src="./img/icons/search.svg" alt="search" />
                    </button>
                  </li>
                  <li className="nav__btns-item">
                    <button>
                      <img src="./img/icons/user.svg" alt="user" />
                    </button>
                  </li>
                  <li className="nav__btns-item">
                    <button>
                      <img src="./img/icons/star.svg" alt="star" />
                    </button>
                  </li>
                  <li className="nav__btns-item">
                    <button>
                      <img src="./img/icons/cart.svg" alt="cart" />
                    </button>
                  </li>
                </ul> */}
          </div>
        </div>
      </nav>
    </header>
  );
}
