import { RoadmapInterface } from "libs/interfaces"
import React, { useEffect, useRef, useState } from "react"
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"
import { useSwipeable } from "react-swipeable"
import Wrapper from "utils/wrapper/Wrapper"

const HomeRoadmap = () => {
  const wrapper = useRef<HTMLDivElement>(null)
  const item = useRef<HTMLDivElement>(null)

  const [step, setStep] = useState(0)

  const [widthItem, setWidthItem] = useState(440)
  const [widthWrapper, setWidthWrapper] = useState(440)

  const [roadmap] = useState<RoadmapInterface[]>([
    {
      title: "WELCOME TO THE CLUB!",
      text: "The Ape Gorilla Club gives the holder a lifetime value NFT, with customized Gorilla’s being the unique art pieces of 11,337 3D NFTs, giving you also the 3D model to be used and imported in future games and metaverses. This NFT will grant all holders access to the “Ape Gorilla Club”, rewards, business investment opportunities, and NFT gamification utilities.",
    },
    {
      title: "$6M+ TOTAL GIVEAWAYS",
      text: "700 ETH is reserved for our official partners of the people of the Kingdom of Bhutan. Over $3,000,000 in USD is reserved to give-away angel investments to business proposals made by Ape Gorilla NFT holders. The minimum angel investment is $5,000 and up to $100,000 for each and any business proposal that falls under the criteria of helping other people, or changing people's lives. We will have a dedicated auditing team to ensure the business proposals are legit.",
    },
    {
      title: "COMMUNITY",
      text: "Ape Gorilla Kick-Off networking meetings will be organized worldwide locations in Europe, Asia, the Caribbean, and North & South America exclusively held for Ape Gorilla NFT holders. The events will be dedicated to community networking and masterminds to learn about Web3.0 online business opportunities, education on crypto, NFT’s, DeFi, and blockchain technology, supported by influential leading speakers in the crypto and NFT space.",
    },
    {
      title: "META GORILLA",
      text: "We will have our own “Meta Gorilla” to reward NFT holders via our website by calling the smart contract. Utilizing Meta Gorilla for the games and to evolve your Ape Gorilla NFT into a Royal Gorilla. The second way of earning rewards is via games, where we enable for our NFT holders which allows players to earn “Meta Gorilla” for accomplishing tasks or achievements in-game.",
    },
    {
      title: "EVOLUTION",
      text: "700 ETH is reserved for our official partners of the people of the Kingdom of Bhutan. Over $3,000,000 in USD is reserved to give-away angel investments to business proposals made by Ape Gorilla NFT holders. The minimum angel investment is $5,000 and up to $100,000 for each and any business proposal that falls under the criteria of helping other people, or changing people's lives. We will have a dedicated auditing team to ensure the business proposals are legit.",
    },
    {
      title: "MERCH",
      text: "Launch of the “Ape Gorilla” Merchandise with the option to customize merch with a drag-and-drop fashion building software to enable the creative side of our community. Holders will be able to upload their Ape Gorilla model on their desired merch to upload their NFT design onto merch and sell it on our open marketplace.",
    },
    {
      title: "ACADEMY",
      text: "2022 Ape Gorilla Academy (Web 3.0) As we jump into the new world of blockchains, cryptocurrency, NFT’s, Decentralized Apps, and Decentralized Finance, we want to ensure the community has the right support to resources and knowledge centers to learn cutting edge technologies.",
    },
    {
      title: "NFT GAMIFICATION",
      text: "Our team will be launching play-to-earn games, which include an (FPS) First Person Shooter Multiplayer game, while in parallel we will build an MMORPG 3D Game to create a metaverse utility experience for NFT’s and our community.",
    },
    {
      title: "MASTERMINDS",
      text: "We will hold a mastermind event for our loyal holders, rare NFT’s, and VIP members of the Ape Gorilla Club for an exclusive mastermind experience.",
    },
  ])

  useEffect(() => {
    window.addEventListener("resize", onResize)
    return () => {
      window.removeEventListener("resize", onResize)
    }
  }, [])

  useEffect(() => {
    if (item && item.current) {
      setWidthItem(item.current.clientWidth)
    }
  }, [item])

  useEffect(() => {
    if (wrapper && wrapper.current) {
      setWidthWrapper(wrapper.current.clientWidth)
    }
  }, [wrapper])

  const swipeable = useSwipeable({
    onSwipedLeft: () => {
      onStep(1)
    },
    onSwipedRight: () => {
      onStep(-1)
    },
  })

  const onResize = () => {
    if (item && item.current) {
      setWidthItem(item.current.clientWidth)
    }

    if (wrapper && wrapper.current) {
      setWidthWrapper(wrapper.current.clientWidth)
    }
  }

  const onStep = (offset: number) => {
    if (step + offset < 0) {
      setStep(roadmap.length - 1)
    } else if (step + offset >= roadmap.length) {
      setStep(0)
    } else {
      setStep(step + offset)
    }
  }

  return (
    <>
      <div {...swipeable} className="w-full relative mb-40 mt-[-80px] xl:mt-[-160px] z-10">
        <div className="absolute w-screen top-0 bottom-0 bg-white left-[50%] transform translate-x-[-50%]"></div>
        <div className="w-full relative grid grid-cols-1 gap-100 py-40 sm:py-60 md:py-100 bg-white">
          <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr,auto] gap-40 sm:gap-60">
            <div className="w-full flex justify-start">
              <div className="w-[550px] xl:w-[650px] max-w-full grid grid-cols-1 gap-20 sm:gap-30">
                <div className="w-full text-left font-azo text-green text-24 sm:text-36 md:text-48 lg:text-[56px]">
                  ROADMAP
                </div>
                <div className="text-green-60 text-14 sm:text-16 md:text-18 text-left">
                  Our mission is to empower our community in educational growth, business and networking opportunities,
                  play to earn games, test our boundaries and create a community mindset around a Happiness Index,
                  modeled by the Kingdom of Bhutan.
                </div>
              </div>
            </div>
            <div className="flex items-center gap-10">
              <button onClick={() => onStep(-1)} className="w-80 h-50 flex items-center justify-center relative">
                <div className="absolute top-0 left-0 bg-green w-full h-50 transform -skew-x-12 "></div>
                <MdKeyboardArrowLeft className="text-24 text-white relative" />
              </button>
              <button onClick={() => onStep(1)} className="w-80 h-50 flex items-center justify-center relative">
                <div className="absolute top-0 left-0 bg-green w-full h-50 transform -skew-x-12 "></div>
                <MdKeyboardArrowRight className="text-24 text-white relative" />
              </button>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <div className="w-full relative">
              <div className="absolute w-screen top-[17px] left-[50%] transform translate-x-[-50%] h-2 overflow-hidden">
                <div className="absolute bottom-0 top-0 bg-green-10 w-full h-2 left-0"></div>
                <div className="absolute top-[-1px] left-0 h-4 w-80 bg-gradient-to-r from-white to-white-0"></div>
                <div className="absolute top-[-1px] right-0 h-4 w-80 bg-gradient-to-l from-white to-white-0"></div>
              </div>
              <div
                ref={wrapper}
                style={{ transform: `translateX(${-step * widthItem}px)` }}
                className="w-full relative transition-all duration-200"
              >
                <div className="w-max flex">
                  {roadmap.map((entry: RoadmapInterface, key: number) => (
                    <div
                      style={{ width: `${Math.min(widthWrapper, 440)}px` }}
                      className="relative gap-24 pr-20 sm:pr-40 md:pr-60"
                      key={key}
                    >
                      <Wrapper open={key === 0}>
                        <div ref={item} className="absolute top-0 left-0 w-full"></div>
                      </Wrapper>
                      <div className="w-full mb-60 sm:mb-80 flex justify-start">
                        <div
                          className={`w-36 h-36 rounded-full border-2 bg-white flex items-center justify-center relative ${
                            step >= key ? "border-green-light" : "border-green-60"
                          }`}
                        >
                          <div
                            className={`absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] w-24 h-24 rounded-full ${
                              step >= key ? "bg-green-light" : "bg-green-60"
                            }`}
                          ></div>
                        </div>
                      </div>
                      <div
                        className={`w-full text-24 md:text-36 mb-24 font-azo ${
                          step >= key ? "text-green" : "text-green-60"
                        }`}
                      >
                        {entry.title}
                      </div>
                      <div className=" w-full font-regular text-green-60 text-14 sm:text-16 md:text-18">
                        {entry.text}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeRoadmap
