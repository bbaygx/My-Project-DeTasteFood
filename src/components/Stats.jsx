import React from 'react'
import {LuCar,BsEmojiSmile,IoFastFoodOutline} from "../utils"

const Stats = () => {
    return (
        <>
            <div className="mx-6">
                <div className="my-32 m-auto flex justify-between flex-wrap gap-5 sm:flex-none overflow-x-hidden sm:flex-wrap md:flex-nowrap md:px-10">


                <div className="flex flex-wrap gap-5 justify-evenly md:justify-around py-3 items-center">
                        <div className="stat-figure text-primary bg-blue-300 p-5 rounded-2xl">
                            <LuCar className="inline-block w-8 h-8 stroke-current"/>
                        </div>
                        <div className="text-slate-600">Pengiriman Cepat</div>

                    </div>
                    <div className="flex flex-wrap gap-5 justify-evenly md:justify-around py-3 items-center">
                        <div className="stat-figure text-primary bg-orange-200 p-5 rounded-2xl">
                            <BsEmojiSmile className="inline-block text-orange-500 w-8 h-8 stroke-current"/>
                        </div>
                        <div className="text-slate-600">65.000 Pembeli</div>

                    </div>
                    <div className="flex flex-wrap gap-5 justify-evenly md:justify-around py-3 items-center">
                        <div className="stat-figure text-primary bg-green-200 p-5 rounded-2xl">
                            <IoFastFoodOutline className="inline-block text-green-600 w-8 h-8 stroke-current"/>
                        </div>
                        <div className="text-slate-600">Delicious Food</div>

                    </div>
                    <div className="flex flex-wrap gap-5 justify-evenly md:justify-around py-3 items-center">
                        <div className="stat-figure text-primary bg-yellow-200 p-5 rounded-2xl">
                            <LuCar className="inline-block w-8 h-8 text-yellow-500 stroke-current"/>
                        </div>
                        <div className="text-slate-600">Pengiriman Cepat</div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Stats