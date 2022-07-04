
const Token = () => {
    return (
        <section className="distri drk padding-top-150 padding-bottom-150 " id="token">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <h3>TOKENOMICS</h3>
                        <p>Token Distribution</p>

                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0"
                                aria-valuemax="150"><span>9,000,000 <small>50%</small></span> </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <h6> Now Distribution</h6>
                                <span>2,000,000</span>
                            </div>
                            <div className="col">
                                <h6> 99,910</h6>
                                <span>ETH Received</span>
                            </div>
                            <div className="col">
                                <h6> 99,910</h6>
                                <span>BTC Received</span>
                            </div>
                        </div>

                        <div className="countdown">
                            <h6>Current Distribution Section End 150/350</h6>
                            <ul className="row">
                                <li className="col-md-3">
                                    <article><span className="seconds">5%</span>
                                        <p className="seconds_ref">ABO Advisory Board</p>
                                    </article>
                                </li>
                                <li className="col-md-3">
                                    <article><span className="seconds">10%</span>
                                        <p className="seconds_ref">Management</p>
                                    </article>
                                </li>

                                <li className="col-md-3">
                                    <article><span className="seconds">20%</span>
                                        <p className="seconds_ref">Private sale</p>
                                    </article>
                                </li>
                                <li className="col-md-3">
                                    <article><span className="minutes">15%</span>
                                        <p className="minutes_ref">Developer Testnet</p>
                                    </article>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-5">
                        <h3>Distribution Section </h3>
                        <p>ICO Crypto token will be released on the basis of Ethereum and Bitocin platform.</p>
                        <div className="countdown-all">
                            <ul className="row">
                                <li className="col-md-3">
                                    <article> <span className="days">20%</span>
                                        <p className="days_ref">Marketing</p>
                                    </article>
                                </li>
                                <li className="col-md-3">
                                    <article> <span className="hours">10%</span>
                                        <p className="hours_ref">Airdrop</p>
                                    </article>
                                </li>
                                <li className="col-md-3">
                                    <article><span className="seconds">20%</span>
                                        <p className="seconds_ref">Staking</p>
                                    </article>
                                </li>
                            </ul>
                            <a href="#." className="btn">Join Us</a> <a href="#." className="btn btn-inverse">Buy Now</a>
                            <div className="card-info">
                                <i className="fab  fa-bitcoin"></i>
                                <i className="fab  fa-cc-discover"></i> 
                                <i className="fab  fa-cc-visa"></i> 
                                <i className="fab  fa-cc-mastercard"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Token