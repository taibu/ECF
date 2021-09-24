import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Footer() {
  return (
  <div className="site-footer">
	  <div class="container">
		<div class="row">
			<div class="col-lg-6">
				<h2 class="footer-heading mb-4"><b>About</b></h2>
				<p>Eliminate cance uganda is a student initiatiated charitable organisation aimed at creating
                                    awareness and sensitazation of the general public on the dancgers,causes, possible preventive measures, 
                                    management and safe treatment of cance in uganda</p>
				<div class="my-5">
					<a href="index.html#" class="pl-0 pr-3"><span class="icon-facebook"></span></a>
					<a href="index.html#" class="pl-3 pr-3"><span class="icon-twitter"></span></a>
					<a href="index.html#" class="pl-3 pr-3"><span class="icon-instagram"></span></a>
					<a href="index.html#" class="pl-3 pr-3"><span class="icon-linkedin"></span></a>
				</div>
			</div>
			<div class="col-lg-6">
				<div class="row">
					<div class="col-lg-5">
						<h2 class="footer-heading mb-4"><b>Quick Links</b></h2>
						<ul class="list-unstyled">
						    
								<li class="active"><Link to='/'>Home</Link></li>
								<li ><Link to='/aboutus' >About Us</Link></li>
								<li ><Link to='/team' >Our Team </Link></li>
								<li ><Link to='/contact'>Contact Us</Link></li>
								<li ><Link to='/donate'>Donate</Link></li>
                                
						</ul>
					</div>
					<div class="col-lg-7">
						<h2 class="footer-heading mb-4"><b>Our Contacts</b></h2>
						<ul class="list-unstyled">
							<li>Email: info@eliminatecancerug.org</li>
							<li>Office: Wandegeya market,Room 323</li>
							<li>Phone: +256-787-273599</li>
							<li>Phone 2: +256-757-624154</li>
							<li>Phone 3: +256-783-100703</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div class="row text-center">
			<div class="col-md-12">
				<div class="border-top pt-0">
					<p class="copyright"><small>

					Copyright &copy; <script>{new Date().getFullYear()}</script> Eliminate cancer foundation uganda. All rights reserved | This site is powered  <i class="icon-heart text-danger" aria-hidden="true"></i> by <a href="https://techlab.click/" target="_blank">techlab systems</a>
					</small></p>
				</div>
			</div>
		</div>
	</div>
</div>
  );
}

export default Footer;
