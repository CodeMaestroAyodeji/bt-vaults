import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaypal,
  faCcVisa,
  faCcMastercard,
  faCcStripe,
  faCcAmex,
} from "@fortawesome/free-brands-svg-icons";
import './Pricing.css';

function Pricing() {
  return (
    <div className="pricing_page">
      <h1 className="pricing_title">Choose Your Plan</h1>

      {/* Plan Cards Container with Flexbox */}
      <div className="plan_container">
        <div className="plan_card">
          <div className="legend">Free Plan</div>
          <h1 className="plan_storage" style={{ color: "#FFC107" }}>500 MB</h1>
          <p>Cloud Storage</p>
          <ul className="plan_features">
            <li><b>Free</b></li>
            <li>1 Slot to Download per day</li>
            <li>Max Size: 500MB</li>
            <li>Reduced speed: 500 kbps</li>
            <li>Files deleted after 3 days</li>
          </ul>
          <div className="plan_footer">
            <button className="btn_primary">Sign Up</button>
          </div>
        </div>

        <div className="plan_card">
          <div className="legend">Premium Plan</div>
          <h1 className="plan_storage" style={{ color: "#FFC107" }}>2 GB</h1>
          <p>Cloud Storage</p>
          <ul className="plan_features">
            <li><b>Configurable Amount</b></li>
            <li>5 Slots to Download per day</li>
            <li>Max Size: 2GB</li>
            <li>Full Network Speed: 5GBps</li>
            <li>Files deleted after 5 days</li>
          </ul>
          <div className="plan_footer">
            <button className="btn_primary">Subscribe</button>
          </div>
        </div>
      </div>

      {/* Payment Methods Section */}
      <div className="payment_methods">
        <h4>Accepted Payment Methods</h4>
        <div className="payment_list">
          <span className="payment_icon">
            <FontAwesomeIcon icon={faPaypal} size="3x" color="#003087" />
          </span>
          <span className="payment_icon">
            <FontAwesomeIcon icon={faCcVisa} size="3x" color="#1a1f71" />
          </span>
          <span className="payment_icon">
            <FontAwesomeIcon icon={faCcMastercard} size="3x" color="#eb001b" />
          </span>
          <span className="payment_icon">
            <FontAwesomeIcon icon={faCcStripe} size="3x" color="#635bff" />
          </span>
          <span className="payment_icon">
            <FontAwesomeIcon icon={faCcAmex} size="3x" color="#2e77bb" />
          </span>
        </div>
        <p><small>30-Day Money Back Guarantee on your first payment</small></p>
      </div>
    </div>
  );
}

export default Pricing;
