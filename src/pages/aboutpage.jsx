import {useState} from "react";
import "./aboutpage.css";
function AboutPage (props){

return(
  <>
  <div className="aboutHerocontain">
    <div className="heroAboutImg">
      <img src="https://CeceliaBloom.github.io/final_project/heroimageaboutpage.png"></img>
    </div>{/*heroAboutImg*/}
  </div>{/*aboutHerocontain*/}

  <div className="aboutIntroText">
  At Crème Soda, we believe in turning ordinary moments into extraordinary experiences. 
  Our sparkling beverage is not just a drink; it's a delightful twist on your favorite treats. 
  </div>{/*aboutIntroText*/}

  <div className="aboutCompanyContain">
    <div className="companyFlex">
      <div className="companyImg">
        <img src ="https://CeceliaBloom.github.io/final_project/aboutpageimg.jpg"></img>
      </div>{/*companyImg*/}
      <div className="compInfoTextContain">
        <div className="storyContain">
            <div className="title">
            Our Story:</div>{/*title*/}
            <div className="mainText">
            Crème Soda was born out of a passion for bringing joy and 
            nostalgia to your beverage experience. The founders set out to create a product that captures the essence of carefree moments and timeless indulgence. The result is a sparkling beverage that redefines refreshment.
            </div>{/*mainText*/}
        </div>{/*storyContain*/}

        <div className="missionContain">
            <div className="title">
            Our Mission:
            </div>{/*title*/}
            <div className="mainText">
            At Crème Soda, our mission is to bring a smile to your face with every sip. We are committed to quality, innovation, and a touch of whimsy in everything we do. Join us in rediscovering the joy of simple pleasures, one Crème Soda at a time.
            </div>{/*mainText*/}
        </div>{/*missionContain*/}

        <div className="connectContain">
            <div className="title">
            Connect With Us:
            </div>{/*title*/}
            <div className="mainText">
            We love hearing from our community! Whether you have a favorite flavor, a creative suggestion, or just want to share your Crème Soda moments, connect with us on social media. Your stories and feedback inspire us to continue crafting delightful beverages that elevate your everyday moments.
            </div>{/*mainText*/}
            <div className="connectSocails">
              <div className="aInstagram">
          <a target="_blank href">
            <img src="https://CeceliaBloom.github.io/final_project/instagram.png"></img></a>
            </div>
          <div className="aEmail">
          <a target="_blank href">
            <img src="https://CeceliaBloom.github.io/final_project/email.png">
            </img></a>
            </div>
            </div>{/*connectSocails*/}
        </div>{/*connectContain*/}
      </div>{/*compInfoTextContain*/}
    </div>{/*companyFlex*/}
  </div>{/*aboutCompanyContain*/}

  <div className="valuesContain">
    <div className="valuesFlex">
      <div className="valueOneInfo">
        <div className="valueTitle">
        Joyful Indulgence: 
        </div>
        <div className="valueText">
        At Crème Soda, we celebrate the joy of indulgence. We believe 
        in creating moments of happiness and delight through our sparkling beverages. Our commitment to bringing a smile to your face is at the core of everything we do.
        </div>{/*valueText*/}
      </div>{/*valueOneInfo*/}


      <div className="valueTwoInfo">
        <div className="valueTitle">
        Innovation with Tradition: 
        </div>
        <div className="valueText">
        We embrace the spirit of innovation while cherishing traditional flavors. Crème Soda is a testament to the perfect blend of old-fashioned charm and modern creativity. We continuously strive to surprise and delight your taste buds with inventive ice cream-inspired flavors.
        </div>{/*valueText*/}
      </div>{/*valueTwoInfo*/}

      <div className="valueThreeInfo">
        <div className="valueTitle">
        Quality Craftsmanship:
        </div>
        <div className="valueText">
        Quality is the foundation of Crème Soda. From the carefully selected ingredients to the meticulous crafting of each bottle, we are dedicated to delivering a premium beverage experience. We take pride in the craftsmanship that goes into every sip,ensuring you enjoy the highest quality product.
        </div>{/*valueText*/}
      </div>{/*valueThreeInfo*/}
    </div>{/*valuesFlex*/}
  </div>{/*valuesContain*/}
  </>
)}



export default AboutPage;