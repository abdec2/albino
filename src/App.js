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

function App() {

  useEffect(() => {
    $(".sticky").sticky({ topSpacing: 0 });
    $("#loader").delay(500).fadeOut("slow");
    // $('.full-screen').superslides({});
    // $('.countdown').downCount({
    //   date: '12/12/2018 12:00:00' // M/D/Y
    // });
    // $('.countdown-all').downCount({
    //   date: '12/12/2020 12:00:00' // M/D/Y
    // });
    // $('.counter').counterUp({
    //   delay: 50,
    //   time: 2000
    // });
    // $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    //   disableOn: 700,
    //   type: 'iframe',
    //   mainClass: 'mfp-fade',
    //   removalDelay: 160,
    //   preloader: false,
    //   fixedContentPos: false
    // });

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
          <NFT />
          <Metaverse />
          <WhyChoose />
          <Token />
          <Roadmap />
          <Community />
        </div>
      </div>
    </div>
  );
}

export default App;
