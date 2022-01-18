import BannerFooter from "assets/img/banner_footer.png"
import { ReactComponent as OpenSea } from "assets/img/opensea_white.svg"
import Footer from "components/footer/Footer"
import Nav from "components/nav/Nav"
import WrapperPage from "components/wrapper/WrapperPage"
import { SOCIAL } from "libs/constants"
import { openLink } from "libs/functions"
import { ContactInterface } from "libs/interfaces"
import React, { useState } from "react"
import { FaDiscord, FaFacebook, FaInstagram, FaReddit, FaTwitter, FaYoutube } from "react-icons/fa"
import { SiTiktok } from "react-icons/si"

const Contact = () => {
  const [css] = useState("text-[38px] text-white group-hover:text-green")
  const [socials] = useState<ContactInterface[]>([
    { icon: <FaDiscord className={css} />, title: "Discord", url: SOCIAL.DISCORD },
    { icon: <FaTwitter className={css} />, title: "Twitter", url: SOCIAL.TWITTER },
    { icon: <FaInstagram className={css} />, title: "Instagram", url: SOCIAL.INSTAGRAM },
    { icon: <FaReddit className={css} />, title: "Reddit", url: SOCIAL.REDDIT },
    { icon: <FaFacebook className={css} />, title: "Facebook", url: SOCIAL.FACEBOOK },
    { icon: <FaYoutube className={css} />, title: "Youtube", url: SOCIAL.YOUTUBE },
    { icon: <SiTiktok className={css} />, title: "TikTok", url: SOCIAL.TIKTOK },
    {
      icon: <OpenSea className={`fill-current text-white group-hover:text-green w-[38px] h-[38px]`} />,
      title: "OpenSea",
      url: SOCIAL.OPENSEA,
    },
  ])

  return (
    <>
      <Nav />
      <WrapperPage>
        <div className="w-full mt-80 py-[100px] grid grid-cols-1">
          <div className="w-full flex justify-center h-[240px] sm:h-[280px] xl:h-[450px] relative">
            <img
              src={BannerFooter}
              alt=""
              className="absolute left-[50%] bottom-0 transform translate-x-[-50%] translate-y-[14.4%] w-[400px] xl:w-[600px] max-w-[calc(100%-40px)]"
            />
          </div>
          <div className="w-full p-30 sm:p-60 xl:p-[100px] xl:py-[120px] bg-brown">
            <div className="w-full grid grid-cols-1 xl:grid-cols-[1fr,auto] gap-60 xl:gap-100">
              <div className="w-full grid grid-cols-1">
                <div className="w-full text-white font-azo text-24 sm:text-36 md:text-56 lg:text-[80px] leading-[110%] mb-20 sm:mb-30">
                  CONTACT
                </div>
                <div className="w-full flex justify-start">
                  <div className="w-[700px] max-w-full text-white-60">
                    Our mission is to empower our community in educational growth, business and networking
                    opportunities, play to earn games, test everyone&apos;s boundaries and create a community mindset
                    around a Happiness Index, modeled by the Kingdom of Bhutan.
                  </div>
                </div>
              </div>
              <div className="w-full flex items-center">
                <button
                  onClick={(e) => openLink(e, "mailto:support@apegorilla.com")}
                  className="w-[280px] max-w-full relative"
                >
                  <div className="absolute top-0 left-0 bg-green-light w-full h-60 transform -skew-x-12 "></div>
                  <div className="w-full h-60 relative px-28 text-white font-azo text-14 sm:text-16 md:text-18 flex items-center justify-center">
                    EMAIL US
                  </div>
                </button>
              </div>
            </div>
            <div className="w-full my-40 sm:my-60 md:my-[100px] border-b-1 border-white opacity-5"></div>
            <div className="w-full flex justify-center mb-40 sm:mb-60 md:mb-80">
              <div className="w-[500px] max-w-full text-white text-24 sm:text-36 font-azo text-center">
                FOLLOW US ON OUR SOCIAL MEDIA
              </div>
            </div>
            <div className="w-full flex justify-center">
              <div className="w-[660px] max-w-full grid grid-cols-2 lg:grid-cols-4 gap-30 sm:gap-60">
                {socials.map((social: ContactInterface, key: number) => (
                  <div className="w-full flex justify-center" key={key}>
                    <button
                      onClick={(e) => openLink(e, social.url)}
                      className="group w-80 sm:w-100 h-80 sm:h-100 rounded-full bg-white-10 hover:bg-white flex justify-center items-center transition-all duration-200"
                    >
                      {social.icon}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </WrapperPage>
      <Footer />
    </>
  )
}

export default Contact
