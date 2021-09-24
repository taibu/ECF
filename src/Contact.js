import React from 'react';
import './App.css';
import image from './images/banner.png'


function Contact() {
	window.scrollTo({ top: 0, behavior: 'smooth' });
  return (
    <React.Fragment>
		<div className="hero-v1">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-12 mr-auto text-center text-lg-left">
                
                <h1 class="heading mb-3">Contact Eliminate Cancer Foundation.</h1>
                
            </div>
            <div class="col-lg-6">
            </div>
            <div class="col-lg-6"></div>
        </div>
    </div>
  </div>
  <div class="site-section">
			<div class="container">
				<div class="row">
					<div class="col-lg-6">
					<h3 class="mb-3 side-title">Send Us an Email from Here</h3>
						<form action="">
							<div class="row">
								<div class="col-lg-6">
									<div class="form-group">
										<label for="fname">First name</label>
										<input type="text" id="fname" class="form-control" />
									</div>
								</div>
								<div class="col-lg-6">
									<div class="form-group">
										<label for="lname">Last name</label>
										<input type="text" id="lname" class="form-control"/>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-lg-12">
									<div class="form-group">
										<label for="email">Email</label>
										<input type="text" id="email" class="form-control" />
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-lg-12">
									<div class="form-group">
										<label for="subject">Subject</label>
										<input type="text" id="subject" class="form-control" />
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-lg-12">
									<div class="form-group">
										<label for="message">Message</label>
										<textarea name="message" id="message" class="form-control" cols="30" rows="6"></textarea>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-lg-6">
									<input type="submit" class="btn btn-primary" value="Send Message"/>
								</div>
							</div>
						</form>
					</div>
					<div class="col-lg-5 ml-auto">
						<h3 class="mb-3 side-title">Quick info</h3>
						<div class="quick-contact">
							<div class="d-flex">
								<span class="icon-room fa fa-map-marker"></span>
								<address>
					                 Wandegeya market,Room 323
								</address>
							</div>
							<div class="d-flex">
								<span class="icon-phone fa fa-phone"></span>
								<b>+256-787-273599 <br/> +256-757-624154 <br/> +256-783-100703</b>
							</div>
							<div class="d-flex">
								<span class="icon-envelope fa fa-envelope"></span>
								<b>info@eliminatecancerug.org</b>
							</div>
							<div class="d-flex">
								<span class="icon-globe fa fa-globe"></span>
								<b>https://eliminatecancerug.org</b>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	
    </React.Fragment>
  );
}

export default Contact;
