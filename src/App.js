import { useEffect, useLayoutEffect } from 'react';
import './App.css';
import HeaderComponent from './components/header'
import $ from "jquery";
import { sticky } from 'jquery-sticky'

// Page Components
import Hero from './components/hero'
import Introduction from './components/intro'
import Mission from './components/mission'
import Vision from './components/vision'
import Purpose from './components/pupose'
import Benefits from './components/benefits'
import NFT from './components/nft'
import Metaverse from './components/metaverse'
import WhyChoose from './components/whychoose'
import Token from './components/token'
import Roadmap from './components/roadmap'
import Community from './components/community'
import GotoTop from './components/gotoTop';
import Footer from './components/footer'
import Team from './components/team';

function App() {

  useEffect(() => {
    $(".sticky").sticky({ topSpacing: 0, zIndex: 12 });
    $("#loader").delay(500).fadeOut("slow");
   

  }, [])
  return (
    <div className="App ">
      <div id="loader">
        <div className="position-center-center">
          <div className="ldr"></div>
        </div>
      </div>
      <div id="wrap">
        <HeaderComponent />
        <Hero />
        <div id="content">
          <Introduction />
          <Mission />
          <Vision />
          <Purpose />
          <Benefits />
          {/* <NFT />
          <Metaverse />
          <WhyChoose /> */}
          <Token />
          <Roadmap />
          <Team />
          <Community />
          <Footer />
          <GotoTop />
        </div>
      </div>
    </div>
  );
}

export default App;
