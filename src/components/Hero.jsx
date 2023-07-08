import React from 'react'
import HeroHamburger from "../assets/hero_hamburger_2.jpg"
const Hero = () => {
  return (
    <>
      <div className="hero container m-auto min-h-[70vh] bg-base-100">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={HeroHamburger} className="max-w-xs sm:max-w-sm md:max-w-md rounded-lg shadow-2xl" />
        <div className='p-5'>
          <h1 className="text-3xl font-bold">Promo Spesial! Nikmati Hamburger dan Kentang dengan Diskon 20%!</h1>
          <p className="py-6">Rasakan kelezatan Hamburger dan Kentang kami dengan diskon spesial 20%!. Cobalah kombinasi sempurna antara Hamburger gurih dan Kentang renyah, sekarang dengan diskon 20%!</p>
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Hero