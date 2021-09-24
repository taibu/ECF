import React from 'react';
import logo from './images/logoecf.png'
import './App.css';
import {Link} from 'react-router-dom';

function Header() {
	const style = {
		width: "100%", position: "fixed", top: "0px"
	  };
  return (
    <React.Fragment>
   
   <div class="site-mobile-menu site-navbar-target">
			<div class="site-mobile-menu-header">
				<div class="site-mobile-menu-close mt-3">
					<span class="icon-close2 js-menu-toggle"></span>
				</div>
			</div>
			<div class="site-mobile-menu-body"></div>
		</div>
   <div id="sticky-wrapper" class="sticky-wrapper is-sticky">
    <header className="site-navbar light js-sticky-header site-navbar-target" role="banner" style={style}>
			<div class="container">
				<div class="row align-items-center">
					<div class="col-6 col-xl-2">
						<div class="mb-0 site-logo"><Link to='/' class="nav-link"><img src={logo} alt="Image" class="img-fluid" /></Link></div>
					</div>
					<div class="col-12 col-md-10 d-none d-xl-block">
						<nav class="site-navigation position-relative text-right" role="navigation">
							<ul class="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                                <Link to='/' class="nav-link">
								  Home
                                </Link>
                                <Link to='/aboutus' class="nav-link">
								 About Us
                                </Link>
								<Link to='/team' class="nav-link">
								 Our Team
                                </Link>							
								<Link to='/donate' class="nav-link">
								  Donate
                                </Link>
								<Link to='/contact' class="nav-link">
								  Contact Us
                                </Link>
							</ul>
						</nav>
					</div>
					<div className="afterheader col-6 d-inline-block d-xl-none ml-md-0 py-3">
                        <a href="#" class="site-menu-toggle js-menu-toggle float-right"><span class="icon-menu text-black fa fa-bars"></span></a>
                        </div>
				</div>
			</div>
		</header>
	</div>
        </React.Fragment>
  );
}

export default Header;
