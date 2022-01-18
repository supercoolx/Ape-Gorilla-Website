import WhitelistTimer from "components/whitelist/WhitelistTimer"
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
        <div className="w-full grid grid-cols-1">
          <div className="w-full grid grid-cols-1">
            <WhitelistTimer />
            <div className="w-full text-white-60 font-regular text-16 sm:text-18 mb-40">
              Our NFT Community gives the holder a lifetime value token, with customized Gorilla’s being the unique art
              pieces of 11,337 3D NFT’s named the “Ape Gorilla” project, which will grant all holders to the “Ape
              Gorilla Club”, and a month after the drop we will launch the “Royal Gorilla” project.
            </div>
            <div className="w-full flex justify-start gap-20">
              <button onClick={(e) => openLink(e, SOCIAL.DISCORD)} className="w-full sm:w-auto relative">
                <div className="absolute top-0 left-0 bg-green-light w-full h-60 transform -skew-x-12 "></div>
                <div className="w-full h-60 relative px-28 text-white font-azo text-14 sm:text-16 md:text-18 flex items-center justify-center">
                  WHITELIST ME
                </div>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full grid grid-cols-1">
          <div className="w-full grid grid-cols-1">
            <div className="mb-30 w-full text-white font-azo text-32 sm:text-[46px] md:text-[52px] lg:text-[64px] leading-[110%]">
              YOUR APE GORILLA IS ON THE WAY
            </div>
            <div className="w-full text-white-60 font-regular text-16 sm:text-18 mb-40">
              The Ape Gorilla Club gives the holder a lifetime value token, with customized Gorilla’s being the unique
              art pieces of 11,337 3D NFTs. This NFT will grant all holders access to the “Ape Gorilla Club”, daily
              token rewards, business investment opportunities, and play-to-earn gamification utilities.
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-[1fr,auto] justify-start gap-20">
              <div className="relative w-full grid grid-cols-[1fr,auto] gap-20 px-28 items-center">
                <div className="absolute top-0 left-0 bg-white w-full h-60 transform -skew-x-12 "></div>
                <input
                  className="w-full h-60 relative text-green text-14 sm:text-16 flex items-center"
                  placeholder="Your address..."
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <div className="relative w-24 h-24">
                  <Wrapper open={address ? true : false}>
                    {success ? (
                      <MdCheckCircle className="text-24 text-state-green" />
                    ) : (
                      <IoMdCloseCircle className="text-24 text-state-red" />
                    )}
                  </Wrapper>
                </div>
              </div>
              <button onClick={() => onCheck()} className="relative">
                <div className="absolute top-0 left-0 bg-green-light w-full h-60 transform -skew-x-12 "></div>
                <div className="w-full h-60 relative px-28 text-white font-azo text-14 sm:text-16 md:text-18 flex items-center justify-center">
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
