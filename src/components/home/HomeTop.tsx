import BannerGiant from "assets/img/banner_giant.png"
import BannerTop from "assets/img/banner_top.png"
import SpinnerCirc from "assets/img/spinner_circ.png"
import { ReactComponent as SpinnerText } from "assets/img/spinner_text.svg"
import Video from "assets/img/thumbnail.png"
import HomeTopSlider from "components/home/HomeTopSlider"
import { useProps } from "contexts/PropsContext"
import { SOCIAL, URL } from "libs/constants"
import React from "react"
import { Link } from "react-router-dom"
import ButtonOrange from "utils/buttons/ButtonOrange"
import ButtonWhite from "utils/buttons/ButtonWhite"
import VideoPlayer from "utils/video/VideoPlayer"

const HomeTop = () => {
  const { ready } = useProps()

  return (
    <>
      <div className="grid w-full grid-cols-1 pt-80 xl:pt-[120px]">
        <div className="relative grid w-full grid-cols-1 gap-40 px-20 pt-40 sm:px-30 sm:pt-60 xl:pt-[100px]">
          <div className="grid w-full grid-cols-1 gap-60 xl:grid-cols-[1fr,auto] xl:gap-40">
            <div className="grid w-full grid-cols-1 gap-30">
              <div className="relative mt-40 mb-20 flex w-full items-center justify-center xl:hidden">
                <div className="relative">
                  <img src={SpinnerCirc} alt="" />
                  <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] transform">
                    <SpinnerText className="animate-spin-slow" />
                  </div>
                </div>
              </div>
              <div className="flex w-full justify-center xl:justify-start">
                <div className="font-azo w-[670px] max-w-full text-center text-24 leading-[110%] text-white sm:text-36 md:text-[52px] xl:text-left xl:text-[64px]">
                  WELCOME TO THE APE GORILLA CLUB
                </div>
              </div>
              <div className="flex w-full justify-center xl:justify-start">
                <div className="w-[600px] max-w-full text-center text-14 text-white-60 sm:text-16 md:text-18 xl:text-left">
                  Ape Gorilla is a collection of 11,337 unique Non-Fungible
                  Tokens that provide privileged access to the most incredible
                  international events: mastermind and networking events,
                  brainstorming sessions, and insane parties, all held at
                  amazing locations like beachfront villas, yachts, and
                  mansions. Your Ape Gorilla NFT is your golden ticket to a
                  truly life-changing, real-life community! You have joined an
                  elite community ready to make a real global impact 🌎 🌍 🌏
                </div>
              </div>
              <div className="flex w-full flex-wrap justify-center gap-20 xl:justify-start">
                {ready ? (
                  <Link to={URL.MINT} className="relative w-full sm:w-auto">
                    <div className="absolute top-0 left-0 h-60 w-full -skew-x-12 transform bg-orange "></div>
                    <div className="font-azo relative flex h-60 w-full items-center justify-center px-28 text-14 text-white sm:text-16 md:text-18">
                      MINT NOW
                    </div>
                  </Link>
                ) : (
                  <ButtonOrange title={" WHITELIST ME"} link={SOCIAL.DISCORD} />
                )}
              </div>
              <div className="relative mt-40 hidden w-full items-center justify-center lg:justify-start xl:flex">
                <div className="relative">
                  <img src={SpinnerCirc} alt="" />
                  <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] transform">
                    <SpinnerText className="animate-spin-slow" />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex w-full justify-center xl:w-[450px] 2xl:w-[550px]">
              <div className="w-[550px] max-w-full xl:absolute xl:top-[50%] xl:left-[55%] xl:w-[600px] xl:translate-x-[-50%] xl:translate-y-[-50%] xl:transform 2xl:left-[46%] 2xl:w-[700px] 2xl:max-w-[100vw]">
                <img src={BannerTop} alt="" className="" />
              </div>
            </div>
          </div>
          <div className="mt-[80px] flex w-full justify-center xl:mt-[140px]">
            <div className="w-[900px] max-w-full">
              <VideoPlayer
                video={"https://www.youtube.com/watch?v=G_arcFqb0Os"}
                pre={true}
                clean={true}
                thumbnail={Video}
              />
            </div>
          </div>
          <div className="mt-[20px] grid w-full grid-cols-1 gap-60 xl:mt-[160px] xl:grid-cols-[auto,1fr] xl:gap-40">
            <div className="relative flex w-full justify-center xl:w-[450px] 2xl:w-[550px]">
              <div className="hidden w-[600px] max-w-full sm:max-w-[100vw] xl:absolute xl:top-[60%] xl:left-[55%] xl:flex xl:w-[550px] xl:translate-x-[-50%] xl:translate-y-[-50%] xl:transform 2xl:left-[46%] 2xl:w-[700px]">
                <img
                  src={BannerGiant}
                  alt=""
                  className="w-full xl:mt-[160px]"
                />
                <div className="absolute bottom-[-2px] left-0 h-30 w-full bg-gradient-to-t from-brown to-transparent"></div>
              </div>
            </div>
            <div className="grid w-full grid-cols-1 gap-30">
              <div className="flex w-full justify-center xl:justify-end">
                <div className="w-[600px] max-w-full">
                  <div className="font-azo mb-30 w-full text-center text-24 leading-[110%] text-white sm:text-36 md:text-[52px] xl:text-left xl:text-[64px]">
                    <span className="font-azo text-24 text-orange sm:text-36 md:text-[52px] xl:text-[64px]">
                      11,337
                    </span>{" "}
                    Unique Non-Fungible Tokens
                  </div>
                  <div className="mb-20 w-full text-center text-14 text-white-60 sm:mb-30 sm:text-16 md:text-18 xl:text-left">
                    Ape Gorilla project is a purposed driven NFT project
                    surrounded around helping and empowering each other. Our
                    projects mission is to empower our community through
                    multiple avenues including opportunity for the holders to
                    receiving business or charity grants, academy in web3.0 and
                    blockchains, business assistance software, networking
                    opportunities and grant access to high-level events, web3.0
                    training, software, and games.
                  </div>
                  <div className="flex w-full justify-center xl:justify-start">
                    <ButtonWhite title={"JOIN DISCORD"} link={SOCIAL.DISCORD} />
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
