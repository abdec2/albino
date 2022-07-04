
const HeaderComponent = () => {

  return (

    <header className="sticky">
      <div className="container">

        <div className="logo"> <a href="/"><img className="img-responsive" src="images/logo.png" alt="" /></a> </div>
        <nav className="navbar ownmenu navbar-expand-lg">
          <button className="navbar-toggler collapsed tw-bg-white tw-translate-y-5" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="nav">
              <li className="scroll"><a href="#hme">Home</a></li>
              <li className="scroll"> <a href="#about">About </a> </li>
              <li className="scroll"> <a href="#token">Token</a> </li>

              <li className="scroll"> <a href="#roadmap">Road Map</a> </li>

              <li className="scroll"> <a href="./whitepaper.pdf">Whitepaper</a> </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="clearfix"></div>
    </header>

  )
}

export default HeaderComponent