// import;

function HeroSection() {
  return (
    <section className="container-fluid hero_section py-5">
      <div className="row d-flex flex-column-reverse flex-lg-row">
        <div className="col-lg-6 col-12 m-auto hero_left">
          <h2>Welcome to Rodeo Secure</h2>
          <p>Custom Insurance Solutions for CPG Brands</p>
          <button className="btn">View Your Options</button>
        </div>
        <div className="col-lg-6 col-12 d-flex hero_right">
          <img
            src="../../public/images/Group 620.png"
            alt="..."
            className="img-fluid hero_right_img m-auto"
          />
        </div>
      </div>
    </section>
  );
}
export default HeroSection;
