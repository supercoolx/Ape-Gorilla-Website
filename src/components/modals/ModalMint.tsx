import Logo from "assets/img/logo.png"
import Modal from "components/modals/Modal"
import { SOCIAL } from "libs/constants"
import { openLink } from "libs/functions"
import React from "react"
import { FaTwitter, FaDiscord, FaInstagram } from "react-icons/fa"

const ModalMint = ({ count, open, handler }: { count: number; open: boolean; handler: any }) => {
  return (
    <>
      <Modal open={open} handler={handler}>
        <div className="light w-full flex justify-center">
          <div className="w-[860px] max-w-full grid grid-cols-1">
            <div className="w-full flex justify-center mb-80">
              <img src={Logo} alt="" className="h-82" />
            </div>
            <div className="w-full mb-40 text-white text-32 sm:text-[44px] md:text-[50px] lg:text-[64px] font-azo text-center leading-[110%]">
              {count === 1 ? (
                <>
                  You successfully minted your{" "}
                  <span className="text-green-light text-32 sm:text-[44px] md:text-[50px] lg:text-[64px] font-azo">
                    Ape Gorilla
                  </span>{" "}
                  NFT
                </>
              ) : (
                <>
                  You successfully minted your{" "}
                  <span className="text-green-light text-32 sm:text-[44px] md:text-[50px] lg:text-[64px] font-azo">
                    45 Ape Gorilla
                  </span>{" "}
                  NFT&apos;s
                </>
              )}
            </div>
            <div className="w-full text-white-60 font-regular text-center text-16 sm:text-18 mb-20">
              Share your mint on social media.
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
      </Modal>
    </>
  )
}

export default ModalMint
