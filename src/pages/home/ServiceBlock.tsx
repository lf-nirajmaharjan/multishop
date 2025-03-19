import React from "react";
import {
  FaCheck,
  FaExchangeAlt,
  FaPhoneVolume,
  FaShippingFast,
} from "react-icons/fa";

const ServiceBlock = () => {
  return (
    <div className="container-fluid pt-5">
      <div className="row px-xl-5 pb-3">
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
          <div
            className="d-flex align-items-center bg-light mb-4"
            style={{ padding: "30px" }}
          >
            <FaCheck className="text-primary m-0 mr-3" size={40} />
            <h5 className="font-weight-semi-bold m-0">Quality Product</h5>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
          <div
            className="d-flex align-items-center bg-light mb-4"
            style={{ padding: "30px" }}
          >
            <FaShippingFast className="text-primary m-0 mr-3" size={40} />
            <h5 className="font-weight-semi-bold m-0">Free Shipping</h5>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
          <div
            className="d-flex align-items-center bg-light mb-4"
            style={{ padding: "30px" }}
          >
            <FaExchangeAlt className="text-primary m-0 mr-3" size={40} />
            <h5 className="font-weight-semi-bold m-0">14-Day Return</h5>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
          <div
            className="d-flex align-items-center bg-light mb-4"
            style={{ padding: "30px" }}
          >
            <FaPhoneVolume className="text-primary m-0 mr-3" size={40} />
            <h5 className="font-weight-semi-bold m-0">24/7 Support</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceBlock;
