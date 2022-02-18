import { useProps } from "contexts/PropsContext"
import { SOCIAL } from "libs/constants"
import { openLink } from "libs/functions"
import React, { useState } from "react"
import { IoMdCloseCircle } from "react-icons/io"
import { MdCheckCircle } from "react-icons/md"
import Wrapper from "utils/wrapper/Wrapper"

const WhitelistTop = ({ handler }: { handler: any }) => {
  const { ready } = useProps()

  const [address, setAddress] = useState("")
  const [success, setSuccess] = useState(false)

  const onCheck = () => {
    console.log("Checked")

    setSuccess(true)
    handler([{ image: "", id: 1, address: "123" }])
  }

  return (
    <>
      {!ready ? (
        <div className="grid w-full grid-cols-1">
          <div className="grid w-full grid-cols-1">
            <div className="font-regular mb-40 w-full text-16 text-white-60 sm:text-18">
              On a mission to building a community surrounded around helping and
              empowering each other with access to high-level events, web3.0
              training, software, and games. Join the Ape Gorilla discord
              channel and join the community to get Whitelisted!
            </div>
            <div className="flex w-full justify-start gap-20">
              <button
                onClick={(e) => openLink(e, SOCIAL.DISCORD)}
                className="relative w-full sm:w-auto"
              >
                <div className="absolute top-0 left-0 h-60 w-full -skew-x-12 transform bg-orange "></div>
                <div className="font-azo relative flex h-60 w-full items-center justify-center px-28 text-14 text-white sm:text-16 md:text-18">
                  WHITELIST ME
                </div>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid w-full grid-cols-1">
          <div className="grid w-full grid-cols-1">
            <div className="font-azo mb-30 w-full text-32 leading-[110%] text-white sm:text-[46px] md:text-[52px] lg:text-[64px]">
              YOUR APE GORILLA IS ON THE WAY
            </div>
            <div className="font-regular mb-40 w-full text-16 text-white-60 sm:text-18">
              The Ape Gorilla Club gives the holder a lifetime value token, with
              customized Gorilla’s being the unique art pieces of 11,337 3D
              NFTs. Our mission is to empower our community through multiple
              avenues including academic education in NFTs, web3.0 and
              blockchains, Meta Gorilla token rewards, business assistance tool,
              networking opportunities, as well as opportunity for receiving
              business or charity grants. Checkout the whitelist for more
              information, all of the team members are documented!
            </div>
            <div className="grid w-full grid-cols-1 justify-start gap-20 md:grid-cols-[1fr,auto]">
              <div className="relative grid w-full grid-cols-[1fr,auto] items-center gap-20 px-28">
                <div className="absolute top-0 left-0 h-60 w-full -skew-x-12 transform bg-white "></div>
                <input
                  className="relative flex h-60 w-full items-center text-14 text-brown sm:text-16"
                  placeholder="Your address..."
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <div className="relative h-24 w-24">
                  <Wrapper open={address ? true : false}>
                    {success ? (
                      <MdCheckCircle className="text-state-brown text-24" />
                    ) : (
                      <IoMdCloseCircle className="text-24 text-state-red" />
                    )}
                  </Wrapper>
                </div>
              </div>
              <button onClick={() => onCheck()} className="relative">
                <div className="absolute top-0 left-0 h-60 w-full -skew-x-12 transform bg-orange "></div>
                <div className="font-azo relative flex h-60 w-full items-center justify-center px-28 text-14 text-white sm:text-16 md:text-18">
                  CHECK
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default WhitelistTop
