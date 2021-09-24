import React from 'react';
import './App.css';
import image from './images/causes/iam.jpg'


function About() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  return (
    <React.Fragment>
		<div className="hero-v1">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-12 mr-auto text-center text-lg-left">
                
                <h1 class="heading mb-3">About Eliminate Cancer Foundation.</h1>
                
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
			<div class="col-lg-5 mb-4 mb-lg-0">
				<figure class="img-play-vid">
					<img src={image} alt="Image" class="img-fluid" data-pagespeed-url-hash="692369217" onload="pagespeed.CriticalImages.checkImageForCriticality(this);" />
					
				</figure>
			</div>
			<div class="col-lg-7 ml-auto">
				<h2 class="mb-4 section-heading">WHO WE ARE.</h2>
				<p> Eliminate cance uganda is a student initiatiated charitable organisation aimed at creating
                                    awareness and sensitazation of the general public on the dancgers,causes, possible preventive measures, 
                                    management and safe treatment of cance in uganda</p>
				
				<p>
                    Bacteria are usually thought of as microscopic, disease-causing nuisances. They have long been seen as something that needs to be washed away with soap and warm water, 
                    or killed en masse with hand sanitizer. But what if these stigmatized organisms could be used to fight cancer, the stubborn killer devastating millions of people? Scientists 
                    at the University of California, led by Jeff Hasty, are working to genetically engineer bacteria that will infiltrate tumors and kill them. Combined with conventional treatment 
                    such as chemotherapy, researchers are hoping bacteria will be very effective at killing tumors and, further, 
                    stopping them from spreading. If proven safe and effective, this bacterial treatment could provide a vital victory in the war against cancer.
                </p>
				<p>

				</p>
			</div>
		</div>
	</div>
</div>
<div class="site-section stats">
  <div class="container">
      <div class="row mb-3">
          <div class="col-lg-7 text-center mx-auto">
              <h2 class="section-heading">We Are Eliminate Cancer Foundation</h2>
              <p></p>
          </div>
      </div>
      <div class="row">
          <div class="col-lg-4">
              <div class="data">
                  <span class="icon text-primary">
                      <span class="fa fa-edit fa-4x"></span>
                  </span>
                  <strong class="d-block number">OUR VISION</strong>
                  <span class="label">Creating a cancer-free society</span>
              </div>
          </div>
          <div class="col-lg-4">
              <div class="data">
                  <span class="icon text-primary">
                  <span class="fa fa-skull fa-4x"></span>
                  </span>
                  <strong class="d-block number">OUR MISSION</strong>
                  <span >To increase awareness and sensitize the general public about cancer 
				  through community outreach and to support the cancer patients and their families.</span>
              </div>
          </div>
          <div class="col-lg-4">
              <div class="data">
                  <span class="icon text-primary">
                  <span class="fa fa-ribbon fa-4x"></span>
                  </span>
                  <strong class="d-block number">OUR MOTTO</strong>
                  <span class="label">Be part of the fight</span>
              </div>
          </div>
      </div>
  </div>
</div>
    </React.Fragment>
  );
}

export default About;
