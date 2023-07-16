import React,{useState} from 'react'
import Carousel from "../helpers/Carousel"
import { FaFilter } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { getByLocation } from '../api'
import { GlobalProvider } from '../contexts/AuthContext'


const Restaurant = () => {

  const navigate = useNavigate()
  const {getLocation, setLocation} = GlobalProvider()
  const [changeRegion, setChangeRegion] = useState('jakarta')

  const handleSelectRegion = async (e) => {
    setChangeRegion(e.target.value)
    try{
      const response = await getByLocation(e.target.value)
      const data = response.data
      setLocation(data)
      navigate('/restaurant/region?location='+e.target.value)
    } catch (error) {
      console.log(error)
      // navigate('*')
    }
  }


  return (
    <>
      <header className='w-[90%] m-auto mt-5 bg-gray-100 rounded-md'>
        <div className="container flex justify-between py-10 px-6 ">
          <div className="content">
            <h1 className='text-2xl font-karla '>
              Select Food Region :
            </h1>
            <p className='text-4xl mt-2 font-rowdies'>{changeRegion}</p>
            <p className='mt-5'> Cari menu makanan yang kamu suka berdasarkan kotamu </p>
          </div>
          <div className="bannerImage hidden">
            <img src="https://media-cdn.tripadvisor.com/media/photo-s/06/ca/7d/be/bar-35-food-drinks.jpg" alt="" className='w-52' />
          </div>
          <select className="select select-bordered w-full max-w-xs" onChange={handleSelectRegion}>
            <option value="choice" disabled defaultValue>Pilih kotamu</option>
            <option value="jakarta">Jakarta</option>
            <option value="bogor">Bogor</option>
            <option value="depok">Depok</option>
            <option value="tangerang">Tangerang</option>
            <option value="bekasi">Bekasi</option>
          </select>
        </div>
      </header>
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