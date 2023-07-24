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
                <p className='sm:text-4xl text-3xl mt-2 font-rowdies'>Best selling</p>

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