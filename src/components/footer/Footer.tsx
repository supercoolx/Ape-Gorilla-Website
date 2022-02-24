import LogoBlack from "assets/img/logo_black.png"
import { ReactComponent as OpenSea } from "assets/img/opensea.svg"
import FooterButton from "components/footer/FooterButton"
import FooterLink from "components/footer/FooterLink"
import { useProps } from "contexts/PropsContext"
import { SOCIAL, URL } from "libs/constants"
import { openLink } from "libs/functions"
import React from "react"
import {
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaReddit,
  FaTwitter,
  FaYoutube
} from "react-icons/fa"
import { SiTiktok } from "react-icons/si"
import { Link } from "react-router-dom"
import Wrapper from "utils/wrapper/Wrapper"

const Footer = () => {
  const { ready } = useProps()

  return (
    <>
      <div className="relative w-full bg-brown">
        <div className="flex w-full justify-center bg-white px-20 pb-30 pt-30 sm:px-30 sm:pb-40 sm:pt-40 xl:pt-60">
          <div className="grid w-full max-w-screen-2xl grid-cols-1 gap-20 sm:gap-30 md:gap-40">
            <div className="grid w-full grid-cols-1 items-start justify-between gap-20 sm:gap-40 xl:grid-cols-[1fr,auto]">
              <div className="grid w-full grid-cols-1 gap-30">
                <div className="flex w-full justify-start">
                  <Link
                    to={URL.HOME}
                    className="flow grid items-center justify-center gap-12"
                  >
                    <img src={LogoBlack} alt="" className="h-30 sm:h-50" />
                    <div className="font-azo hidden text-24 text-brown lg:flex">
                      APE GORILLA
                    </div>
                  </Link>
                </div>
                <div className="flex w-full justify-start">
                  <div className="text-brown-60 w-[400px] max-w-full text-14 sm:text-16">
                    11,337 unique NFT tokens, which provide access to an
                    exclusive club.
                  </div>
                </div>
              </div>
              <div className="flex w-full items-start">
                <div className="grid grid-cols-1 items-start gap-40 sm:gap-60 xl:grid-cols-2 xl:gap-80">
                  <div className="flex w-full items-start">
                    <div className="grid grid-cols-1 gap-30">
                      <div className="font-azo w-full text-24 text-brown">
                        Links
                      </div>
                      <div className="grid w-[210px] grid-cols-1 gap-20">
                        <FooterButton
                          url={SOCIAL.DISCORD}
                          title={"JOIN DISCORD"}
                        />
                        <Wrapper open={ready}>
                          <FooterLink url={URL.MINT} title={"MINT"} />
                        </Wrapper>
                        <FooterLink url={URL.CONTACT} title={"CONTACT"} />
                        <FooterButton
                          url={SOCIAL.TERMS}
                          title={"TERMS AND CONDITIONS "}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full items-start">
                    <div className="grid grid-cols-1 gap-30">
                      <div className="font-azo w-full text-24 text-brown">
                        Follow us
                      </div>
                      <div className="grid w-full grid-cols-4 justify-start gap-20">
                        <button
                          onClick={(e) => openLink(e, SOCIAL.TWITTER)}
                          className="group bg-brown-10 flex h-50 w-50 items-center justify-center rounded-full transition duration-200 hover:bg-brown"
                        >
                          <FaTwitter className="text-22 text-brown group-hover:text-white" />
                        </button>
                        <button
                          onClick={(e) => openLink(e, SOCIAL.DISCORD)}
                          className="group bg-brown-10 flex h-50 w-50 items-center justify-center rounded-full transition duration-200 hover:bg-brown"
                        >
                          <FaDiscord className="text-22 text-brown group-hover:text-white" />
                        </button>
                        <button
                          onClick={(e) => openLink(e, SOCIAL.INSTAGRAM)}
                          className="group bg-brown-10 flex h-50 w-50 items-center justify-center rounded-full transition duration-200 hover:bg-brown"
                        >
                          <FaInstagram className="text-22 text-brown group-hover:text-white" />
                        </button>
                        <button
                          onClick={(e) => openLink(e, SOCIAL.REDDIT)}
                          className="group bg-brown-10 flex h-50 w-50 items-center justify-center rounded-full transition duration-200 hover:bg-brown"
                        >
                          <FaReddit className="text-22 text-brown group-hover:text-white" />
                        </button>
                        <button
                          onClick={(e) => openLink(e, SOCIAL.OPENSEA)}
                          className="group bg-brown-10 flex h-50 w-50 items-center justify-center rounded-full transition duration-200 hover:bg-brown"
                        >
                          <OpenSea className="fill-current text-22 text-brown group-hover:text-white" />
                        </button>
                        <button
                          onClick={(e) => openLink(e, SOCIAL.FACEBOOK)}
                          className="group bg-brown-10 flex h-50 w-50 items-center justify-center rounded-full transition duration-200 hover:bg-brown"
                        >
                          <FaFacebook className="text-22 text-brown group-hover:text-white" />
                        </button>
                        <button
                          onClick={(e) => openLink(e, SOCIAL.YOUTUBE)}
                          className="group bg-brown-10 flex h-50 w-50 items-center justify-center rounded-full transition duration-200 hover:bg-brown"
                        >
                          <FaYoutube className="text-22 text-brown group-hover:text-white" />
                        </button>
                        <button
                          onClick={(e) => openLink(e, SOCIAL.TIKTOK)}
                          className="group bg-brown-10 flex h-50 w-50 items-center justify-center rounded-full transition duration-200 hover:bg-brown"
                        >
                          <SiTiktok className="text-22 text-brown group-hover:text-white" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-brown-10 w-full border-b-1"></div>
            <div className="text-brown-60 w-full text-center text-14 sm:text-16 md:text-18">
              © {new Date().getFullYear()} Schwarz Enterprise LLC. All Rights
              Reserved.
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
