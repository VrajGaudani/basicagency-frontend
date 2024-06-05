import React from 'react'

const Clients = () => {
    return (
        <section className='ba__clients'>
            <div className="bacontainer">
                <div className="border-t border-bablack-400">
                    <div className="flex mt-5 text-sm">
                        <div className="basis-2/6"> <span> 00 </span></div>
                        <div className="flex justify-between basis-4/6">
                            <span>/05</span>
                            <span>●</span>
                        </div>
                    </div>
                </div>
                <h2 className='my-[80px] text-[40px] leading-[44px] font-bold uppercase'>Featured <br /> Engagements</h2>
                <div className="ba_client_slider">
                    <div className="slider w-full overflow-x-scroll pb-[80px]">
                        <div className="slider-container flex">
                            <div className="item basis-2/6 pr-[125px] shrink-0">
                                <div className="slider_img h-10">
                                    <img src="https://cdn.sanity.io/images/8nn8fua5/production/7121121ed910b145bdb6df487966a7888c2eb7c3-272x92.svg?w=720&fm=webp&q=65" className='max-h-full' alt="" />
                                </div>
                                <h5 className='clientBefore'>
                                    Google 
                                </h5>
                                <p className='mt-5 text-[17px] font-medium'>Our embedded partnership with Google is as deep as it gets. We’re the lead creative agency for Google Store and provide strategy, design, and prototyping to other divisions. Learn more about our partnership 
                                    <a href="" className='underline inline-block pl-[4px]'>here</a>
                                </p>
                            </div>
                            <div className="item basis-2/6 pr-[125px] shrink-0">
                                <div className="slider_img h-10">
                                    <img src="https://cdn.sanity.io/images/8nn8fua5/production/09a68ec6d03469bfd5bbb9726a58225acb900ae2-128x42.svg?w=720&fm=webp&q=65" className='max-h-full' alt="" />
                                </div>
                                <h5 className='clientBefore'>
                                    Kfc 
                                </h5>
                                <p className='mt-5 text-[17px] font-medium'>An award-winning global, digital transformation engagement spanning eCommerce, mobile app, and new drive thru experiences. Bringing KFC’s brand story to life while making it easier for customers to buy chicken. Learn more about our partnership 
                                    <a href="" className='underline inline-block pl-[4px]'> here</a>
                                </p>
                            </div>
                            <div className="item basis-2/6 pr-[125px] shrink-0">
                                <div className="slider_img h-10">
                                    <img src="https://cdn.sanity.io/images/8nn8fua5/production/fbb650ce74c1849cb4da2d9951fad89149494cc9-171x42.svg?w=720&fm=webp&q=65" className='max-h-full' alt="" />
                                </div>
                                <h5 className='clientBefore'>
                                    wilson 
                                </h5>
                                <p className='mt-5 text-[17px] font-medium'>A reimagining of Wilson’s brand visual identity, and brand campaign, to support a new product drop and the launch of the first brick and mortar retail location in the brand’s 108-year history. Read our full case study  
                                    <a href="" className='underline inline-block pl-[4px]'> here</a>
                                </p>
                            </div>
                            <div className="item basis-2/6 pr-[125px] shrink-0">
                                <div className="slider_img h-10">
                                    <img src="https://cdn.sanity.io/images/8nn8fua5/production/b2624b2d49d9c14eec0cd30203c5eec0331eac42-42x42.svg?w=720&fm=webp&q=65" className='max-h-full' alt="" />
                                </div>
                                <h5 className='clientBefore'>
                                    at&t 
                                </h5>
                                <p className='mt-5 text-[17px] font-medium'>Redesigning the digital flagship for the largest telecommunications company in the world. Creating frictionless paths to purchase for a wide range of consumers across a vast portfolio of products and services.
                                </p>
                            </div>
                            <div className="item basis-2/6 pr-[125px] shrink-0">
                                <div className="slider_img h-10">
                                    <img src="https://cdn.sanity.io/images/8nn8fua5/production/8dd2f090726c8d5befeaa2924b44678e69452945-1024x200.svg?w=720&fm=webp&q=65" className='max-h-full' alt="" />
                                </div>
                                <h5 className='clientBefore'>
                                    patagonia 
                                </h5>
                                <p className='mt-5 text-[17px] font-medium'>Ongoing partnership providing strategy, branding, experience design, and development focused on bringing their mission and offerings to consumers through brand-led programs and platforms. Read our full case study 
                                    <a href="" className='underline inline-block pl-[4px]'> here</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-[80px]"></div>
            </div>
        </section>
    )
}

export default Clients