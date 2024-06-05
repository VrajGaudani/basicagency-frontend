import React from 'react'
import Header from '../../components/header/header'
import Hero from '../../components/hero/hero'
import AboutAgency from '../../components/aboutAgency/aboutAgency'
import SeeWork from '../../components/seeWork/seeWork'
import CaseStudy from '../../components/caseStudy/caseStudy'
import Clients from '../../components/clients/clients'
import Spotlight from '../../components/spotlight/spotlight'
import FeaturedNews from '../../components/featuredNews/featuredNews'
import Footer from '../../components/footer/footer'

const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <AboutAgency />
            <SeeWork />
            <CaseStudy />
            <Clients />
            <Spotlight />
            <FeaturedNews />
            <Footer />
        </>
    )
}

export default Home