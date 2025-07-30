import React from "react";
import "./two.css";
import "./cardd.css";
import Background from "./background";
import Sgn from "./Sgn.jsx";
import {BrowserRouter, Link, NavLink } from "react-router-dom";

export default function Two() {
  return (
    <div id="mainContainer">
      <header>
{/* <BrowserRouter>
    <div>
        <nav>
          <ul>
            <Link to="/" id="homepage">HOME</Link>
            <Link to="/about_us" id="aboutpage">ABOUT US</Link>
            <NavLink to="/contact_us" id="contactpage">CONTACT US</NavLink>
            <Link to="/services" id="servicespage">SERVICES</Link>
          </ul>
        </nav>
      </div>
      </BrowserRouter> */}
      <Sgn />
       <Background />
      </header>
      <div id="photo">
        <p id="first">
          <strong id="ph"> Discover The Taste</strong>
        </p>
        <h2 id="second">We believe good food offer great smile</h2>
        {/* <p id="third">Ut emin ad minim veniam,quis nostrud exercitation ullamco labororis nisi ut aliquip ex ea command conesequat is aute irure.</p> */}
        <h2 id="third">"YOUR NEXT MEAL, JUST A TAP AWAY"</h2>
        {/* <button id="butt2"> Reservation</button> */}
        <button id="butt2">Reservation</button>
      </div>
      <div id="three">
        <p id="seventh">₹800</p>
        <p id="eigth">Delicious Food</p>
        <p id="ninth">
          "A Perfect Balance of Comfort & Creativity.<br></br>Delicious meals,
          delivered to your door."
        </p>
        {/* <!-- <button id="butt3"> OrderNow </button> --> */}
      </div>
      <div id="four">
        <p id="tenth">Our Offered Menu</p>
        <p id="ten">
          Some Trendy And Popular
          <br />
          Courses Offered
        </p>
        <div id="gallery">
          {/*--1st cards--*/}
          <div className="cards">
            <div className="image">
              <img src="https://blog.eatfit.in/wp-content/uploads/2023/03/image-43-1024x576.png" />
            </div>
          </div>
          {/*--2nd cards--*/}
          <div className="cards">
            <div className="image">
              <img src="https://images.healthshots.com/healthshots/hi/uploads/2024/01/10182004/siddu.jpg" />
            </div>
          </div>
          {/*3rd card */}
          <div className="cards">
            <div className="image">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScKcgdp3Mp0xzWMKN6gvq2d_H32vXnmAnCVg&s" />
            </div>
          </div>
        </div>
      </div>
      <div id="five">
        <p id="twelth">
          <strong> About Our Restraunt</strong>
        </p>
        <p id="thirteen">We Provide Good Food For Your Family!</p>
        <p id="fourteen">
          Ut enim acgsd minim veniam, quxics nostrud exerction <br />
          ullamco laboris nisi ufsit aliquid ex ea commodo consequat is <br />
          aute irure m,quis nostrud exer
        </p>
        <button id="butt4">Learn More</button>
      </div>
      <div id="six">
        <p id="sixteen">Our Offered Menu</p>
        <p id="seventeen">
          {" "}
          Some Trendy And Popular
          <br />
          Courses Offered
        </p>
        <div id="zero">
          <div className="child">
            <br />
            <i className="fa-solid fa-chess-queen fa-2xl" />
            <br />
            <br />
            <h3>CHEF</h3>
            <br />
            <p>
              Chefs may manage large teams, <br />
              oversee multiple restaurants, and
              <br /> collaborate with various stakeholders.
              <br />
              Chefs usually train with a reputable <br />
              chef or get a culinary degree.They <br />
              demonstrate knowledge of culinary
              <br /> techniques and practices.{" "}
            </p>
          </div>
          <div className="chil">
            <i className="fa-solid fa-bowl-food fa-2xl" />
            <br />
            <br />
            <h3>FOOD</h3>
            <br />
            <p>
              The main nutrients in food are
              <br /> carbohydrates, proteins, fats,
              <br /> vitamins, minerals, fiber, and water.
              <br />
              Food quality is important
              <br /> because contaminated food <br />
              can cause foodborne illnesses
              <br /> that can lead to hospitalization <br />
              and even death.{" "}
            </p>
          </div>
          <div className="chi">
            <i className="fa-solid fa-wheat-awn-circle-exclamation fa-2xl" />
            <br />
            <br />
            <h3>QUALITY</h3>
            <br />
            <p>
              It includes a food's taste, freshness, <br />
              appearance, and nutritional value. <br />
              These food quality attributes
              <br /> include: Appearance (including size,
              <br /> shape, colour, gloss and consistency) <br />
              Texture.Food quality is important because
              <br /> contaminated food can cause foodborne
              <br /> illnesses that can lead to hospitalization and <br />
              even death.{" "}
            </p>
          </div>
        </div>
      </div>
      <div id="seven">
        <p id="eighteen">
          <strong> About Our Restaurant</strong>
        </p>
        <p id="nineteen">
          We Provide Good Food <br /> For Your Family!
        </p>
        <p id="twenty">
          Ut enim acgsd minim veniam, quxics nostrud exerction <br />
          ullamco laboris nisi ufsit aliquid ex ea commodo consequat is <br />
          aute irure m,quis nostrud exer
        </p>
        <br />
        <br />
        <br />
        <div className="mail">
          <form action="#" method="post">
            <input type="email" name="email" id="email" required="" />
            <button id="butt5" type="submit">
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
      <div id="eight">
        <p id="twentyone">
          <strong>About Our Restaurant</strong>
        </p>
        <p id="twentytwo">Book A Table</p>
        <br />
        <br />
        <br />
        <br />
        <div id="twentythree">
          <div className="book">
            <form action="/submit-booking" method="POST">
              <div className="form-group">
                <label htmlFor="num-people">NO. of Seats</label>
                <input
                  type="number"
                  id="num-people"
                  name="num_people"
                  min={1}
                  max={20}
                  required
                />
              </div>
              <div className="form-group2">
                <label htmlFor="date">DATE</label>
                <input type="date" id="date" name="date" required="" />
              </div>
              <div className="form-group3">
                <label htmlFor="time">TIME</label>
                <input type="time" id="time" name="time" required="" />
              </div>
            </form>
          </div>
          <button id="now">Book</button>
        </div>
      </div>
    </div>
  );
}
