import React from 'react'
// import './cursor'

const Hero = () => {
    return (
        <section className='ba__hero w-full cursor-none'>
            <div id="cursor" className=' absolute'>
                <div className="video-player_cursor text-center">
                    <div className="video-player_cursor__label w-[100px] h-[100px] bg-bawhite-400 rounded-full flex justify-center items-center">
                        <span className='text-center inline-block uppercase font-semibold text-[14px] leading-[20px]'>Watch <br /> Reel</span>
                    </div>
                    <span className="cursor_bottom text-center inline-block text-bawhite-400 text-[14px] font-semibold">BASIC/DEPT® <br /> 2010-∞</span>
                </div>
            </div>
            <div>
                <video className='h-screen w-full object-cover' src="https://cdn.sanity.io/files/8nn8fua5/production/c6fb986a862cbe643c40cbdd0318ebc495efb187.mp4" preload="yes" autoPlay muted loop playsInline ></video>
            </div>
        </section>
    )
}

export default Hero