import Revenue1 from "assets/img/revenue/1.png"
import Revenue2 from "assets/img/revenue/2.png"
import React from "react"

const HomeRevenue = () => {
  return (
    <>
      <div className="grid w-full grid-cols-1 gap-40 sm:gap-60 md:gap-100">
        <div className="flex w-full justify-center">
          <div className="grid w-[700px] max-w-full grid-cols-1 gap-30">
            <div className="font-azo md:text-56 w-full text-center text-24 leading-[110%] text-white sm:text-36">
              REVENUE DISTRIBUTION
            </div>
            <div className="w-full text-center text-14 text-white-60 sm:text-16 md:text-18">
              Text placeholder, text placeholder, text placeholder
            </div>
          </div>
        </div>
        <div className="grid w-full grid-cols-1 gap-60 lg:grid-cols-2">
          <img src={Revenue1} alt="" className="rounded-6 object-cover" />
          <img src={Revenue2} alt="" className="rounded-6 object-cover" />
        </div>
      </div>
    </>
  )
}

export default HomeRevenue
