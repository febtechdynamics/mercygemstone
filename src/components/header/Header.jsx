import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../public/images/logo.png';
import designImage from '../../../public/images/design-1.png';
import gemstoneImage from '../../../public/images/opal3.png';

const Header = () => {
  return (
    <>
      <section className='hero_area'>
        <header className="header_section">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg custom_nav-container ">
              <Link to="/" className="navbar-brand">
                <img src={logo} alt="Logo" />
              </Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
                  <ul className="navbar-nav  ">
                    <li className="nav-item active">
                      <Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/about" className="nav-link"> About</Link>
                    </li>
                    <li className="nav-item dropdown">
                      <div to="/" className="nav-link dropdown-toggle" id="productsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Products
                      </div>
                      <div className="dropdown-menu" aria-labelledby="productsDropdown">
                        <Link to="/gemstone" className="dropdown-item">Gemstone</Link>
                        <Link to="/industrial-material" className="dropdown-item">Industrial Material</Link>
                      </div>
                    </li>
                    <li className="nav-item">
                      <Link to="/contact" className="nav-link">Contact us</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/login" className="nav-link">Login</Link>
                    </li>
                  </ul>
                </div>
                <div className="quote_btn-container ">
                  <form className="form-inline">
                    <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit"></button>
                  </form>
                </div>
              </div>
            </nav>
          </div>
        </header>
      </section>
    </>
  );
};

export default Header;
