import WhitelistTimer from "components/whitelist/WhitelistTimer"
import { useProps } from "contexts/PropsContext"
import { SOCIAL } from "libs/constants"
import React from "react"
import ButtonOrange from "utils/buttons/ButtonOrange"

const WhitelistTop = () => {
  const { ready } = useProps()

  return (
    <>
      {!ready ? (
        <div className="grid w-full grid-cols-1">
          <div className="grid w-full grid-cols-1">
            <WhitelistTimer />
            <div className="font-regular mb-40 w-full text-16 text-white-60 sm:text-18">
              On a mission to building a community surrounded around helping and
              empowering each other with access to high-level events, web3.0
              training, software, and games. Join the Ape Gorilla discord
              channel and join the community! Phase 2 sale is being launched on March 8th for 48
              hours! Dont miss out on this great opportunty!
            </div>
            <div className="flex w-full justify-start gap-20">
              <ButtonOrange title={"JOIN DISCORD!"} link={SOCIAL.DISCORD} />
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
              business or charity grants from the project funds and the public!
            </div>
            <div className="flex w-full justify-start gap-20">
              <ButtonOrange title={"JOIN DISCORD"} link={SOCIAL.DISCORD} />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default WhitelistTop
