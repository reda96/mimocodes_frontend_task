import "./PriceSection.css";

const PricesSection = () => {
  return (
    <div className="page">
      <div className="titleSentence">
        <h3>
          {" "}
          Our <span style={{ color: "#0d6efd" }}> Pricing</span>{" "}
        </h3>
      </div>
      <div className="container">
        <div className="priceOption">
          <div style={{ fontSize: "30px", color: "#333", fontStyle: "bold" }}>
            Small Business
          </div>
          <div>all you need to work in small company</div>

          <div className="price">$ 300</div>
          <button className="buyButton">Buy</button>
        </div>
        <div className="priceOption">
          <div style={{ fontSize: "30px", color: "#333", fontStyle: "bold" }}>
            Profissional
          </div>
          <div>Best value and our most popular plan</div>

          <div className="price">$ 300</div>
          <button className="buyButton">Buy</button>
        </div>
        <div className="priceOption">
          <div style={{ fontSize: "30px", color: "#333", fontStyle: "bold" }}>
            Enterprise
          </div>
          <div> Perfect for Agencies and Sites that has huge business</div>

          <div className="price">$ 300</div>
          <button className="buyButton">Buy</button>
        </div>
      </div>

      <div className="titleSentence">
        <h6 style={{ margin: "15px" }}>
          All plans have a 14 day risk-free trial. No hidden Fees
        </h6>
      </div>
    </div>
  );
};

export default PricesSection;
