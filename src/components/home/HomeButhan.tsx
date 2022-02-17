import BannerButhan from "assets/img/banner_buthan.png"
import Buthan from "assets/img/buthan.jpg"
import { openLink } from "libs/functions"
import React from "react"
import VideoPlayer from "utils/video/VideoPlayer"

const HomeButhan = () => {
  return (
    <>
      <div className="grid w-full grid-cols-1 gap-60 pb-40 sm:gap-80 sm:pb-60 md:gap-100 md:pb-80 lg:pb-100">
        <div className="grid w-full grid-cols-1 gap-24">
          <div className="flex w-full justify-center">
            <div className="font-azo w-[740px] max-w-full text-center text-24 leading-[110%] text-white sm:text-36 md:text-[52px] xl:text-[64px]">
              KINGDOM OF BHUTAN
            </div>
          </div>
          <div className="flex w-full justify-center">
            <div className="w-[740px] max-w-full text-center text-14 text-white-60 sm:text-16 md:text-18">
              We will be officially partnering with the people of the Kingdom of
              Bhutan and will provide our holders greater access to networking,
              education on technology topics within our unique community. We
              will be officially partnering with the people of the Kingdom of
              Bhutan and will provide our holders greater access to networking,
              education on technology topics within our unique community.
            </div>
          </div>
        </div>
        <div className="mb-[50px] flex w-full justify-center xl:mt-[80px]">
          <div className="w-[900px] max-w-full">
            <VideoPlayer
              video={"https://www.youtube.com/watch?v=59iPEC6K7JY"}
              pre={true}
              clean={true}
              thumbnail={Buthan}
            />
          </div>
        </div>
        <div className="grid w-full grid-cols-[auto,1fr] items-center gap-100">
          <div className="flex">
            <img src={BannerButhan} alt="" />
          </div>
          <div className="grid w-full grid-cols-1 gap-24">
            <div className="font-azo w-full text-left text-24 leading-[110%] text-white sm:text-36 md:text-[52px] xl:text-[64px]">
              3d PREVIEW
            </div>
            <div className="w-full text-left text-14 text-white-60 sm:text-16 md:text-18">
              We will be officially partnering with the people of the Kingdom of
              Bhutan and will provide our holders greater access to networking,
              education on technology topics within our unique community. We
              will be officially partnering with the people of the Kingdom of
              Bhutan and will provide our holders greater access to networking,
              education on technology topics within our unique community.
            </div>
            <div className="flex w-full flex-wrap justify-center gap-20 xl:justify-start">
              <button
                onClick={(e) => openLink(e, "https://p3d.in/ar/76p2T")}
                className="relative w-full sm:w-auto"
              >
                <div className="absolute top-0 left-0 h-60 w-full -skew-x-12 transform bg-green-light "></div>
                <div className="font-azo relative flex h-60 w-full items-center justify-center px-28 text-14 text-white sm:text-16 md:text-18">
                  AR PREVIEW
                </div>
              </button>
              <button
                onClick={(e) => openLink(e, "https://p3d.in/76p2T")}
                className="relative w-full sm:w-auto"
              >
                <div className="absolute top-0 left-0 h-60 w-full -skew-x-12 transform bg-white"></div>
                <div className="font-azo relative flex h-60 w-full items-center justify-center px-28 text-14 text-green sm:text-16 md:text-18">
                  BROWSER PREVIEW
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeButhan
