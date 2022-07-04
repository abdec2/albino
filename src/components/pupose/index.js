import easy from './../../assets/easy.svg'
import blockchain from './../../assets/blockchain.svg'
import game from './../../assets/game.svg'
const Purpose = () => {
    return (
        <section className="why-choose tw-py-32">
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <div className="heading margin-bottom-20">
                            <h4 className="margin-bottom-10">PURPOSES OF OUR PLATFORM</h4>
                        </div>
                    </div>
                </div>

                <div className="row tw-space-y-4 lg:tw-space-y-0">
                    <div className="col-lg-3">
                        <div className="card tw-min-h-full p-4 tw-rounded-2xl tw-shadow-xl">
                            <div className="ib-info">
                                <div className='tw-w-10 tw-mb-2'>
                                    <img src={easy} alt="" />
                                </div>
                                <h4 className="tw-text-base tw-font-bold tw-mb-4">The first easy-to-use gaming
                                    cryptocurrency
                                </h4>
                                <p>Metaverse is the world's first cryptocurrency designed just for online investors in metaverse with a fair advantage. In the most popular gaming community-building platform online, you may earn and sell virtual items
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3">
                        <div className="card tw-min-h-full p-4 tw-rounded-2xl tw-shadow-xl">
                            <div className="ib-info">
                                <div className='tw-w-10 tw-mb-2'>
                                    <img src={blockchain} alt="" />
                                </div>
                                <h4 className="tw-text-base tw-font-bold tw-mb-4">Virtual Goods on the
                                    Blockchain
                                </h4>
                                <p>A platform for managing, distributing, and
                                    trading virtual products. Gamers and
                                    content providers will benefit from a new
                                    system of virtual ownership.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3">
                        <div className="card tw-min-h-full p-4 tw-rounded-2xl tw-shadow-xl">
                            <div className="ib-info">
                                <div className='tw-w-10 tw-mb-2'>
                                    <img src={game} alt="" />
                                </div>
                                <h4 className="tw-text-base tw-font-bold tw-mb-4">A new gaming experience with
                                    real ownership & value</h4>
                                <p>As they play, online gamers may bring or
                                    transfer their assets from game to game,
                                    community to community, increasing the value
                                    of their digital wallet.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3">
                        <div className="card tw-min-h-full p-4 tw-rounded-2xl tw-shadow-xl">
                            <div className="ib-info">
                                <div className='tw-w-10 tw-mb-2'>
                                    <img src={easy} alt="" />
                                </div>
                                <h4 className="tw-text-base tw-font-bold tw-mb-4">A solution to Fraud & High
                                    Fees</h4>
                                <p>Every legit virtual item purchase results in
                                    the loss of 7.5 things due to fraud. Tokens
                                    will establish trust and security issues when
                                    there will be loss of token
                                    .</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Purpose