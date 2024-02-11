import React from "react";
import lender from "../../assets/lender.png";
import "./style.css";

export const AboutUs = () => {
  const content = [
    {
      image: lender,
      title: "Easy Lending",
      passage:
        "Accessing loans through our platform is incredibly straightforward. Simply log in, share your CIBIL score, and relax - we take care of the rest, hassle-free.",
    },
    {
      image: lender,
      title: "Daily Reminders",
      passage:
        "Keep your loan repayments in check with our handy reminders. Input your schedule, and we'll ensure timely payments, making your financial life hassle-free.",
    },
    {
      image: lender,
      title: "Quick Savings",
      passage:
        "Effortlessly track your expenses with our user-friendly feature, simplifying your saving goals and financial management. Thinks makes keeping tab of your loans more easier.",
    },
  ];
  return (
    <section className="about">
      <div className="about-text">
        <h2>ABOUT US</h2>
        <div className="about-subtext">
          <h3 >Connecting You to the Heart of Agriculture</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis vero
            minima ratione omnis, itaque pariatur esse tempora consequuntur.
            Vero, atque! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Nobis vero
          </p>
        </div>
        <div className="cards-about-section" data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
          {content.map((content) => {
            return (
              <>
                <div className="card-about">
                  <div className="image-border img-sm-disp">
                    <div>
                      <img src={content.image} alt={content.title} />
                    </div>
                  </div>
                  <h2>{content.title}</h2>
                  <p>{content.passage}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};
