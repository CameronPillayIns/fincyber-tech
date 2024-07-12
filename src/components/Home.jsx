import React from "react";
import Hero from "./Hero";
import { brandsLogo } from "../data/brands";
import Slider from "./Slider";
import Features from "./Features";
import DueDil from "./DueDil";
import Institutes from "./Institutes";
import Partners from "./Partners";
import LearnMore from "./LearnMore";
import Footer from "./Footer";
import Footer2 from "./Footer2";
import ContactButton from "./ContactButton";
import CookieConsent, { Cookies } from "react-cookie-consent";

const Home = () => {
  return (
    <div>
      <ContactButton />
      <div className="hero">
        <Hero />
      </div>

      <CookieConsent
        debug={true}
        location="bottom"
        style={{ background: "#000", textAlign: "left" }}
        buttonStyle={{ color: "#000", background: "#fff", fontSize: "14px" }}
        buttonText="Accept"
        expires={365}
      >
       
        Cookies see our <a href="/privacy">privacy policy</a>
      </CookieConsent>

      <DueDil />
      <div className="brands  py-32">
        <h4 className="text-white text-center text-4xl font-extrabold   sm:text-2xl mb-8">
          Brands that rely on Fincyber
        </h4>
        {/* <Features /> */}
        <Slider images={brandsLogo} />
      </div>
      <div className="">
        
        <Institutes />
      </div>
      <div className="skew">
        <Partners />
      </div>
      <div>
        <LearnMore />
      </div>
      <div className="footer">
        <Footer />
        <Footer2 />
      </div>
    </div>
  );
};

export default Home;
