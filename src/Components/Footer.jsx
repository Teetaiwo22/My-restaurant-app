import React from "react";

const Footer = () => {
  return (
    <div class="container text-center pt-5">
      <div class="row">
        <div class="col">
          <h5>Location</h5>
          <p>100 Cherry street, <br />Vitoria island </p>
        </div>

        <div class="col">
          <h5>Contact</h5>
          <p>Email: info@yellowRestaurant.com</p>
          <p>Contact: 123-456-7890</p>
        </div>

        <div class="col">
          <h5>Social media handle</h5>
          <span className="icons"><i class="uil uil-twitter"></i></span>
          <span className="icons"><i class="uil uil-facebook"></i></span>
          <span className="icons"><i class="uil uil-linkedin"></i></span>
          <span className="icons"><i class="uil uil-instagram-alt"></i></span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
