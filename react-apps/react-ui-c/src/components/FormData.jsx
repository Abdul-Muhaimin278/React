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
              <img src="/SVGs/Frame.svg" alt="Frame" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoverageGroup;
