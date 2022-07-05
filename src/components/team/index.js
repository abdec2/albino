import React from 'react'

import img1 from './../../assets/1.jpg'
import img2 from './../../assets/2.jpg'
import img3 from './../../assets/3.jpg'
import img4 from './../../assets/4.jpg'
import img5 from './../../assets/5.jpg'

const Team = () => {
    return (
        <section className="tw-text-gray-600 tw-body-font" id="team">
            <div className="container tw-px-5 tw-py-24 tw-mx-auto">
                <div className="tw-flex tw-flex-col tw-text-center tw-w-full tw-mb-20">
                    <h1 className="tw-uppercase tw-text-4xl tw-font-semibold">EXECUTIVE TEAM</h1>
                </div>
                <div className="tw-flex tw-flex-wrap -tw-m-4 tw-mx-auto">
                    <div className="tw-p-4 tw-w-full lg:tw-w-1/3 md:tw-w-1/2">
                        <div className="tw-h-full tw-flex tw-flex-col tw-items-center tw-text-center card tw-p-4 tw-shadow-xl">
                            <img alt="team" className="tw-flex-shrink-0 tw-rounded-lg tw-w-full tw-h-80 tw-object-cover tw-object-top tw-mb-4 hover:tw-scale-110" src={img1} />
                                <div className="tw-w-full">
                                    <h2 className="title-font tw-font-medium tw-text-lg tw-text-gray-900 tw-mb-2">Prasenjit Das</h2>
                                    {/* <h3 className="tw-text-gray-500 tw-mb-3">UI Developer</h3> */}
                                    <span className="tw-inline-flex">
                                        <a className="tw-text-gray-500">
                                            <svg viewBox="0 0 448 512" className="tw-w-5 tw-h-5"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>
                                        </a>
                                    </span>
                                </div>
                        </div>
                    </div>
                    
                    <div className="tw-p-4 tw-w-full lg:tw-w-1/3 md:tw-w-1/2">
                        <div className="tw-h-full tw-flex tw-flex-col tw-items-center tw-text-center card tw-p-4 tw-shadow-xl">
                            <img alt="team" className="tw-flex-shrink-0 tw-rounded-lg tw-w-full tw-h-80 tw-object-cover tw-object-top tw-mb-4 hover:tw-scale-110" src={img2} />
                                <div className="tw-w-full">
                                    <h2 className="title-font tw-font-medium tw-text-lg tw-text-gray-900 tw-mb-2">Nripendra Bhattacharjee</h2>
                                    {/* <h3 className="tw-text-gray-500 tw-mb-3">UI Developer</h3> */}
                                    <span className="tw-inline-flex">
                                        <a href="https://www.linkedin.com/in/nripendra-narayan-bhattacharjee-a03776a9/" target="_blank" className="tw-text-gray-500">
                                            <svg viewBox="0 0 448 512" className="tw-w-5 tw-h-5"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>
                                        </a>
                                    </span>
                                </div>
                        </div>
                    </div>

                    <div className="tw-p-4 tw-w-full lg:tw-w-1/3 md:tw-w-1/2">
                        <div className="tw-h-full tw-flex tw-flex-col tw-items-center tw-text-center card tw-p-4 tw-shadow-xl">
                            <img alt="team" className="tw-flex-shrink-0 tw-rounded-lg tw-w-full tw-h-80 tw-object-cover tw-object-center tw-mb-4 hover:tw-scale-110" src={img3} />
                                <div className="tw-w-full">
                                    <h2 className="title-font tw-font-medium tw-text-lg tw-text-gray-900 tw-mb-2">Md Asanur Rahaman</h2>
                                    {/* <h3 className="tw-text-gray-500 tw-mb-3">UI Developer</h3> */}
                                    <span className="tw-inline-flex">
                                        <a href="https://www.linkedin.com/in/md-asanur-rahaman-089734191/" target="_blank" className="tw-text-gray-500">
                                            <svg viewBox="0 0 448 512" className="tw-w-5 tw-h-5"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>
                                        </a>
                                    </span>
                                </div>
                        </div>
                    </div>

                    <div className="tw-p-4 tw-w-full lg:tw-w-1/3 md:tw-w-1/2">
                        <div className="tw-h-full tw-flex tw-flex-col tw-items-center tw-text-center card tw-p-4 tw-shadow-xl">
                            <img alt="team" className="tw-flex-shrink-0 tw-rounded-lg tw-w-full tw-h-80 tw-object-cover tw-object-top tw-mb-4 hover:tw-scale-110" src={img4} />
                                <div className="tw-w-full">
                                    <h2 className="title-font tw-font-medium tw-text-lg tw-text-gray-900 tw-mb-2">Nirmla Debnath</h2>
                                    {/* <h3 className="tw-text-gray-500 tw-mb-3">UI Developer</h3> */}
                                    <span className="tw-inline-flex">
                                        <a href="https://www.linkedin.com/in/nirmla-debnath-5544b5244/" target="_blank" className="tw-text-gray-500">
                                            <svg viewBox="0 0 448 512" className="tw-w-5 tw-h-5"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>
                                        </a>
                                    </span>
                                </div>
                        </div>
                    </div>

                    <div className="tw-p-4 tw-w-full lg:tw-w-1/3 md:tw-w-1/2">
                        <div className="tw-h-full tw-flex tw-flex-col tw-items-center tw-text-center card tw-p-4 tw-shadow-xl">
                            <img alt="team" className="tw-flex-shrink-0 tw-rounded-lg tw-w-full tw-h-80 tw-object-cover tw-object-top tw-mb-4 hover:tw-scale-110" src={img5} />
                                <div className="tw-w-full">
                                    <h2 className="title-font tw-font-medium tw-text-lg tw-text-gray-900 tw-mb-2">Prasanta Debnath</h2>
                                    {/* <h3 className="tw-text-gray-500 tw-mb-3">UI Developer</h3> */}
                                    <span className="tw-inline-flex">
                                        <a href="https://www.linkedin.com/in/prasanta-debnath-331036244/" target="_blank" className="tw-text-gray-500">
                                            <svg viewBox="0 0 448 512" className="tw-w-5 tw-h-5"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>
                                        </a>
                                    </span>
                                </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </section>
    )
}

export default Team