import React from 'react'
import cs1 from '../../assets/cs1.webp'
import cs2 from '../../assets/cs2.webp'
import { Link } from 'react-router-dom'

const CaseStudy = () => {
    return (
        <section className='ba__casestudy mb-56'>
            <div className="bacontainer">
                <div className="flex gap-5">
                    <div className="ba__casestudy_item basis-4/12 group">
                        <Link to=''>
                            <div className="case_study_img overflow-hidden">
                                <img src={cs1} alt="" className='scale-105 transition-all duration-300 group-hover:scale-100' />
                            </div>
                            <div className="casestudy_text pt-4">
                                <h5 className='text-2xl font-semibold uppercase group-hover:underline'>Patagonia</h5>
                                <p className='mt-2 text-xs font-medium uppercase max-w-[50%]'>An eCommerce experience driven by Patagonia’s brand mission</p>
                            </div>
                        </Link>
                    </div>
                    <div className="ba__casestudy_item basis-4/12 group">
                        <Link to=''>
                            <div className="case_study_img overflow-hidden">
                                <img src={cs2} alt="" className='scale-110 transition-all duration-300 group-hover:scale-100' />
                            </div>
                            <div className="casestudy_text pt-4">
                                <h5 className='text-2xl font-semibold uppercase group-hover:underline'>Wilson</h5>
                                <p className='mt-2 text-xs font-medium uppercase max-w-[50%]'>A century-old sports brand finding its place in culture</p>
                            </div>
                        </Link>
                    </div>
                    <div className="ba__casestudy_item basis-4/12 group">
                        <Link to=''>
                            <div className="case_study_img overflow-hidden">
                                <video className='h-full w-full object-cover scale-110 transition-all duration-300 group-hover:scale-100' src="https://cdn.sanity.io/files/8nn8fua5/production/9dc5a490bd877e8685f2089209db192188dd21e7.mp4" preload="yes" autoPlay muted loop playsInline ></video>
                            </div>
                            <div className="casestudy_text pt-4">
                                <h5 className='text-2xl font-semibold uppercase group-hover:underline'>Google Store</h5>
                                <p className='mt-2 text-xs font-medium uppercase max-w-[50%]'>An eCommerce experience helping Google bring its hardware to people across the globe</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CaseStudy