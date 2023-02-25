import React from "react";
import "./css/Popup.css";
import { Link } from "react-router-dom";
const Popup = () => {
  return (
    <div class="popup">
      <div class="popup-content">
        <div class="popup-close">
          <i class="fas fa-times"></i>
        </div>
        <div class="popup-left">
          <div class="popup-img">
            <img src="./images/cat2.jpg" alt="popup" />
          </div>
        </div>
        <div class="popup-right">
          <div class="right-content">
            <h1>
              Get Discount <span>30%</span> Off
            </h1>
            <p>
              Sign up to our blogletter and save 30% for you next purchase. No
              spam, we promise!
            </p>
            <form action="#">
              <input
                type="email"
                placeholder="Enter your email..."
                class="popup-form"
              />
              <Link href="#">Subscribe</Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
