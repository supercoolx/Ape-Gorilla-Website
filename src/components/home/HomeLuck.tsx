import Luck from "assets/img/luck.png"
import React from "react"

const HomeLuck = () => {
  return (
    <>
      <div className="w-full relative">
        <div className="absolute top-0 transform translate-y-[-300px] left-[50%] translate-x-[-50%] w-screen h-[900px] bg-gradient-to-b from-green-light-60 to-transparent"></div>
        <div className="w-full grid grid-cols-1 xl:grid-cols-[1fr,auto] gap-60 xl:gap-40 relative">
          <div className="w-full flex items-center">
            <div className="w-full grid grid-cols-1 gap-30">
              <div className="w-full text-white text-center xl:text-left font-azo text-24 sm:text-36 md:text-48 lg:text-[56px] leading-[110%]">
                WHAT MAKES US UNIQUE?
              </div>
              <div className="w-full text-14 text-center xl:text-left sm:text-16 md:text-18 text-white-60">
                We will be officially partnering with the people of the Kingdom of Bhutan and will provide our holders
                greater access to networking, education on technology topics within our unique community. We will also be
                partnering with high net worth, and highly influential individuals who want to give back to our community.
                Our mission is to help as many communities as possible, by funding businesses to each NFT holder who wants
                to build a business around helping others, or changing the lives of those in their community for the better.
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center xl:w-[550px] 2xl:w-[600px] h-auto lg:h-[450px] xl:h-[600px] relative">
            <div className="xl:absolute xl:top-[45%] xl:left-[60%] 2xl:left-[70%] xl:transform xl:translate-x-[-50%] xl:translate-y-[-50%] w-[550px] xl:w-[650px] 2xl:w-[800px] max-w-full xl:max-w-[100vw]">
              <img src={Luck} alt="" className="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeLuck
