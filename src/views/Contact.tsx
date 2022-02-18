import BannerFooter from "assets/img/banner_footer.png"
import { ReactComponent as OpenSea } from "assets/img/opensea_white.svg"
import Footer from "components/footer/Footer"
import Nav from "components/nav/Nav"
import WrapperPage from "components/wrapper/WrapperPage"
import { SOCIAL } from "libs/constants"
import { openLink } from "libs/functions"
import { ContactInterface } from "libs/interfaces"
import React, { useState } from "react"
import {
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaReddit,
  FaTwitter,
  FaYoutube
} from "react-icons/fa"
import { SiTiktok } from "react-icons/si"

const Contact = () => {
  const [css] = useState("text-[38px] text-white group-hover:text-brown")
  const [socials] = useState<ContactInterface[]>([
    {
      icon: <FaDiscord className={css} />,
      title: "Discord",
      url: SOCIAL.DISCORD
    },
    {
      icon: <FaTwitter className={css} />,
      title: "Twitter",
      url: SOCIAL.TWITTER
    },
    {
      icon: <FaInstagram className={css} />,
      title: "Instagram",
      url: SOCIAL.INSTAGRAM
    },
    { icon: <FaReddit className={css} />, title: "Reddit", url: SOCIAL.REDDIT },
    {
      icon: <FaFacebook className={css} />,
      title: "Facebook",
      url: SOCIAL.FACEBOOK
    },
    {
      icon: <FaYoutube className={css} />,
      title: "Youtube",
      url: SOCIAL.YOUTUBE
    },
    { icon: <SiTiktok className={css} />, title: "TikTok", url: SOCIAL.TIKTOK },
    {
      icon: (
        <OpenSea
          className={`h-[38px] w-[38px] fill-current text-white group-hover:text-brown`}
        />
      ),
      title: "OpenSea",
      url: SOCIAL.OPENSEA
    }
  ])

  return (
    <>
      <Nav />
      <WrapperPage>
        <div className="mt-80 grid w-full grid-cols-1 py-[100px]">
          <div className="relative flex h-[240px] w-full justify-center sm:h-[280px] xl:h-[450px]">
            <img
              src={BannerFooter}
              alt=""
              className="absolute left-[50%] bottom-0 w-[400px] max-w-[calc(100%-40px)] translate-x-[-50%] translate-y-[14.4%] transform xl:w-[600px]"
            />
          </div>
          <div className="w-full bg-brown p-30 sm:p-60 xl:p-[100px] xl:py-[120px]">
            <div className="grid w-full grid-cols-1 gap-60 xl:grid-cols-[1fr,auto] xl:gap-100">
              <div className="grid w-full grid-cols-1">
                <div className="font-azo md:text-56 mb-20 w-full text-24 leading-[110%] text-white sm:mb-30 sm:text-36 lg:text-[80px]">
                  CONTACT
                </div>
                <div className="flex w-full justify-start">
                  <div className="w-[700px] max-w-full text-white-60">
                    Our mission is to empower our community through multiple
                    avenues – including academic education in web3.0 and
                    blockchains, Meta Gorilla token rewards, business assistance
                    tool, networking opportunities, as well as opportunity for
                    receiving business or charity grants. Checkout the whitelist
                    for more information, all of the team members are
                    documented!
                  </div>
                </div>
              </div>
              <div className="flex w-full items-center">
                <button
                  onClick={(e) => openLink(e, "mailto:support@apegorilla.com")}
                  className="relative w-[280px] max-w-full"
                >
                  <div className="absolute top-0 left-0 h-60 w-full -skew-x-12 transform bg-orange "></div>
                  <div className="font-azo relative flex h-60 w-full items-center justify-center px-28 text-14 text-white sm:text-16 md:text-18">
                    EMAIL US
                  </div>
                </button>
              </div>
            </div>
            <div className="my-40 w-full border-b-1 border-white opacity-5 sm:my-60 md:my-[100px]"></div>
            <div className="mb-40 flex w-full justify-center sm:mb-60 md:mb-80">
              <div className="font-azo w-[500px] max-w-full text-center text-24 text-white sm:text-36">
                FOLLOW US ON OUR SOCIAL MEDIA
              </div>
            </div>
            <div className="flex w-full justify-center">
              <div className="grid w-[660px] max-w-full grid-cols-2 gap-30 sm:gap-60 lg:grid-cols-4">
                {socials.map((social: ContactInterface, key: number) => (
                  <div className="flex w-full justify-center" key={key}>
                    <button
                      onClick={(e) => openLink(e, social.url)}
                      className="group flex h-80 w-80 items-center justify-center rounded-full bg-white-10 transition-all duration-200 hover:bg-white sm:h-100 sm:w-100"
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
