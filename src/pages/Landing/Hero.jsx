import heroImage from "../../assets/hero.jpg"
import "./style.css"
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, []);
  return (
    <section className="hero">
        <h2 data-aos="zoom-in">The Future of the</h2>
        <h1 data-aos="zoom-in">World of Agriculture</h1>
        <p>We are a group of individuals, working on a hackathon project to help and empower Agricultural Micro-Entrepreneur</p>
        <img src={heroImage} alt="hero"/>
    </section>
  )
}
