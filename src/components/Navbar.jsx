import React, { useState, useRef } from "react";
import { SearchInput } from "./";

import {
  IoCall,
  BsMenuApp,
  HiOutlineMenuAlt2,
  AiOutlineSearch,
  AiOutlineHeart,
  AiFillHeart,
  MdDiscount,
  FiSearch,
  FiShoppingCart,
  HiOutlineMenuAlt4,
  BiLogoGmail,

  // Kuliner Data
  dataKuliner,
} from "../utils";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Navbar = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const [input, setInput] = useState([]);
  const [like, setLike] = useState(false);

  const openSearchToogle = () => {
    setOpenSearch((prev) => !prev);
  };
  const likeToogle = () => {
    setLike((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(`Hasil Pencarian Dari : ${input}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();

      document.getElementById("submit").click();
    }
  };

  return (
    <>
      {/* Alert Info */}
      <div className="bg-gradient-to-r m-2 rounded-md shadow-md from-purple-500 to-pink-500  flex justify-center items-center gap-3 py-1">
        <MdDiscount className="text-xl text-yellow-400" />
        <span className="text-sm font-bold text-slate-200">Promo 20%</span>
      </div>

      {/* Contact Info */}
      <div className="bg-base-100  flex justify-between items-center gap-3 py-2 px-4">
        <div className="contact-app flex gap-3">
          <a href="#">
            <IoCall className="text-xl " />
          </a>
          <a href="#">
            <BiLogoGmail className="text-xl " />
          </a>
        </div>
        <div className="flex-none hidden sm:block">
          {/* <ul className='flex gap-6'>
                        <li>
                            <a href="#">Testimonial</a>
                        </li>
                        <li>
                            <a href="#">Tentang Kami</a>
                        </li>
                    </ul> */}
        </div>
        <div className="flex gap-6">
          <span className="text-sm font-bold text-gray-400">Daftar</span>
          <span className="text-sm font-bold text-gray-400">Login</span>
        </div>
      </div>

      <nav className=" bg-base-100 shadow-md">
        <div className="navbar m-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <HiOutlineMenuAlt2 className="w-5 h-5" />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[4] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Menu List</a>
                </li>
                <li>
                  <details open className="md:hidden">
                    <summary>Catalog</summary>
                    <ul>
                      <li>
                        <a>item 1</a>
                      </li>
                      <li>
                        <a>item 2</a>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <a>Menu</a>
                </li>
              </ul>
            </div>
            <a className="font-bold normal-case text-base lg:text-xl">
              De Taste Food
            </a>

            {/* <div className="dropdown dropdown-bottom fixed z-50 bg-white cursor-pointer shadow-md mx-2 p-3 rounded-md top-60  md:hidden">
                            <BsMenuApp className='w-6 h-6' tabIndex={0} />
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                            </ul>
                        </div> */}
          </div>
          <div className="navbar-center">
            <div className="dropdown dropdown-bottom bg-base-100 py-1 px-5 font-medium cursor-pointer border-2 hidden md:flex md:gap-2 md:items-center md:rounded-full md:mr-3">
              <HiOutlineMenuAlt4 className="w-5 h-5 cursor-pointer" />
              <label tabIndex={0} className="m-1 cursor-pointer">
                Catalog
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[2] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
            <form
              className="rounded-full py-1 px-3 border-2 border-gray-200 hidden sm:inline-flex gap-3 sm:ml-6"
              onSubmit={handleSubmit}
            >
              <button type="submit" id="submit">
                <FiSearch className="w-5 h-5 text-gray-600" />
              </button>
              <input
                type="text"
                placeholder="Search..."
                className=" outline-none w-full max-w-xs"
                value={input}
                onKeyDown={handleKeyDown}
                onChange={(e) => setInput(e.target.value)}
              />
            </form>
          </div>
          <div className="navbar-end">
            <button
              className="btn btn-ghost btn-circle sm:hidden"
              onClick={openSearchToogle}
            >
              <AiOutlineSearch className="w-6 h-6" />
            </button>
            <button className="btn btn-ghost btn-circle" onClick={likeToogle}>
              <div className="indicator">
                {like ? (
                  <AiFillHeart className="w-5 h-5" />
                ) : (
                  <AiOutlineHeart className="w-5 h-5" />
                )}
                <span className="badge badge-xs badge-primary indicator-item"></span>
              </div>
            </button>
            <button className="btn btn-ghost btn-circle">
              <div className="indicator">
                <FiShoppingCart className="w-5 h-5" />
                <span className="badge badge-xs badge-primary indicator-item"></span>
              </div>
            </button>
          </div>
        </div>
      </nav>
      <Swiper
        slidesPerView={6}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          350: {
            slidesPerView: 3,
            spaceBetween: 10,
          },

          400: {
            slidesPerView: 3,
            spaceBetween: 10,
          },

          512: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 10,
          },
        }}
        className="mySwiper flex py-5 space-x-3 overflow-x-hidden smooth-scroll scale-x-90 duration-300 justify-center"
      >
        {dataKuliner.map((item) => (
          <SwiperSlide className="my-5 m-auto">
            <a
              href={item.page}
              className="px-8 py-8 text-center rounded-full font-medium"
              key={item.id}
            >
              {item.nama_kuliner}
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
      <SearchInput openSearch={openSearch} />
    </>
  );
};

export default Navbar;
