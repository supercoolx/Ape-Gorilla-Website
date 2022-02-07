import Luck from "assets/img/luck.png"
import React from "react"

const HomeLuck = () => {
  return (
    <>
      <div className="relative w-full">
        <div className="absolute top-0 left-[50%] h-[900px] w-screen translate-y-[-300px] translate-x-[-50%] transform bg-gradient-to-b from-green-light-60 to-transparent"></div>
        <div className="relative grid w-full grid-cols-1 gap-60 xl:grid-cols-[1fr,auto] xl:gap-40">
          <div className="flex w-full items-center">
            <div className="grid w-full grid-cols-1 gap-30">
              <div className="font-azo w-full text-center text-24 leading-[110%] text-white sm:text-36 md:text-48 lg:text-[56px] xl:text-left">
                WHAT MAKES US UNIQUE?
              </div>
              <div className="w-full text-center text-14 text-white-60 sm:text-16 md:text-18 xl:text-left">
                We have partnerships with high net worth, and highly influential
                individuals who want to lend their expertese and knowledge with
                the community. We will also be officially partnered with the
                people of the Kingdom of Bhutan and will provide our holders
                greater access to networking, education on technology topics
                within our unique community.
              </div>
            </div>
          </div>
          <div className="relative flex h-auto w-full justify-center lg:h-[450px] xl:h-[600px] xl:w-[550px] 2xl:w-[600px]">
            <div className="w-[550px] max-w-full xl:absolute xl:top-[45%] xl:left-[60%] xl:w-[650px] xl:max-w-[100vw] xl:translate-x-[-50%] xl:translate-y-[-50%] xl:transform 2xl:left-[70%] 2xl:w-[800px]">
              <img src={Luck} alt="" className="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeLuck
