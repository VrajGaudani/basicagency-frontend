import React from 'react'
import { Link } from 'react-router-dom'
import f1 from '../../assets/f1.webp'
import f2 from '../../assets/f2.webp'
import f3 from '../../assets/f3.webp'
import f4 from '../../assets/f4.webp'
import f5 from '../../assets/f5.webp'
import f6 from '../../assets/f6.webp'
import f7 from '../../assets/f7.webp'

const FeaturedNews = () => {

    const featuredData = [
        {
            "fImg": f1,
            "geatureHead": "Breaking Through the Branding Blahs",
            "featuredDate": "6.16.23"
        },
        {
            "fImg": f2,
            "geatureHead": "Ryan Parkhurst moderates talk on “The art and science of brand purpose and creativity”",
            "featuredDate": "6.5.23"
        },
        {
            "fImg": f3,
            "geatureHead": "John Waters, Bare Walls, and Sparking Creativity",
            "featuredDate": "5.15.23"
        },
        {
            "fImg": f4,
            "geatureHead": "BASIC/DEPT® is the 27th Webby Awards: Agency of the Year",
            "featuredDate": "4.25.23"
        },
        {
            "fImg": f5,
            "geatureHead": "BASIC/DEPT® secures 19 Nominations for the 27th Annual Webby Awards",
            "featuredDate": "4.4.23"
        },
        {
            "fImg": f6,
            "geatureHead": "Women’s History Month Spotlight at B/D®",
            "featuredDate": "4.3.23"
        },
        {
            "fImg": f7,
            "geatureHead": "Introducing REV by LYFT",
            "featuredDate": "3.28.23"
        },
    ]

    return (
        <section className='ba__featured_news mb-[12rem]'>
            <div className="bacontainer">
                <div className="flex justify-between items-center">
                    <h2 className='text-[2.5rem] leading-[2.75rem] uppercase font-bold max-w-[20rem]'>Featured news</h2>
                    <Link className='btn_before'>
                        view all
                    </Link>
                </div>
                <ul className='mt-[3.1rem]'>
                    {
                        featuredData.map((feature, i) => {
                            return (
                            <li className='mt-[1.2rem]' key={i}>
                                <Link className='pt-[1.2rem] flex gap-[20px] border-t border-bablack-400 group'>
                                    <div className="ba__newslist_img basis-2/6 overflow-hidden">
                                        <img src={feature.fImg} alt="" className='scale-[1.05] transition-all group-hover:scale-100' />
                                    </div>
                                    <div className="ba__newslist_content basis-4/6 relative">
                                        <h5 className='text-[2.5rem] max-w-[80%] uppercase font-medium leading-none tracking-[-0.05em] group-hover:underline'>{feature.geatureHead}</h5>
                                        <p className='absolute bottom-0 left-0 leading-[1] text-[0.9rem]'> <span className='font-bold uppercase'>Press</span> {feature.featuredDate} </p>
                                        <div className="ba__newslist_nav w-[1.9rem] h-[1.9rem] absolute right-0 top-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17"><path className='group-[.colorChange]:fill-bapink-400' d="M.1 7.5h14v2H.1z"></path><path className='group-[.colorChange]:fill-bapink-400' d="m8.4 0 8.5 8.5-1.4 1.4L7 1.4 8.4 0z"></path><path className='group-[.colorChange]:fill-bapink-400' d="m7 15.6 8.5-8.5 1.4 1.4L8.4 17 7 15.6z"></path></svg>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                            )
                        })
                    }
            </ul>
        </div>
        </section >
    )
}

export default FeaturedNews