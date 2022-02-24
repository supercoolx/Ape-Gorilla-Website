import { animated, useTransition } from "@react-spring/web"
import Logo from "assets/img/logo.png"
import NavLink from "components/nav/NavLink"
import { useProps } from "contexts/PropsContext"
import { SOCIAL, SPRING, URL } from "libs/constants"
import { openLink } from "libs/functions"
import React from "react"
import { FaTwitter, FaDiscord, FaInstagram } from "react-icons/fa"
import { MdClose } from "react-icons/md"
import { Link } from "react-router-dom"
import Wrapper from "utils/wrapper/Wrapper"

const NavOpen = ({ open, handler }: { open: boolean; handler: any }) => {
  const { ready } = useProps()

  const transition = useTransition(open, {
    config: SPRING,
    from: { opacity: "0" },
    enter: { opacity: "1" },
    leave: { opacity: "0" }
  })

  return (
    <>
      {transition((style: any, item: boolean) => {
        return item ? (
          <animated.div
            style={style}
            className="fixed top-0 left-0 z-40 h-[100vh] w-full min-w-[300px] bg-brown-90 py-14 px-20 sm:py-24 sm:px-30"
          >
            <div className="relative z-20 grid w-full grid-cols-1">
              <div className="flex w-full justify-center">
                <div className="mb-20 flex w-full max-w-screen-2xl items-center justify-between">
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
                    onClick={() => handler(!open)}
                    className="flex h-20 w-40 items-center justify-center sm:h-30 md:h-40"
                  >
                    <MdClose className="text-28 text-white" />
                  </button>
                </div>
              </div>
              <div className="flex h-[calc(100vh-100px)] w-full items-center sm:h-[calc(100vh-120px)]">
                <div className="max-h-full w-full overflow-auto">
                  <div className="grid w-full grid-cols-1 gap-50 sm:gap-80">
                    <div className="grid w-full grid-cols-1 gap-30">
                      <NavLink url={URL.HOME} title={"HOME"} />
                      <NavLink url={URL.WHITELIST} title={"DISCORD"} />
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
                          <FaTwitter className="text-22 text-white transition duration-200 group-hover:text-brown" />
                        </button>
                        <button
                          onClick={(e) => openLink(e, SOCIAL.DISCORD)}
                          className="group flex h-50 w-50 items-center justify-center rounded-full bg-white-10 transition duration-200 hover:bg-white"
                        >
                          <FaDiscord className="text-22 text-white transition duration-200 group-hover:text-brown" />
                        </button>
                        <button
                          onClick={(e) => openLink(e, SOCIAL.INSTAGRAM)}
                          className="group flex h-50 w-50 items-center justify-center rounded-full bg-white-10 transition duration-200 hover:bg-white"
                        >
                          <FaInstagram className="text-22 text-white transition duration-200 group-hover:text-brown" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </animated.div>
        ) : (
          <></>
        )
      })}
    </>
  )
}

export default NavOpen
