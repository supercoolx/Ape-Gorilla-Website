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
      title: "COMMUNITY",
      text: "Ape Gorilla Kick-Off networking meetings will be organized worldwide locations in Europe, Asia, the Caribbean, and North & South America exclusively held for Ape Gorilla NFT holders. The events will be dedicated to community networking and masterminds to learn about Web3.0 online business opportunities, education on crypto, NFT’s, DeFi, and blockchain technology, supported by influential leading speakers in the crypto and NFT space.",
    },
    {
      title: "MASTERMINDS",
      text: "We will hold mastermind events for our loyal holders, rare NFT’s, and VIP members of the Ape Gorilla Club for exclusive mastermind experiences. These events will be incredible luxurious experiences around the world, held at amazing locations like beachfront villas, yachts, and mansions, accessible only to our VIP holders. We want to give our community the opportunity to network and brainstorm with other VIP guests, as well as high net-worth and influential individuals.",
    },
    {
      title: "PHYSICAL ACCESS",
      text: "Ape Gorilla will also give each Ape Gorilla NFT holder exclusive privilege access and benefits to Physical Clubs, Restaurants and villas acquired or leased over the years for our community. All of which will provide the community with many more opportunities for networking with each other, and creating an exclusive community. Each location will be leased or bought out as a community decision, made with a voting system only announced to Ape Gorilla NFT holders.",
    },
    {
      title: "SOFTWARE",
      text: "We will launch Gorilla Build soon! This is a Software as Service to easily build Website, Sales Funnels, Email Marketing Campaigns, Booking Appointment system, Landing pages and more via drag-and-drop functionalities. This software tool will serve as a utility to empower the community to create and build online businesses easily, at cost price or free where possible for the community. This software is ready to be launched soon and already exists with a huge proven track record of thousands of successful entrepreneurs using the platform.",
    },
    {
      title: "ACADEMY",
      text: "As we jump into the new world of blockchains, cryptocurrencies, NFT’s, Decentralized Apps and Decentralized Finance, we want to ensure the community has the right support, resources, and knowledge to learn everything there is to know about these cutting edge technologies.",
    },
    {
      title: "MERCH MARKETPLACE",
      text: "We will Launch the “Ape Gorilla” Merchandise software which will allow Ape Gorilla NFT holders the option to customize merchandise wear, with a drag-and-drop fashion design software, to enable the community to create their own merch. Holders will be able to “outfit” their Ape Gorilla NFT model with their customized merch and sell it on the Ape Gorilla marketplace. These software mechanics have already been built and are in BETA.",
    },
    {
      title: "META GORILLA & EVOLUTION",
      text: "We will launch our own Token “Meta Gorilla” to reward our NFT holders who can claim rewards on our website by calling the smart contract. We will then launch the second Royal Gorilla NFT Collection, which can only be minted by Ape Gorilla holders, purchasing a “Golden Chalice” to “Evolve” their Ape Gorilla to mint an additional Royal Gorilla NFT.",
    },
    {
      title: "GAMIFICATION",
      text: "Our team will be launching a (FPS) First Person Shooter Multiplayer game with play to earn capabilities. Along with the community, and in parallel, we will build a MMORPG 3D Game to interact with the community in a virtual environment.",
    },
    {
      title: "BUSINESS AND CHARITY GRANTS",
      text: "From the Ape Gorilla NFT sale collection, we will reserve funds to fund business or charity proposals to Ape Gorilla NFT holders requests. We are willing to contribute and fund as many businesses or charities in 2022 as possible, that have a positive impact around the NFT holders community. We will create an open accounting for the business proposals, to allow the community to fund charities, or businesses that help other people to make positive impacts in their communities. The idea to create the framework behind this is to empower the community to bring awareness to assist in their local causes.",
    },
    {
      title: "SOCIAL GOOD",
      text: "Additionally from the NFT public sale collection, we will also be donating 10% to the Kingdom of Bhutan for the Bhutanese Community Based Organization that is organized by The Ape Gorilla Kingdom of Bhutan's Ambassador’s, and our Partners from the Kingdom of Bhutan, Leon Rabten and Leona Choden Wangchuk, also our Ape Gorilla core founding members. These funds will help with increasing the Happiness Index of Bhutan and its development into the new world and youth development.",
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
                  Welcome to our Roadmap! Theres a lot to take in, but Ape Gorilla NFT will grant all holders access to the “Ape Gorilla Club”, allowing holders to participate in networking events, high level masterminds, meetup parties, Meta Gorilla rewards, business and charity grant opportunities, software tools, as well as Blockchains and Web3.0 academy. Ape Gorilla will also give each Ape Gorilla NFT holder exclusive privilege access and benefits to Physical Clubs, Restaurants and Villas acquired by us and our partners or leased over the years for our community.
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
