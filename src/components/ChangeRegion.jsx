import React,{useState} from 'react'

import { FaFilter } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { getByLocation } from '../api'
import { GlobalProvider } from '../contexts/AuthContext'

const ChangeRegion = () => {

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
        <option value="choice" defaultValue>Pilih kotamu</option>
        <option value="jakarta">Jakarta</option>
        <option value="bogor">Bogor</option>
        <option value="depok">Depok</option>
        <option value="tangerang">Tangerang</option>
        <option value="bekasi">Bekasi</option>
      </select>
    </div>
  </header>
  )
}

export default ChangeRegion