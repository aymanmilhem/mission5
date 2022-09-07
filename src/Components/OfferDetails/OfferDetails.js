import React from "react";
import classes from "./OfferDetails.module.css";

function OfferDetails() {
  return (
    <div className={classes.offerDetails}>
      <div className={classes.details}>
        <h1>You're in safe hands with Turners</h1>
        <p>
          Enjoy exclusive benefits and the confidence that they're covered with
          buying insurance through Turners
        </p>
        <br></br>
        <div className={classes.comprehensiveDetails}>
          <section className={classes.comprehensiveDetails__top}>
            <img
              alt="man poking out of driver's window"
              src="images/comprehensive_details_image_1.png"
            ></img>
            <div className={classes.comprehensiveDetailsText}>
              <h3>Trust the insurance you've bought</h3>
              <p>
                we partner with award winning Tower Insurance.
                <br></br>
                From utes to EVs - insure your car with confidence with
                Canstar's Car insurer of the year and winner of Outstanding
                Value Car Insurance 2021.
                <br></br>
                Towers financial strength rating is A- (Excellent), so you can
                rest assured knowing you're in safe hands.
              </p>
            </div>
          </section>
          <br></br>

          <section className={classes.comprehensiveDetails__top}>
            <div className={classes.comprehensiveDetailsText}>
              <h3>Get in a crash? Help is here 24/7 - give us a call</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
                nostrum illo officiis libero dignissimos eos expedita. Adipisci
                earum, culpa quam suscipit incidunt nostrum officiis omnis hic
                beatae ipsa dolorem modi.
                <br></br>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
                voluptatibus doloremque officia dolore mollitia voluptates
                soluta eaque reiciendis, nihil atque rem quam laboriosam nostrum
                iusto ea perspiciatis placeat necessitatibus? Quos.
              </p>
            </div>
            <img
              alt="man on mobile phone"
              src="images/comprehensive_details_image_2.png"
            ></img>
          </section>
          <br></br>
          <br></br>
          <section className={classes.comprehensiveDetails__top}>
            <img
              alt="man smiling at mobile phone"
              src="images/comprehensive_details_image_3.png"
            ></img>
            <div className={classes.comprehensiveDetailsText}>
              <h3>Simple and Easy Claims Process.</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Blanditiis aspernatur corporis voluptatem commodi veritatis,
                error est minus at sapiente dolor maxime voluptate sunt libero
                perferendis officiis, ipsa nulla! Impedit, provident?
                <br></br>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                dolores hic cum? Esse laborum in dolor architecto illo unde
                neque vero atque cupiditate repudiandae, quisquam repellendus
                dicta natus fugit at.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default OfferDetails;
