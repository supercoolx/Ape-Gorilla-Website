import BannerGiant from "assets/img/banner_giant.png"
import BannerTop from "assets/img/banner_top.png"
import SpinnerCirc from "assets/img/spinner_circ.png"
import { ReactComponent as SpinnerText } from "assets/img/spinner_text.svg"
import HomeTimer from "components/home/HomeTimer"
import HomeTopSlider from "components/home/HomeTopSlider"
import { useProps } from "contexts/PropsContext"
import { SOCIAL, URL } from "libs/constants"
import { openLink } from "libs/functions"
import React from "react"
import { Link } from "react-router-dom"
import VideoPlayer from "utils/video/VideoPlayer"

const HomeTop = () => {
  const { ready } = useProps()

  return (
    <>
      <div className="w-full grid grid-cols-1 pt-80 xl:pt-[120px]">
        <div className="w-full grid grid-cols-1 gap-40 relative px-20 sm:px-30 pt-40 sm:pt-60 xl:pt-[100px]">
          <div className="w-full grid grid-cols-1 xl:grid-cols-[1fr,auto] gap-60 xl:gap-40">
            <div className="w-full grid grid-cols-1 gap-30">
              <div className="flex w-full xl:hidden items-center justify-center mt-40 relative mb-20">
                <div className="relative">
                  <img src={SpinnerCirc} alt="" />
                  <div className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]">
                    <SpinnerText className="animate-spin-slow" />
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-center xl:justify-start">
                <div className="w-[670px] max-w-full text-white text-center xl:text-left font-azo text-24 sm:text-36 md:text-[52px] xl:text-[64px] leading-[110%]">
                  WELCOME TO THE APE GORILLA CLUB
                </div>
              </div>
              <div className="w-full flex justify-center xl:justify-start">
                <div className="w-[600px] max-w-full text-14 text-center xl:text-left sm:text-16 md:text-18 text-white-60">
                  Our mission is to empower our community in educational growth, business and networking opportunities. We are also offering business grant application credit for all NFT holders to receive grants of $5,000 and upto $100,000.
                  Importable 3D files into metaverse and NFT Games, test everyone&apos;s boundaries and create a community mindset around a Happiness
                  Index, modeled by the Kingdom of Bhutan.
                </div>
              </div>
              <div className="w-full grid grid-cols-1 gap-16 mb-20 sm:mb-30">
                <div className="w-full text-white text-24 tracking-widest text-center xl:text-left">
                  MINTING COUNTDOWN
                </div>
                <HomeTimer />
              </div>
              <div className="w-full flex flex-wrap justify-center xl:justify-start gap-20">
                {ready ? (
                  <Link to={URL.MINT} className="w-full sm:w-auto relative">
                    <div className="absolute top-0 left-0 bg-green-light w-full h-60 transform -skew-x-12 "></div>
                    <div className="w-full h-60 relative px-28 text-white font-azo text-14 sm:text-16 md:text-18 flex items-center justify-center">
                      MINT NOW
                    </div>
                  </Link>
                ) : (
                  <button onClick={(e) => openLink(e, SOCIAL.DISCORD)} className="w-full sm:w-auto relative">
                    <div className="absolute top-0 left-0 bg-green-light w-full h-60 transform -skew-x-12 "></div>
                    <div className="w-full h-60 relative px-28 text-white font-azo text-14 sm:text-16 md:text-18 flex items-center justify-center">
                      WHITELIST ME
                    </div>
                  </button>
                )}
              </div>
              <div className="hidden w-full xl:flex items-center justify-center lg:justify-start mt-40 relative">
                <div className="relative">
                  <img src={SpinnerCirc} alt="" />
                  <div className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]">
                    <SpinnerText className="animate-spin-slow" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center xl:w-[450px] 2xl:w-[550px] relative">
              <div className="xl:absolute xl:top-[50%] xl:left-[55%] 2xl:left-[46%] xl:transform xl:translate-x-[-50%] xl:translate-y-[-50%] w-[550px] xl:w-[600px] 2xl:w-[700px] max-w-full 2xl:max-w-[100vw]">
                <img src={BannerTop} alt="" className="" />
              </div>
            </div>
          </div>
          <div className="hidden w-full justify-center mt-[80px] xl:mt-[240px]">
            <div className="max-w-full w-[900px]">
              <VideoPlayer video={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"} pre={true} clean={true} />
            </div>
          </div>
          <div className="w-full grid grid-cols-1 xl:grid-cols-[auto,1fr] gap-60 xl:gap-40 mt-[20px] xl:mt-[160px]">
            <div className="w-full flex justify-center xl:w-[450px] 2xl:w-[550px] relative">
              <div className="hidden xl:flex xl:absolute xl:top-[60%] xl:left-[55%] 2xl:left-[46%] xl:transform xl:translate-x-[-50%] xl:translate-y-[-50%] w-[600px] xl:w-[550px] 2xl:w-[700px] max-w-full sm:max-w-[100vw]">
                <img src={BannerGiant} alt="" className="w-full xl:mt-[160px]" />
                <div className="absolute bottom-[-2px] left-0 w-full h-30 bg-gradient-to-t from-green to-transparent"></div>
              </div>
            </div>
            <div className="w-full grid grid-cols-1 gap-30">
              <div className="w-full flex justify-center xl:justify-end">
                <div className="w-[600px] max-w-full">
                  <div className="w-full text-white text-center xl:text-left font-azo text-24 sm:text-36 md:text-[52px] xl:text-[64px] leading-[110%] mb-30">
                    <span className="text-green-light font-azo text-24 sm:text-36 md:text-[52px] xl:text-[64px]">
                      11,337
                    </span>{" "}
                    unique NFT tokens
                  </div>
                  <div className="w-full text-14 text-center xl:text-left sm:text-16 md:text-18 text-white-60 mb-20 sm:mb-30">
                    Ape Gorilla was creted by a motivated group of individuals who want to bring a community together with
                    a product to make a positive change. Welcome to the Ape Gorilla Family.
                  </div>
                  <div className="w-full flex justify-center xl:justify-start">
                    <button onClick={(e) => openLink(e, SOCIAL.DISCORD)} className="w-full sm:w-auto relative">
                      <div className="absolute top-0 left-0 bg-white w-full h-60 transform -skew-x-12 "></div>
                      <div className="w-full h-60 relative px-28 text-green font-azo text-14 sm:text-16 md:text-18 flex items-center justify-center">
                        JOIN DISCORD
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <HomeTopSlider flat={true} />
      </div>
    </>
  )
}

export default HomeTop
