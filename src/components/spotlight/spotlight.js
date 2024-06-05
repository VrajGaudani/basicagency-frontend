import React from 'react'
import { Link } from 'react-router-dom'
import './bgChange'

const Spotlight = () => {
    return (
        <section id='spotlight' className='ba__spotlight color-dark my-[10vw]' data-textcolor="#F9CDCD" data-bgcolor="#252422">
            <div className="bacontainer">
                <div className="flex">
                    <div className="basis-3/6">
                        <div className="ba__spotlight_left sticky top-2">
                            <h3 className='text-[6.5vw] font-bold leading-[0.9] uppercase tracking-[-.05em]'>BASIC/DEPT® helps brands ● connect w/ culture</h3>
                            <span className="text-lg uppercase mt-6 inline-block"> Adweek
                                <strong> Agency Spotlight</strong>
                                <p className='mt-20'><Link className="btn_before" to="/about">About Us</Link></p>
                            </span>
                        </div>
                    </div>
                    <div className="basis-3/6">
                        <div className="ba__spotlight_right">
                            <video className='h-full w-full object-cover' src="https://cdn.sanity.io/files/8nn8fua5/production/e4a840ba8dfeded08ac4d0ba6e930be56fc68e3b.mp4" preload="yes" autoPlay muted loop playsInline ></video>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Spotlight