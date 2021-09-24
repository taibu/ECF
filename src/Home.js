import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';
import image from './images/banner.png'
import walkimage from './images/causes/kampalawalk.jpg'
import walkimagetwo from './images/causes/kampalatwo.jpg'
import walkimagetthree from './images/causes/jinja4.jpg'
import kawempe from './images/causes/kawempe.jpg'

function Home() {
	window.scrollTo({ top: 0, behavior: 'smooth' });
  return (
  <React.Fragment>
 <div className="hero-v1">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-6  col-sm-6 mr-auto text-center text-lg-left">
                <span class="d-block subheading">Childhood Cancer Awareness Month</span>
                <h1 class="heading mb-3">Reduce Your Childs Risk</h1>
                <p class="mb-5">Have your child checked by a doctor if they have unusual lump or 
				swelling,loss of energy, Unexplained fever,Frequent headaches often with vomiting,sudden  vision changes,sudden weight loss and Limping
				</p>
                <p class="mb-4"><Link to='/Contact' class="btn btn-primary">Get more information</Link></p>
            </div>
            <div class="col-lg-6 col-sm-6">
                <figure class="illustration">
                <img src={image} alt="Image" className="img-fluid homebanner" data-pagespeed-url-hash="2766053506" onload="pagespeed.CriticalImages.checkImageForCriticality(this);" />
                </figure>
            </div>
            {/* <div class="col-lg-6"></div> */}
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
                      <span class="fa fa-ribbon fa-4x"></span>
                  </span>
                  <strong class="d-block number">OUR VISION</strong>
                  <span class="label">Creating a cancer-free society</span>
              </div>
          </div>
          <div class="col-lg-4">
              <div class="data">
                  <span class="icon text-primary">
                  <span class="fa fa-ribbon fa-4x"></span>
                  </span>
                  <strong class="d-block number">OUR MISSION</strong>
                  <span >To increase awareness and sensitize the general public about cancer 
				  through community outreach and to support the cancer patients and their families and create a society  less
				  burdened by cancer through research.</span>
              </div>
          </div>
          <div class="col-lg-4">
              <div class="data">
                  <span class="icon text-primary">
                  <span class="fa fa-ribbon fa-4x"></span>
                  </span>
                  <strong class="d-block number">OUR MOTTO</strong>
                  <span class="label">Taking steps towards a cancer free World</span>
              </div>
          </div>
      </div>
  </div>
</div>
<div class="site-section bg-light">
	<div class="container">
		<div class="row mb-3">
			<div class="col-lg-7 text-center mx-auto">
				<h2 class="section-heading">OUR RECENT EVENTS</h2>
				<p>World cancer day awareness walk 2020</p>
			</div>
		</div>
		<div class="row">
			<div class="col-lg-3">
				<div class="media-v1 bg-1">
					<div class="icon-wrap">
                    <img src={walkimage} alt="Image" class="img-fluid" data-pagespeed-url-hash="1094297152" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"/>
					</div>
					<div class="body">
						<h3>Visit to Mulago cancer Institute</h3>
						{/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, debitis!</p> */}
					</div>
				</div>
			</div>
			<div class="col-lg-3">
				<div class="media-v1 bg-1">
					<div class="icon-wrap">
                    <img src={walkimagetwo} alt="Image" class="img-fluid" data-pagespeed-url-hash="1094297152" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"/>
						{/* <span class="flaticon-ribbon"></span> */}
					</div>
					<div class="body">
						<h3>World cancer day awareness walk 2020</h3>
						{/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, debitis!</p> */}
					</div>
				</div>
			</div>
			<div class="col-lg-3">
				<div class="media-v1 bg-1">
					<div class="icon-wrap">
                    <img src={walkimagetthree} alt="Image" class="img-fluid" data-pagespeed-url-hash="1094297152" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"/>
					</div>
					<div class="body">
						<h3>World cancer day awareness walk 2021</h3>
						{/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, debitis!</p> */}
					</div>
				</div>
			</div>
			<div class="col-lg-3">
				<div class="media-v1 bg-1">
					<div class="icon-wrap">
                    <img src={kawempe} alt="Image" class="img-fluid" data-pagespeed-url-hash="1094297152" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"/>
					</div>
					<div class="body">
						<h3>Visit to Kawempe Children Home Care</h3>
						{/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, debitis!</p> */}
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="site-section">
	<div class="container">
		<div class="row mb-5">
			<div class="col-lg-9 mx-auto text-center">
				<span class="subheading"></span>
				<h2 class="mb-4 section-heading">Preventable cancer types.</h2>
				<p>No cancer is 100% preventable. However, managing certain controllable risk factors – such as your diet, physical activity and other lifestyle choices – can lower your chances of developing cancer.</p>
			</div>
		</div>
		<div class="row">
			<div class="col-lg-6 ">
				<div class="row mt-2 pt-2">
					<div class="col-lg-6 do ">
						<h3></h3>
						<ul class="list-unstyled ">
							<li>Breast cancer</li>
							<li>Cervical cancer</li>
							<li>Colorectal cancer</li>
							<li>Liver cancer</li>
							<li>Lung cancer</li>
							
						</ul>
					</div>
					<div class="col-lg-6 dont ">
						<h3></h3>
						<ul class="list-unstyled">
							<li>Prostate cancer</li>
							<li>Skin cancer</li>
							<li>Testicular cancer</li>
							<li>Oral cancer</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="col-lg-6">
				<img src={walkimage} alt="Image" class="img-fluid" data-pagespeed-url-hash="1094297152" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"/>
			</div>
		</div>
	</div>
</div>
<div class="site-section bg-primary-light">
	<div class="container">
		<div class="row mb-5">
			<div class="col-lg-7 mx-auto text-center">
				<h2 class="mb-4 section-heading">Cancer Prevention Tips</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex officia quas, modi sit eligendi numquam!</p>
			</div>
		</div>
		<div class="row">
			<div class="col-lg-6 mb-4">
				<div class="symptom d-flex">
					<div class="img">
					<span class="icon text-primary">
                       <span class="fa fa-ribbon fa-4x"></span>
                     </span>
					</div>
					<div class="text">
						<h3>DON’T USE TOBACCO</h3>
						<p> The use of tobacco products has been linked to many types of cancer, including lung, colorectal, breast, throat, cervical, bladder, mouth and esophageal. It’s never too late to quit. About 90 percent of all lung cancer is related to smoking. 
							</p>
					</div>
				</div>
			</div>
			<div class="col-lg-6 mb-4">
				<div class="symptom d-flex">
					<div class="img">
					<span class="icon text-primary">
                       <span class="fa fa-ribbon fa-4x"></span>
                  </span>
					</div>
					<div class="text">
						<h3>MAINTAIN A HEALTHY WEIGHT</h3>
						<p> Getting at least 30 minutes of physical activity each day can make a big difference in your general health and well-being. Inactivity and obesity have been linked to breast and colorectal cancer, and there is also some evidence of a link to lung and pancreatic cancer. </p>
					</div>
				</div>
			</div>
			<div class="col-lg-6 mb-4">
				<div class="symptom d-flex">
					<div class="img">
					<span class="icon text-primary">
                       <span class="fa fa-ribbon fa-4x"></span>
                  </span>
					</div>
					<div class="text">
						<h3>GET REGULAR CANCER SCREENINGS</h3>
						<p> Talk to your health care professional about cancer screening. Some tests can help detect cancer early, when treatment is more likely to be successful,
							 and some can also detect precancerous conditions before they become cancer.</p>
					</div>
				</div>
			</div>
			<div class="col-lg-6 mb-4">
				<div class="symptom d-flex">
					<div class="img">
					<span class="icon text-primary">
                       <span class="fa fa-ribbon fa-4x"></span>
                     </span>
				  </div>
					<div class="text">
						<h3>EAT A HEALTHY DIET</h3>
						<p> Eat lots of fruits, vegetables, beans and whole grains. Limit red meat and cut out processed meats. For healthy recipe ideas, visit our blog. It is also important 
							to limit alcohol consumption because alcohol can increase your risk for liver, colorectal and breast cancers.</p>
					</div>
				</div>
			</div>
		</div>
		<div class="row justify-content-md-center">
			<div class="col-lg-10">
				<div class="note row">
					<div class="col-lg-8 mb-4 mb-lg-0"><strong>Stay informed and reduce your risk:</strong> Contact us for advise and guidance</div>
					<div class="col-lg-4 text-lg-right">
					<Link to='/contact' class="btn btn-primary"><span class="icon-phone mr-2 mt-3"></span>Get in Touch</Link>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</React.Fragment>
  );
}

export default Home;
