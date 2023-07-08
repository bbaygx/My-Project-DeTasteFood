import React from 'react'
import {LuCar} from "../utils"

const Stats = () => {
    return (
        <>
            <div className="mx-6">
                <div className="stats mt-10 shadow-md container m-auto flex justify-center flex-wrap gap-5 sm:flex-none overflow-x-hidden sm:flex-wrap md:flex-nowrap md:px-10">

                    <div className="stat">
                        <div className="stat-figure text-primary">
                            <LuCar className="inline-block w-8 h-8 stroke-current"/>
                        </div>
                        <div className="stat-title">Total Pembeli</div>
                        <div className="stat-value text-primary">25.6K</div>
                        <div className="stat-desc">21% more than last month</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </div>
                        <div className="stat-title">Page Views</div>
                        <div className="stat-value text-secondary">2.6M</div>
                        <div className="stat-desc">21% more than last month</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <div className="avatar online">
                                <div className="w-16 rounded-full">
                                    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                        </div>
                        <div className="stat-value">86%</div>
                        <div className="stat-title">Tasks done</div>
                        <div className="stat-desc text-secondary">31 tasks remaining</div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Stats