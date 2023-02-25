import React from "react";
import "./css/Moving.css";
const Moving = () => {
  return (
    <section class="facility section" id="facility">
      <div class="facility-contianer container">
        <div class="facility-box">
          <div class="facility-icon">
            <i class="fas fa-plane"></i>
          </div>
          <p>FREE SHIPPING WORLD WIDE</p>
        </div>

        <div class="facility-box">
          <div class="facility-icon">
            <i class="fas fa-credit-card"></i>
          </div>
          <p>100% MONEY BACK GUARANTEE</p>
        </div>

        <div class="facility-box">
          <div class="facility-icon">
            <i class="far fa-credit-card"></i>
          </div>
          <p>MANY PAYMENT GATWAYS</p>
        </div>

        <div class="facility-box">
          <div class="facility-icon">
            <i class="fas fa-headset"></i>
          </div>
          <p>24/7 ONLINE SUPPORT</p>
        </div>
      </div>
    </section>
  );
};

export default Moving;
