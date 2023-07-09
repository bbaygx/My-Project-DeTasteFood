import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { BiSolidTimeFive,AiFillStar } from "../utils"
import 'swiper/css';
import 'swiper/css/pagination';
import axios from 'axios';
// import { useQuery } from 'react-query';
import useFetch from '../hooks/useFetch';
export default function Carousel({ count }) {
    const countArray = Array.from({ length: count }, (_, index) => index + 1);

    const { data, error, loading } = useFetch('http://localhost:8000/restaurant')


    if (loading) return (
        <>
            <div className="skeleton__image  gap-2 grid grid-cols-2 sm:hidden">
                <div className="skeleton__image__item h-40 w-full bg-slate-500 animate-pulse rounded-md">
                </div>
                <div className="skeleton__image__item h-40 w-full bg-slate-500 animate-pulse rounded-md">
                </div>
            </div>

            <div className="skeleton__image  sm:gap-2  sm:grid sm:grid-cols-5 hidden">
                <div className="skeleton__image__item h-52 w-full bg-slate-300 animate-pulse rounded-md">
                </div>
                <div className="skeleton__image__item h-52 w-full bg-slate-300 animate-pulse rounded-md">
                </div>
                <div className="skeleton__image__item h-52 w-full bg-slate-300 animate-pulse rounded-md">
                </div>
                <div className="skeleton__image__item h-52 w-full bg-slate-300 animate-pulse rounded-md">
                </div>
                <div className="skeleton__image__item h-52 w-full bg-slate-300 animate-pulse rounded-md">
                </div>
            </div>
        </>
    )
    if (error) return <h1>Error</h1>

    return (
        <>
            <Swiper
                slidesPerView={2}
                spaceBetween={20}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
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

                {data?.data?.data.map((item, i) => (
                    <SwiperSlide key={i}>
                        <div className="restaurant__item group cursor-pointer">
                            <div className="restaurant__item__image overflow-hidden rounded-md">
                                <LazyLoadImage src={`${item.foodImage}`} effect="blur" delayTime='500' className='w-full group-hover:scale-105 object-cover duration-300 transition-all group-hover:brightness-75 brightness-100 h-full' />
                            </div>
                            <div className="restaurant__item__content mt-3 ">
                                <div className="status flex justify-between items-center">
                                    <div className="statusOulet flex items-center gap-1">
                                        {item.status === 'Open' ? <BiSolidTimeFive className='text-green-500 text-lg' /> : <BiSolidTimeFive className='text-red-500 text-lg' />}
                                        <span className='text-sm text-gray-500 font-karla'>{item.status}</span>
                                    </div>
                                    <div className="review flex items-center gap-1 ">
                                        <AiFillStar className='text-yellow-400 text-lg ' />
                                        <span className=' text-gray-500 font-karla text-[14px] font-bold block'>{item.rating}</span>
                                    </div>
                                </div>
                                <h1 className='text-lg font-outfits font-bold mt-2'>{item.foodName}</h1>
                                <p className='text-xs text-gray-500 mt-1 font-outfits'>{item.foodType.map(x => x.name).join(', ')}</p>
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
        </>
    );
}
