import Logo from "assets/img/logo.png"
import NavConnect from "components/nav/NavConnect"
import NavOpen from "components/nav/NavOpen"
import { SOCIAL, URL } from "libs/constants"
import { openLink } from "libs/functions"
import React, { useEffect, useState } from "react"
import { FaDiscord } from "react-icons/fa"
import { MdMenu } from "react-icons/md"
import { Link } from "react-router-dom"

const Nav = ({ platinum }: { platinum?: boolean }) => {
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
          scrollPosition > 0 ? "bg-gradient-to-b from-brown to-transparent" : ""
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
                  className="group relative flex"
                >
                  <div className="absolute top-0 left-0 h-44 w-full -skew-x-12 transform bg-white transition-all duration-200 group-hover:bg-brown sm:h-50"></div>
                  <div className="relative flex h-44 w-full items-center px-14 sm:h-50  sm:px-20 lg:px-28">
                    <span className="font-azo hidden text-14 text-brown transition-all duration-200 group-hover:text-white sm:text-16 md:text-18 lg:flex">
                      JOIN DISCORD
                    </span>
                    <FaDiscord className="flex text-22 text-brown transition-all duration-200 group-hover:text-white lg:hidden" />
                  </div>
                </button>
              </div>
              <button
                onClick={() => setOpen(!open)}
                className="group flex h-40 w-40 items-center justify-center"
              >
                <MdMenu className="text-28 text-white transition-all duration-200 group-hover:text-orange" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <NavOpen open={open} handler={setOpen} />
    </>
  )
}

export default Nav
