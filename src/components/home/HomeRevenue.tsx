import Revenue3 from "assets/img/revenue/pie_public_drop.svg"
import Revenue1 from "assets/img/revenue/pie_revenue_nft.svg"
import React from "react"

const HomeRevenue = () => {
  return (
    <>
      <div className="grid w-full grid-cols-1 gap-40 sm:gap-60 md:gap-100">
        <div className="flex justify-center w-full">
          <div className="grid w-[700px] max-w-full grid-cols-1 gap-30">
            <div className="font-azo md:text-56 w-full text-center text-24 leading-[110%] text-white sm:text-36">
              REVENUE DISTRIBUTION
            </div>
            <div className="w-full text-center text-14 text-white-60 sm:text-16 md:text-18">
              These are the revenues to be distributed to our partners,
              shareholders, community wallet and founders from the revenues.
            </div>
          </div>
        </div>
        <div className="grid w-full grid-cols-1 gap-60 lg:grid-cols-2">
          <div className="flex items-center w-full">
            <img src={Revenue1} alt="" className="object-cover" />
          </div>
          <div className="flex flex-col items-center w-full h-[60px]">
            <img src={Revenue3} alt="" className="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeRevenue
