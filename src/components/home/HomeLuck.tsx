import Luck from "assets/img/luck.png"
import React from "react"
import VideoPlayer from "utils/video/VideoPlayer"

const HomeLuck = () => {
  return (
    <>
      <div className="relative w-full">
        <div className="absolute top-0 left-[50%] h-[900px] w-screen translate-y-[-300px] translate-x-[-50%] transform bg-gradient-to-b from-orange-60 to-transparent"></div>
        <div className="relative grid w-full grid-cols-1 gap-100 xl:grid-cols-[1fr,auto] xl:gap-40">
          <div className="flex w-full items-center">
            <div className="grid w-full grid-cols-1 gap-30">
              <div className="font-azo w-full text-center text-24 leading-[110%] text-white sm:text-36 md:text-48 lg:text-[56px] xl:text-left">
                WHAT MAKES US UNIQUE?
              </div>
              <div className="w-full text-center text-14 text-white-60 sm:text-16 md:text-18 xl:text-left">
                We have partnerships with high net worth, and highly influential
                and skilled individuals who want to lend their expertese and
                knowledge with the community. We are executing on our roadmap
                utilies to demonstrate we are truly here for the longterm, we
                have spent over $300,000 into the project of personal family and
                close friend monies to make this a possibility for everyone.
                Most of our team is documented and are committed to a longterm
                successful project.
              </div>
              <div className="mt-[30px] flex w-full justify-center xl:mt-[40px]">
                <div className="w-[900px] max-w-full">
                  <VideoPlayer
                    video={"https://www.youtube.com/watch?v=G_arcFqb0Os"}
                    pre={true}
                    clean={true}
                    thumbnail={""}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="relative row-start-1 flex h-auto w-full justify-center xl:row-start-auto xl:h-[600px] xl:w-[550px] 2xl:w-[600px]">
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
