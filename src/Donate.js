import React from 'react';
import './App.css';
import image from './images/causes/kampalatwo.jpg'


function Donate() {
	window.scrollTo({ top: 0, behavior: 'smooth' });
  return (
    <React.Fragment>
		<div className="hero-v1">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-12 mr-auto text-center text-lg-left">
                
                <h1 class="heading mb-3">Donate towards our causes.</h1>
                
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
                    <img src={image} alt="Image" class="img-fluid" data-pagespeed-url-hash="1094297152" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"/>
					</div>
					<div class="col-lg-5 ml-auto">
						<h3 class="mb-3 side-title">OUR DONATION LINES</h3>
						<div class="quick-contact">
							
							<div class="d-flex">
								<span class="icon-phone fa fa-phone"></span>
								<b>AIRTEL MONEY: +256-757-624154 <br/> [Muwonge Sofia]</b>
							</div>
                            <div class="d-flex">
								<span class="icon-phone fa fa-phone"></span>
                <b>MTN MOBILE MONEY: +256-775-075796 <br/> [Namwange Jamilah]</b>
							</div>
                            <br/><br/><br/>
                            <div class="d-flex">
								<p>
                                Eliminate cance uganda is a student initiatiated charitable organisation aimed at creating 
                                awareness and sensitazation of the general public on the dancgers,causes, 
                                possible preventive measures, management and safe treatment of cance in uganda
                                </p>
							</div>
							
						</div>
					</div>
				</div>
			</div>
		</div>
	
    </React.Fragment>
  );
}

export default Donate;
