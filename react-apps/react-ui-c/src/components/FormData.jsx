function CoverageGroup({ item }) {
	const { group, h4, p, left, right } = item;
	return (
		<div className="coverage_section_content g-5">
			<div className="row d-flex align-items-center justify-content-md-evenly gutter">
				<div className={left}>
					<figure className="d-flex align-items-center justify-content-center">
						<img src={group} alt={group} className="m-auto img-fluid" />
					</figure>
				</div>

				<div className={right}>
					<div className="d-flex justify-content-between align-items-center">
						<div>
							<h4>{h4}</h4>
							<p>{p}</p>
						</div>
						<div>
							<img src="../../public/SVGs/Frame.svg" alt="Frame" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CoverageGroup;

{
	/* <div className="row d-flex align-items-center justify-content-evenly gutter">
  <div className="col-md-2 form_left form_left1">
    <figure className="d-flex align-items-center justify-content-center">
      <img
        src="../../public/SVGs/Group.svg"
        alt="..."
        className="m-auto img-fluid"
      />
    </figure>
  </div>

  <div className="col-md-9 form_right form_right1">
    <div className="d-flex justify-content-between align-items-center">
      <div>
        <h4>General Liability</h4>
        <p>What every brand must have</p>
      </div>
      <div>
        <img src="../../public/SVGs/Frame.svg" alt="Frame" />
      </div>
    </div>
  </div>
</div> */
	/* <!-- ======row2===== --> */
	/* <div className="row d-flex align-items-center justify-content-evenly gutter">
  <div className="col-md-2 form_left form_left2">
    <figure className="d-flex align-items-center justify-content-center">
      <img
        src="../../public/SVGs/Group 2.svg"
        alt="..."
        className="m-auto img-fluid"
      />
    </figure>
  </div>

  <div className="col-md-9 form_right form_right2">
    <div className="d-flex justify-content-between align-items-center">
      <div>
        <h4>Workers Comp</h4>
        <p>Required if you have employees</p>
      </div>
      <div>
        <img src="../../public/SVGs/Frame.svg" alt="Frame" />
      </div>
    </div>
  </div>
</div>
 <!-- ======row3===== -->

<div className="row d-flex align-items-center justify-content-evenly gutter">
  <div className="col-md-2 form_left form_left3">
    <figure className="d-flex align-items-center justify-content-center">
      <img
        src="../../public/SVGs/Group 3.svg"
        alt="..."
        className="m-auto img-fluid"
      />
    </figure>
  </div>

  <div className="col-md-9 form_right form_right3">
    <div className="d-flex justify-content-between align-items-center">
      <div>
        <h4>Cyber Liability</h4>
        <p>Do you sell your products online?</p>
      </div>
      <div>
        <img src="../../public/SVGs/Frame.svg" alt="Frame" />
      </div>
    </div>
  </div>
</div>
<!-- ======row4===== -->

<div className="row d-flex align-items-center justify-content-evenly gutter">
  <div className="col-md-2 form_left form_left4">
    <figure className="d-flex align-items-center justify-content-center">
      <img
        src="../../public/SVGs/Group 4.svg"
        alt="..."
        className="m-auto img-fluid"
      />
    </figure>
  </div>

  <div className="col-md-9 form_right form_right4">
    <div className="d-flex justify-content-between align-items-center">
      <div>
        <h4>Product Recall</h4>
        <p>Can you afford a large scale recall?</p>
      </div>
      <div>
        <img src="../../public/SVGs/Frame.svg" alt="Frame" />
      </div>
    </div>
  </div>
</div>
<div className="d-flex align-items-center justify-content-center">
  <button className="btn coverage_btn">Education Center</button>
</div> */
}
