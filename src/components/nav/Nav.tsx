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
        className={`fixed top-0 left-0 right-0 z-40 flex h-80 w-full min-w-[300px] items-center transition sm:h-[100px] ${
          scrollPosition > 0 ? "bg-gradient-to-b from-green to-transparent" : ""
        }`}
      >
        <div className="relative flex w-full justify-center px-20 sm:px-30">
          <div className="flex w-full max-w-screen-2xl flex-wrap items-center justify-between gap-10 sm:gap-16">
            <Link
              to={URL.HOME}
              className="flow grid items-center justify-center gap-6"
            >
              <img src={Logo} alt="" className="h-30 sm:h-50" />
              <div className="font-azo hidden text-24 text-white lg:flex">
                APE GORILLA
              </div>
            </Link>
            <div className="flex items-center justify-center gap-12 sm:gap-24">
              <div className="flex items-center justify-center gap-6 sm:gap-24">
                <NavConnect platinum={platinum} />
                <button
                  onClick={(e) => openLink(e, SOCIAL.DISCORD)}
                  className="relative flex"
                >
                  <div className="absolute top-0 left-0 h-44 w-full -skew-x-12 transform bg-white sm:h-50"></div>
                  <div className="relative flex h-44 w-full items-center px-14 sm:h-50  sm:px-20 lg:px-28">
                    <span className="font-azo hidden text-14 text-green sm:text-16 md:text-18 lg:flex">
                      JOIN DISCORD
                    </span>
                    <FaDiscord className="flex text-22 text-green lg:hidden" />
                  </div>
                </button>
              </div>
              <button
                onClick={() => setOpen(!open)}
                className="flex h-40 w-40 items-center justify-center"
              >
                <MdMenu className="text-28 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Wrapper open={open}>
        <div className="fixed top-0 left-0 z-40 h-[100vh] w-full min-w-[300px] bg-green-90 py-14 px-20 sm:py-24 sm:px-30 md:px-40">
          <div className="relative z-20 grid w-full grid-cols-1">
            <div className="mb-20 flex w-full items-center justify-between">
              <Link
                to={URL.HOME}
                className="flow grid items-center justify-center gap-6"
              >
                <img src={Logo} alt="" className="h-36 sm:h-50" />
                <div className="font-azo hidden text-24 text-white lg:flex">
                  Ape Gorilla
                </div>
              </Link>
              <button
                onClick={() => setOpen(!open)}
                className="flex h-20 w-40 items-center justify-center sm:h-30 md:h-40"
              >
                <MdClose className="text-28 text-white" />
              </button>
            </div>
            <div className="flex h-[calc(100vh-100px)] w-full items-center sm:h-[calc(100vh-120px)]">
              <div className="max-h-full w-full overflow-auto">
                <div className="grid w-full grid-cols-1 gap-50 sm:gap-80">
                  <div className="grid w-full grid-cols-1 gap-30">
                    <NavLink url={URL.HOME} title={"HOME"} />
                    <NavLink url={URL.WHITELIST} title={"WHITELIST"} />
                    <Wrapper open={ready}>
                      <NavLink url={URL.MINT} title={"MINT"} />
                    </Wrapper>
                  </div>
                  <div className="grid w-full grid-cols-1">
                    <div className="font-regular mb-20 w-full text-center text-16 text-white-60 sm:text-18">
                      Follow us on our social media.
                    </div>
                    <div className="flex w-full justify-center gap-20">
                      <button
                        onClick={(e) => openLink(e, SOCIAL.TWITTER)}
                        className="group flex h-50 w-50 items-center justify-center rounded-full bg-white-10 transition duration-200 hover:bg-white"
                      >
                        <FaTwitter className="text-22 text-white transition duration-200 group-hover:text-green" />
                      </button>
                      <button
                        onClick={(e) => openLink(e, SOCIAL.DISCORD)}
                        className="group flex h-50 w-50 items-center justify-center rounded-full bg-white-10 transition duration-200 hover:bg-white"
                      >
                        <FaDiscord className="text-22 text-white transition duration-200 group-hover:text-green" />
                      </button>
                      <button
                        onClick={(e) => openLink(e, SOCIAL.INSTAGRAM)}
                        className="group flex h-50 w-50 items-center justify-center rounded-full bg-white-10 transition duration-200 hover:bg-white"
                      >
                        <FaInstagram className="text-22 text-white transition duration-200 group-hover:text-green" />
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
