import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesOpt from './../../config/Particles.json'


const Hero = () => {

    const particlesInit = async (main) => {
        await loadFull(main);
      };
    
      const particlesLoaded = (container) => {
        console.log(container);
      };
    
    return (
        <section className="simple-head" data-stellar-background-ratio="0.5" id="hme">
            {/* <!-- Particles --> */}
            {/* <div id="particles-js"></div> */}
            <Particles
                id="particles-js"
                className="lg:tw-h-[600px]"
                init={particlesInit}
                loaded={particlesLoaded}
                options={particlesOpt}
            />
            <div className="position-center-center">
                <div className="container text-center">
                    <h1 className="tw-text-[42px]">Albino </h1>
                    <p>An Innovative NFT & Metaverse
                        platform</p>
                    <a href="./whitepaper.pdf" className="btn btn-inverse">View White Paper</a>
                </div>
            </div>
        </section>
    )
}

export default Hero