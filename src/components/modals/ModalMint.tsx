import Logo from "assets/img/logo.png"
import Modal from "components/modals/Modal"
import { SOCIAL } from "libs/constants"
import { openLink } from "libs/functions"
import React from "react"
import { FaTwitter, FaDiscord, FaInstagram } from "react-icons/fa"

const ModalMint = ({
  count,
  open,
  handler
}: {
  count: number
  open: boolean
  handler: any
}) => {
  return (
    <>
      <Modal open={open} handler={handler}>
        <div className="light flex w-full justify-center">
          <div className="grid w-[860px] max-w-full grid-cols-1">
            <div className="mb-80 flex w-full justify-center">
              <img src={Logo} alt="" className="h-82" />
            </div>
            <div className="font-azo mb-40 w-full text-center text-32 leading-[110%] text-white sm:text-[44px] md:text-[50px] lg:text-[64px]">
              {count === 1 ? (
                <>
                  You successfully minted your{" "}
                  <span className="font-azo text-32 text-orange sm:text-[44px] md:text-[50px] lg:text-[64px]">
                    Ape Gorilla
                  </span>{" "}
                  NFT
                </>
              ) : (
                <>
                  You successfully minted your{" "}
                  <span className="font-azo text-32 text-orange sm:text-[44px] md:text-[50px] lg:text-[64px]">
                    {count} Ape Gorilla
                  </span>{" "}
                  NFT&apos;s
                </>
              )}
            </div>
            <div className="font-regular mb-20 w-full text-center text-16 text-white-60 sm:text-18">
              Share your mint on social media.
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
      </Modal>
    </>
  )
}

export default ModalMint
