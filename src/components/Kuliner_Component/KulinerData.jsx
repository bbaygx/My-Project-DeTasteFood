import React,{useEffect, useState} from 'react'
import Cart_Item_1 from "../../assets/cart_item_1.webp"
import { cardItem,BiSolidTimeFive,AiFillStar,BsArrowRight,BiLeftArrowAlt } from "../../utils"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link, useParams } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import GrabFood from '../../assets/grabfood.png'
import GoFood from '../../assets/gofood.png'
import { GlobalProvider } from '../../contexts/AuthContext';



import { getByType } from '../../api';

const KulinerData = () => {

  const [dataKuliner, setDataKuliner] = useState([])

  const {type} = useParams()

  useEffect(()=>{
    const fetchDataByType = async () => {
      try{
        const res = await getByType(type)
        const data = res.data
        setDataKuliner(data)
      } catch(err){
        console.log('Data Tidak Di Temukan')
      }
    } 
    fetchDataByType()
  },[type])


  return (
    <>
<div className="my-24 w-[90%] m-auto">
  <div className="flex justify-between pb-10">
  <h1 className='text-xl sm:text-2xl font-semibold'>Hasil Pilihan Kamu : "{type}"</h1>
  {/* <Link to="restaurant/jakarta" className='sm:text-xl font-medium flex items-center gap-2'>See all <BsArrowRight/></Link> */}
  </div>
      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          400:{
            slidesPerView: 2
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
    {dataKuliner && dataKuliner.map(outlet => (
          <SwiperSlide key={outlet._id}>
          <div className="restaurant__item group cursor-pointer shadow-sm">
              <div className="restaurant__item__image overflow-hidden rounded-md">
                  <img src={outlet.foodImage} alt="" className='h-48 w-56 min-[512px]:w-full group-hover:scale-105 object-cover duration-300 transition-all group-hover:brightness-75 brightness-100' />
              </div>
              <div className="restaurant__item__content mt-3 ">
                  <div className="status flex justify-between items-center">
                      <div className="statusOulet flex items-center gap-1">
                          <BiSolidTimeFive className='text-green-500' />
                          <span className='text-sm text-gray-500 font-karla'>{outlet.status}</span>
                      </div>
                      <div className="review flex items-center gap-1 ">
                          <AiFillStar className='text-yellow-400 text-lg ' />
                          <span className=' text-gray-500 font-karla text-[14px] font-bold block'>4,5</span>
                      </div>
                  </div>
                  <h1 className='text-lg font-outfits font-bold mt-2'>{outlet.foodName}</h1>
                  <p className='text-xs text-gray-500 mt-1 font-outfits'>{outlet.foodType.join(", ")}</p>
                  <div className="platform flex justify-end items-center pt-3 gap-3">
                    <Link to={outlet.goFoodLink}>
                    <img src={outlet.goFoodLink ? GoFood : ""} alt="" className='w-6 h-6'/>
                    </Link>
                    <Link to={outlet.grabFoodLink}>
                    <img src={outlet.grabFoodLink ? GrabFood : ""} alt="" className='w-6 h-6'/>
                    </Link>
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

      <div>
        <Link to="/" className='text-blue-600 underline flex items-center mt-10'>
          <span><BiLeftArrowAlt className='text-xl'/></span>
          <span>Kembali Ke Halaman Home</span>
        </Link>
      </div>
</div>
    </>
  )
}

export default KulinerData

