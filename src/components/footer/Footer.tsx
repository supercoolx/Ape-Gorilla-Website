import LogoBlack from "assets/img/logo_black.png"
import { ReactComponent as OpenSea } from "assets/img/opensea.svg"
import FooterButton from "components/footer/FooterButton"
import FooterLink from "components/footer/FooterLink"
import { useProps } from "contexts/PropsContext"
import { SOCIAL, URL } from "libs/constants"
import { openLink } from "libs/functions"
import React from "react"
import { FaDiscord, FaFacebook, FaInstagram, FaReddit, FaTwitter, FaYoutube } from "react-icons/fa"
import { SiTiktok } from "react-icons/si"
import { Link } from "react-router-dom"
import Wrapper from "utils/wrapper/Wrapper"

const Footer = () => {
  const { ready } = useProps()

  return (
    <>
      <div className="w-full bg-green relative">
        <div className="w-full pb-30 sm:pb-40 pt-30 sm:pt-40 xl:pt-60 justify-center flex px-20 sm:px-30 bg-white">
          <div className="w-full max-w-screen-2xl grid grid-cols-1 gap-20 sm:gap-30 md:gap-40">
            <div className="w-full grid grid-cols-1 xl:grid-cols-[1fr,auto] items-start gap-20 sm:gap-40 justify-between">
              <div className="w-full grid grid-cols-1 gap-30">
                <div className="w-full flex justify-start">
                  <Link to={URL.HOME} className="grid flow items-center justify-center gap-12">
                    <img src={LogoBlack} alt="" className="h-30 sm:h-50" />
                    <div className="hidden lg:flex font-azo text-green text-24">APE GORILLA</div>
                  </Link>
                </div>
                <div className="w-full flex justify-start">
                  <div className="w-[400px] max-w-full text-14 sm:text-16 text-green-60">
                    11,337 unique NFT tokens, which provide access to an exclusive club.
                  </div>
                </div>
              </div>
              <div className="w-full flex items-start">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-40 sm:gap-60 xl:gap-80 items-start">
                  <div className="w-full flex items-start">
                    <div className="grid grid-cols-1 gap-30">
                      <div className="w-full font-azo text-24 text-green">Links</div>
                      <div className="w-[210px] grid grid-cols-1 gap-20">
                        <FooterButton url={SOCIAL.DISCORD} title={"WHITELIST SIGNUP"} />
                        <Wrapper open={ready}>
                          <FooterLink url={URL.MINT} title={"MINT"} />
                        </Wrapper>
                        <FooterLink url={URL.CONTACT} title={"CONTACT"} />
                        <FooterButton url={SOCIAL.WHITEPAPER} title={"WHITEPAPER"} />
                        <FooterButton url={SOCIAL.TERMS} title={"TERMS AND CONDITIONS"} />
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex items-start">
                    <div className="grid grid-cols-1 gap-30">
                      <div className="w-full font-azo text-24 text-green">Follow us</div>
                      <div className="w-full grid grid-cols-4 justify-start gap-20">
                        <button
                          onClick={(e) => openLink(e, SOCIAL.TWITTER)}
                          className="w-50 h-50 rounded-full bg-green-10 hover:bg-green flex items-center justify-center transition duration-200 group"
                        >
                          <FaTwitter className="text-22 text-green group-hover:text-white" />
                        </button>
                        <button
                          onClick={(e) => openLink(e, SOCIAL.DISCORD)}
                          className="w-50 h-50 rounded-full bg-green-10 hover:bg-green flex items-center justify-center transition duration-200 group"
                        >
                          <FaDiscord className="text-22 text-green group-hover:text-white" />
                        </button>
                        <button
                          onClick={(e) => openLink(e, SOCIAL.INSTAGRAM)}
                          className="w-50 h-50 rounded-full bg-green-10 hover:bg-green flex items-center justify-center transition duration-200 group"
                        >
                          <FaInstagram className="text-22 text-green group-hover:text-white" />
                        </button>
                        <button
                          onClick={(e) => openLink(e, SOCIAL.REDDIT)}
                          className="w-50 h-50 rounded-full bg-green-10 hover:bg-green flex items-center justify-center transition duration-200 group"
                        >
                          <FaReddit className="text-22 text-green group-hover:text-white" />
                        </button>
                        <button
                          onClick={(e) => openLink(e, SOCIAL.OPENSEA)}
                          className="w-50 h-50 rounded-full bg-green-10 hover:bg-green flex items-center justify-center transition duration-200 group"
                        >
                          <OpenSea className="fill-current text-22 text-green group-hover:text-white" />
                        </button>
                        <button
                          onClick={(e) => openLink(e, SOCIAL.FACEBOOK)}
                          className="w-50 h-50 rounded-full bg-green-10 hover:bg-green flex items-center justify-center transition duration-200 group"
                        >
                          <FaFacebook className="text-22 text-green group-hover:text-white" />
                        </button>
                        <button
                          onClick={(e) => openLink(e, SOCIAL.YOUTUBE)}
                          className="w-50 h-50 rounded-full bg-green-10 hover:bg-green flex items-center justify-center transition duration-200 group"
                        >
                          <FaYoutube className="text-22 text-green group-hover:text-white" />
                        </button>
                        <button
                          onClick={(e) => openLink(e, SOCIAL.TIKTOK)}
                          className="w-50 h-50 rounded-full bg-green-10 hover:bg-green flex items-center justify-center transition duration-200 group"
                        >
                          <SiTiktok className="text-22 text-green group-hover:text-white" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full border-b-1 border-green-10"></div>
            <div className="w-full text-14 sm:text-16 md:text-18 text-green-60 text-center">
              © {new Date().getFullYear()} Schwarz Enterprise LLC. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
