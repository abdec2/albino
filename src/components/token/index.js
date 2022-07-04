import { useContext, useRef, useState } from "react"
import { GlobalContext } from './../../context/GlobalContext'
import CONFIG from './../../config/config.json'
import CROWDSALE_ABI from './../../config/CrowdSaleAbi.json';
import { ethers } from 'ethers';
import Web3Modal from 'web3modal';
import metamaskIcon from './../../assets/metamask.svg'
import polygonIcon from './../../assets/polygon.svg'
import './token.css'

const Token = ({ error }) => {

    const { account } = useContext(GlobalContext);
    const [loading, setLoading] = useState(false);

    const ethPrice = useRef(null);

    const addToken = async () => {
        const tokenAddress = CONFIG.TOKEN_CONTRACT_ADDRESS;
        const tokenSymbol = CONFIG.TOKEN_SYMBOL;
        const tokenDecimals = CONFIG.TOKEN_DECIMAL;
        const tokenImage = '';

        try {
            // wasAdded is a boolean. Like any RPC method, an error may be thrown.
            const wasAdded = await window.ethereum.request({
                method: 'wallet_watchAsset',
                params: {
                    type: 'ERC20', // Initially only supports ERC20, but eventually more!
                    options: {
                        address: tokenAddress, // The address that the token is at.
                        symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
                        decimals: tokenDecimals, // The number of decimals in the token
                        image: tokenImage, // A string url of the token logo
                    },
                },
            });

            if (wasAdded) {
                console.log('Thanks for your interest!');
            } else {
                console.log('Your loss!');
            }
        } catch (error) {
            console.log(error);
        }
    }

    const buyToken = async (e) => {
        try {
            e.preventDefault();
            if (!window.ethereum) {
                alert('Please install MetaMask');
                return
            }
            if (!account) {
                alert('Please connnect wallet');
                return;
            }

            if (error) {
                alert("something went wrong. please check the network.")
                return;
            }

            setLoading(true);
            const web3modal = new Web3Modal();
            const instance = await web3modal.connect();
            const provider = new ethers.providers.Web3Provider(instance);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(CONFIG.crowdsaleAddress, CROWDSALE_ABI, signer);
            const price = ethers.utils.parseEther(ethPrice.current.value);
            const balance = ethers.utils.formatEther(await provider.getBalance(signer.getAddress()));

            if (balance < ethPrice.current.value) {
                setLoading(false);
                alert('Insufficient Balance');
                return;
            }

            const transaction = await contract.buyTokens(account, { value: price.toString() });
            await transaction.wait();

            setLoading(false);
            alert('purchase done');
        } catch (e) {
            setLoading(false);
        }
    }
    return (
        <section className="distri drk padding-top-150 padding-bottom-150 " id="token">
            <div className="container">
                <div className="row tw-mb-8 ">
                    <div className="col-12">
                        <h1 className="tw-text-white tw-text-5xl tw-font-bold">TOKEN SALE</h1>
                    </div>
                </div>
                <div className="row align-items-center justify-content-between gutter-vr-50px tw-space-y-20 lg:tw-space-y-0">
                    <div className="col-lg-6">
                        <div className="row gutter-vr-30px tw-space-y-4">
                            <div className="col-sm-6">
                                <div className="" data-animate="fadeInUp" data-delay=".3">
                                    <h6 className="">Contract Address</h6>
                                    <p style={{ wordBreak: "break-all" }}>0x25d078698fED88aD2db07c923106b7D9625FafB8</p>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="" data-animate="fadeInUp" data-delay=".4">
                                    <h6 className="">Total Supply</h6>
                                    <p>99,000,000</p>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="" data-animate="fadeInUp" data-delay=".5">
                                    <h6 className="">Network</h6>
                                    <p>Polygon Network</p>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="" data-animate="fadeInUp" data-delay=".6">
                                    <h6 className="">Token Symbol</h6>
                                    <p>ABO</p>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="" data-animate="fadeInUp" data-delay=".7">
                                    <h6 className="">Decimal</h6>
                                    <p>18</p>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="" data-animate="fadeInUp" data-delay=".8">
                                    <h6 className="">Minimal transaction amount</h6>
                                    <p>1 Matic</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="token-status token-status-s5 games-bg round tw-text-left" data-animate="fadeInUp" data-delay=".9">
                            <div className="tw-flex tw-items-center tw-justify-between tw-mb-4 tw-space-x-2">
                                <button className='tw-w-1/2 tw-truncate tw-text-white tw-flex tw-flex-row tw-items-center tw-justify-center tw-px-4 tw-py-1 tw-border tw-border-white btn-round metamask-bg on-bg-theme' onClick={() => addToken()}>
                                    <img className="metamask-width tw-mr-2" src={metamaskIcon} alt="metamask" />
                                    Add Albino
                                </button>
                                <button className='tw-w-1/2 tw-truncate tw-text-white tw-flex tw-flex-row tw-items-center tw-justify-center tw-px-4 tw-py-1 tw-border tw-border-white btn-round metamask-bg on-bg-theme'>
                                    <img className="metamask-width tw-mr-2" src={polygonIcon} alt="metamask" />
                                    Connect Wallet
                                </button>
                            </div>
                            <form onSubmit={buyToken}>
                                <div className="mb-3">
                                    <label className="tw-text-white">Amount in Matic</label>
                                    <input ref={ethPrice} type="text" className="tw-w-full tw-h-12 tw-rounded tw-p-2 txtBoxAmount" required />
                                </div>
                                <div className="mb-3">
                                    <label className="tw-text-white">Rate</label>
                                    <input className="tw-w-full tw-h-12 tw-rounded tw-p-2 tw-text-white" type="text" value="0.216666667" disabled />
                                </div>

                                <div className="mt-4">
                                    <button disabled={loading} className="tw-w-full tw-py-2 tw-px-6 btnBuy">{loading ? 'Busy' : 'Buy'}</button>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Token