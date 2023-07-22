import React,{useState} from 'react'
import Carousel from "../helpers/Carousel"
import { ChangeRegion } from '../components'



const Restaurant = () => {




  return (
    <>
  <ChangeRegion/>
      <section className='w-[90%] m-auto mt-10'>
        <div className="container">
          <div className="content">
            {/* <h1 className='text-3xl font-karla '>Food : <em>Jakarta</em></h1> */}
            <div className="recomended">
              <div className="flex items-center justify-between">
                <p className='sm:text-4xl text-3xl mt-2  font-rowdies'>Recomended</p>
                {/* <div className="dropdown dropdown-end z-10 ">
                  <label tabIndex="0" className="btn m-1">
                    <FaFilter className='inline-block' />
                    Filter
                  </label>
                  <ul tabIndex="0" className="dropdown-content shadow-slate-600 z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><Link>Makanan</Link></li>
                    <li><Link>Minuman</Link></li>
                  </ul>
                </div> */}
              </div>
              <div className="recomended__list mt-6 ">
                <Carousel count={6} />
              </div>
            </div>

          </div>
        </div>
      </section>
      <section className='w-[90%] m-auto mt-10 md:mt-16'>
        <div className="container">
          <div className="content">
            {/* <h1 className='text-3xl font-karla '>Food : <em>Jakarta</em></h1> */}
            <div className="choiceBuyer">
              <div className="flex items-center justify-between">
                <p className='sm:text-4xl text-3xl mt-2 font-rowdies'>Choice of buyers</p>
                {/* <div className="dropdown dropdown-end z-10 ">
                  <label tabIndex="0" className="btn m-1">
                    <FaFilter className='inline-block' />
                    Filter
                  </label>
                  <ul tabIndex="0" className="dropdown-content shadow-slate-600 z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Makanan</a></li>
                    <li><a>Minuman</a></li>
                  </ul>
                </div> */}
              </div>
              <div className="choiceBuyer__list mt-6 ">
                <Carousel count={6} />
              </div>
            </div>

          </div>
        </div>
      </section>

    </>
  )
}

export default Restaurant