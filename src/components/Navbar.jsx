import React, { useState } from 'react'
import { SearchInput } from "./"
import { Link } from 'react-router-dom'
import {
    IoCall, BsMenuApp, HiOutlineMenuAlt2,
    AiOutlineSearch, AiOutlineHeart, AiFillHeart
    , MdDiscount, FiSearch, FiShoppingCart
} from "../utils"

const Navbar = () => {

    const [openSearch, setOpenSearch] = useState(false)
    const [like, setLike] = useState(false)

    const openSearchToogle = () => {
        setOpenSearch(prev => !prev)
    }
    const likeToogle = () => {
        setLike(prev => !prev)
    }

    return (
        <>
            {/* Alert Info */}
            <div className="bg-gradient-to-r m-2 rounded-md from-purple-500 to-pink-500  flex justify-center items-center gap-3 py-3">
                <MdDiscount className='text-xl text-yellow-400' />
                <span className='text-sm font-bold text-slate-200'>Promo 20%</span>
            </div>

            {/* Contact Info */}
            <div className="bg-base-100 container m-auto flex justify-between items-center gap-3 py-2 px-4">
                <a href="#">
                    <IoCall className='text-xl ' />
                </a>
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
                    <span className='text-sm font-bold text-gray-400'>Daftar</span>
                    <span className='text-sm font-bold text-gray-400'>Login</span>
                </div>
            </div>

            <nav className=" bg-base-100 shadow-md">
                <div className="navbar container m-auto">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabindex="0" className="btn btn-ghost btn-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                            </label>
                            <ul tabindex="0" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>Homepage</a></li>
                                <li><a>Portfolio</a></li>
                                <li><a>About</a></li>
                            </ul>
                        </div>
                        <Link to='/' className="font-bold normal-case text-xl">De Taste Food</Link>
                    </div>
                    <div className="navbar-center">
                    </div>
                    <div className="navbar-end">
                        <button className="btn btn-ghost btn-circle" onClick={openSearchToogle}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                        <button className="btn btn-ghost btn-circle" onClick={likeToogle}>
                            <div className="indicator">
                                {like ? <AiFillHeart className='w-5 h-5' /> : <AiOutlineHeart className='w-5 h-5' />}
                                <span className="badge badge-xs badge-primary indicator-item"></span>
                            </div>
                        </button>
                        <button className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <FiShoppingCart className='w-5 h-5' />
                                <span className="badge badge-xs badge-primary indicator-item"></span>
                            </div>
                        </button>
                    </div>
                </div>
            </nav>
            <SearchInput openSearch={openSearch} />
        </>
    )
}

export default Navbar