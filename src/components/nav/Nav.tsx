import Logo from "assets/img/logo.png"
import NavConnect from "components/nav/NavConnect"
import NavLink from "components/nav/NavLink"
import { useProps } from "contexts/PropsContext"
import { SOCIAL, URL } from "libs/constants"
import { openLink } from "libs/functions"
import React, { useEffect, useState } from "react"
import { FaTwitter, FaDiscord, FaInstagram } from "react-icons/fa"
import { MdClose, MdMenu } from "react-icons/md"
import { Link } from "react-router-dom"
import Wrapper from "utils/wrapper/Wrapper"

const Nav = ({ platinum }: { platinum?: boolean }) => {
  const { ready } = useProps()

  const [open, setOpen] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    handleScroll()

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollPosition(position)
  }

  return (
    <>
      <div
        className={`fixed w-full z-40 min-w-[300px] h-80 sm:h-[100px] top-0 left-0 right-0 flex items-center transition ${
          scrollPosition > 0 ? "bg-gradient-to-b from-green to-transparent" : ""
        }`}
      >
        <div className="relative w-full flex justify-center px-20 sm:px-30">
          <div className="flex w-full max-w-screen-2xl flex-wrap gap-10 sm:gap-16 justify-between items-center">
            <Link to={URL.HOME} className="grid flow items-center justify-center gap-6">
              <img src={Logo} alt="" className="h-30 sm:h-50" />
              <div className="hidden lg:flex font-azo text-white text-24">APE GORILLA</div>
            </Link>
            <div className="flex items-center justify-center gap-12 sm:gap-24">
              <div className="flex items-center justify-center gap-6 sm:gap-24">
                <NavConnect platinum={platinum} />
                <button onClick={(e) => openLink(e, SOCIAL.DISCORD)} className="flex relative">
                  <div className="absolute top-0 left-0 bg-white w-full h-44 sm:h-50 transform -skew-x-12"></div>
                  <div className="w-full h-44 sm:h-50 relative px-14 sm:px-20 lg:px-28  flex items-center">
                    <span className="hidden lg:flex text-green font-azo text-14 sm:text-16 md:text-18">
                      JOIN DISCORD
                    </span>
                    <FaDiscord className="flex lg:hidden text-green text-22" />
                  </div>
                </button>
              </div>
              <button onClick={() => setOpen(!open)} className="w-40 h-40 flex justify-center items-center">
                <MdMenu className="text-white text-28" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Wrapper open={open}>
        <div className="z-40 fixed min-w-[300px] top-0 left-0 w-full h-[100vh] bg-green-90 py-14 px-20 sm:py-24 sm:px-30 md:px-40">
          <div className="z-20 w-full grid grid-cols-1 relative">
            <div className="w-full flex justify-between items-center mb-20">
              <Link to={URL.HOME} className="grid flow items-center justify-center gap-6">
                <img src={Logo} alt="" className="h-36 sm:h-50" />
                <div className="hidden lg:flex font-azo text-white text-24">Ape Gorilla</div>
              </Link>
              <button
                onClick={() => setOpen(!open)}
                className="w-40 h-20 sm:h-30 md:h-40 flex justify-center items-center"
              >
                <MdClose className="text-white text-28" />
              </button>
            </div>
            <div className="w-full flex items-center h-[calc(100vh-100px)] sm:h-[calc(100vh-120px)]">
              <div className="w-full max-h-full overflow-auto">
                <div className="w-full grid grid-cols-1 gap-50 sm:gap-80">
                  <div className="w-full grid grid-cols-1 gap-30">
                    <NavLink url={URL.HOME} title={"HOME"} />
                    <NavLink url={URL.WHITELIST} title={"WHITELIST"} />
                    <Wrapper open={ready}>
                      <NavLink url={URL.MINT} title={"MINT"} />
                    </Wrapper>
                  </div>
                  <div className="w-full grid grid-cols-1">
                    <div className="w-full text-white-60 font-regular text-center text-16 sm:text-18 mb-20">
                      Follow us on our social media.
                    </div>
                    <div className="w-full flex justify-center gap-20">
                      <button
                        onClick={(e) => openLink(e, SOCIAL.TWITTER)}
                        className="w-50 h-50 rounded-full bg-white-10 hover:bg-white flex items-center justify-center transition duration-200 group"
                      >
                        <FaTwitter className="text-22 text-white group-hover:text-green transition duration-200" />
                      </button>
                      <button
                        onClick={(e) => openLink(e, SOCIAL.DISCORD)}
                        className="w-50 h-50 rounded-full bg-white-10 hover:bg-white flex items-center justify-center transition duration-200 group"
                      >
                        <FaDiscord className="text-22 text-white group-hover:text-green transition duration-200" />
                      </button>
                      <button
                        onClick={(e) => openLink(e, SOCIAL.INSTAGRAM)}
                        className="w-50 h-50 rounded-full bg-white-10 hover:bg-white flex items-center justify-center transition duration-200 group"
                      >
                        <FaInstagram className="text-22 text-white group-hover:text-green transition duration-200" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  )
}

export default Nav
