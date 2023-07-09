import React from 'react'
import Cart_Item_1 from "../assets/cart_item_1.webp"
import { cardItem,BiSolidTimeFive,AiFillStar,BsArrowRight } from "../utils"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';

const Card = () => {
  return (
    <>
<div className="my-60 mx-4">
  <div className="flex justify-between py-7 px-3">
  <h1 className='text-xl sm:text-2xl font-semibold'>Recomanded For You</h1>
  <Link to="restaurant/jakarta" className='sm:text-xl font-medium flex items-center gap-2'>See all <BsArrowRight/></Link>
  </div>
      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          400:{
            slidesPerView: 1
          },
          460: {
            slidesPerView: 2,
          },
          512: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
        className="mySwiper"
      >
        {cardItem.map(item => (
          <SwiperSlide key={item.id}>
                        <div className="restaurant__item group cursor-pointer">
                            <div className="restaurant__item__image overflow-hidden rounded-md">
                                <img src="https://media-cdn.tripadvisor.com/media/photo-s/06/ca/7d/be/bar-35-food-drinks.jpg" alt="" className='w-full group-hover:scale-105 object-cover duration-300 transition-all group-hover:brightness-75 brightness-100 h-full' />
                            </div>
                            <div className="restaurant__item__content mt-3 ">
                                <div className="status flex justify-between items-center">
                                    <div className="statusOulet flex items-center gap-1">
                                        <BiSolidTimeFive className='text-green-500' />
                                        <span className='text-sm text-gray-500 font-karla'>Open</span>
                                    </div>
                                    <div className="review flex items-center gap-1 ">
                                        <AiFillStar className='text-yellow-400 text-lg ' />
                                        <span className=' text-gray-500 font-karla text-[14px] font-bold block'>4,5</span>
                                    </div>
                                </div>
                                <h1 className='text-lg font-outfits font-bold mt-2'>De Taste Food</h1>
                                <p className='text-xs text-gray-500 mt-1 font-outfits'>Snack, Food, Beverages</p>
                                <div className="price">
                                    {/* <span className=' text-blue-500 text-lg font-rowdies block mt-3'>Rp. 100.000</span> */}
                                </div>
                                <div className="checkOut flex items-center gap-6 mt-3  ">
                                    <div className="buy">
                                        {/* <button className='bg-slate-100 text-slate-800 font-karla shadow-sm  px-4 py-2 rounded-md '>Buy</button> */}
                                    </div>
                                    <div className="heart ">
                                        {/* <AiOutlineHeart className='text-2xl' /> */}
                                    </div>
                                </div>
                            </div>
                        </div>
          </SwiperSlide>
        ))}

      </Swiper>
</div>
    </>
  )
}

export default Card

