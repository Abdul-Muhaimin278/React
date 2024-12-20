// import

function LinkSection() {
	return (
		<section className="container-fluid links p-5">
			<div className="row">
				<div className="col-lg-8">
					<div className="row">
						<div className="col-lg-3 col-sm-6">
							<h6>Get Started</h6>
							<ul>
								<li>Careers</li>
								<li>Blog</li>
							</ul>
						</div>
						<div className="col-lg-3 col-sm-6">
							<h6>Grow Together</h6>
							<ul>
								<li>Partner with Rodeo</li>
							</ul>
						</div>
						<div className="col-lg-3 col-sm-6">
							<h6>Contact</h6>
							<ul>
								<li>Contact Us</li>
							</ul>
						</div>
						<div className="col-lg-3 col-sm-6">
							<h6>Privacy Policy</h6>
							<ul>
								<li>Privacy Policy</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="col-lg-4">
					<div className="links_last d-flex flex-column align-items-lg-end  justify-content-center mt-5">
						<img
							src="../../public/images/Rodeo logo.png"
							alt="..."
							className="img-fluid mb-4"
						/>
						<p className>
							Follow us on:
							<img
								src="../../public/SVGs/in.svg"
								alt="..."
								className="img-fluid"
							/>
							<img
								src="../../public/SVGs/insta.svg"
								alt="..."
								className="img-fluid"
							/>
							<img
								src="../../public/SVGs/tiktok.svg"
								alt="..."
								className="img-fluid"
							/>
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
export default LinkSection;
