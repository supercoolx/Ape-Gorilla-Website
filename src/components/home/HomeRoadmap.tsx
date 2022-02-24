import { RoadmapInterface } from "libs/interfaces"
import React, { useEffect, useRef, useState } from "react"
import {
  MdCheck,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight
} from "react-icons/md"
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
      title: "SOFTWARE",
      text: "We HAVE LAUNCHED Gorilla Build! Get 100% lifetime off for pre-sale buyers! This is a Software as Service to easily build Website, Sales Funnels, Email Marketing Campaigns, Booking Appointment system, Landing pages and more via drag-and-drop functionalities. This software tool serves as a utility to empower the community to create and build online businesses easily, at cost price or free where possible for the community. This software is ready to use at GorillaBuild.com"
    },
    {
      title: "BUSINESS AND CHARITY GRANTS",
      text: "From the Ape Gorilla NFT sale collection, we will reserve 20% of the public sale revenue to fund business or charity proposals, as long as its aimed to help other people, or make a postive impact. We are working on creating a decentralized Go-Fund Me webapp to allow the community and public to directly send funds to businesses or charities with out a middle-man."
    },
    {
      title: "SOCIAL GOOD",
      text: "Additionally we have partnered with the People of Kingdom of Bhutan and received support from the Ministers via the Happy Gorilla Community Based Organization, which will serve as creating an incubator in the Kingdom of Bhutan to create a Web3.0 Academic Framework, and Pipline facilitation to enable the citizens of Bhutan to create longterm businesses and jobs. Our goal is to affect 200,000 people with Web3.0 Education and Job opportunities via this incubator in the Kingdom of Bhutan to serve as an example to implement in other cities and towns."
    },
    {
      title: "COMMUNITY",
      text: "Ape Gorilla Kick-Off networking meetings have started, with our founders first event at SLS Beverly Hills at the Family Office Experiences, followed by the launch party event of Phase 1 pre-sale on 2/22/2022 at Johna's Kitchen in Santa Monica for Taco Tuesday. We plan to curate more events surrounded around networking and building relationships."
    },
    {
      title: "ACADEMY",
      text: "As we jump into the new world of blockchains, cryptocurrencies, NFT’s, Decentralized Apps and Decentralized Finance, we want to ensure the community has the right support, resources, and knowledge to learn everything there is to know about these cutting edge technologies including an ecommerce academy. This will be free for the public, as we believe education is free"
    },
    {
      title: "PHYSICAL ACCESS",
      text: "Ape Gorilla is also give each Ape Gorilla NFT holder exclusive two nights free at any two bedroom beach apartment at cabaretecondos.com, with additional privilege access and benefits to Physical Clubs, Restaurants and villas acquired or leased over the years for our community. All of which will provide the community with many more opportunities for networking with each other, and creating an exclusive community. Each location will be leased or bought out as a community decision, made with a voting system only announced to Ape Gorilla NFT holders."
    },
    {
      title: "MASTERMINDS",
      text: "We will hold mastermind events for our loyal holders, rare NFT’s, and VIP members of the Ape Gorilla Club for exclusive mastermind experiences. These events will be incredible luxurious experiences around the world, held at amazing locations like beachfront villas, yachts, and mansions, accessible only to our VIP holders. We want to give our community the opportunity to network and brainstorm with other VIP guests, as well as high net-worth and influential individuals."
    },
    {
      title: "MERCH MARKETPLACE",
      text: "We will Launch the “Ape Gorilla” Merchandise software which will allow Ape Gorilla NFT holders the option to customize merchandise wear, with a drag-and-drop fashion design software, to enable the community to create their own merch. Holders will be able to “outfit” their Ape Gorilla NFT model with their customized merch and sell it on the Ape Gorilla marketplace. These software mechanics have already been built and are in BETA."
    },
    {
      title: "META GORILLA & EVOLUTION",
      text: "We will launch our own Token “Meta Gorilla” to reward our NFT holders who can claim rewards on our website by calling the smart contract. We will then launch the second Royal Gorilla NFT Collection, which can only be minted by Ape Gorilla holders, purchasing a “Golden Chalice” to “Evolve” their Ape Gorilla to mint an additional Royal Gorilla NFT."
    },
    {
      title: "GAMIFICATION",
      text: "Our team will be launching an Ape Gorilla Magical/Laser Combat Multiplayer game, 3D Runner Game and with live to earn capabilities. Along with the community, and in parallel, we will build a MMORPG 3D Game to interact with the community in a virtual environment using Atavism Online and Unreal Engine."
    }
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
    }
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
      <div
        {...swipeable}
        className="relative z-10 mb-40 mt-[-80px] w-full xl:mt-[-160px]"
      >
        <div className="absolute top-0 bottom-0 left-[50%] w-screen translate-x-[-50%] transform bg-white"></div>
        <div className="relative grid w-full grid-cols-1 gap-100 bg-white py-40 sm:py-60 md:py-100">
          <div className="grid w-full grid-cols-1 gap-40 sm:gap-60 lg:grid-cols-[1fr,auto]">
            <div className="flex w-full justify-start">
              <div className="grid w-[550px] max-w-full grid-cols-1 gap-20 sm:gap-30 xl:w-[650px]">
                <div className="font-azo w-full text-left text-24 text-brown sm:text-36 md:text-48 lg:text-[56px]">
                  ROADMAP
                </div>
                <div className="text-left text-14 text-brown-60 sm:text-16 md:text-18">
                  Welcome to our Roadmap! Theres a lot to take in, but Ape
                  Gorilla NFT will grant all holders access to the “Ape Gorilla
                  Club”, allowing holders to participate in networking events,
                  high level masterminds, meetup parties, Meta Gorilla rewards,
                  business and charity grant opportunities, software tools, as
                  well as Blockchains and Web3.0 academy. Become a part of this revolutionary
                  change of providing Academic and and the Pipline Frameworks for Web3.0, and simply by doing more good. 
                </div>
              </div>
            </div>
            <div className="flex items-center gap-10">
              <button
                onClick={() => onStep(-1)}
                className="relative flex h-50 w-80 items-center justify-center"
              >
                <div className="absolute top-0 left-0 h-50 w-full -skew-x-12 transform bg-brown "></div>
                <MdKeyboardArrowLeft className="relative text-24 text-white" />
              </button>
              <button
                onClick={() => onStep(1)}
                className="relative flex h-50 w-80 items-center justify-center"
              >
                <div className="absolute top-0 left-0 h-50 w-full -skew-x-12 transform bg-brown "></div>
                <MdKeyboardArrowRight className="relative text-24 text-white" />
              </button>
            </div>
          </div>
          <div className="flex w-full justify-center">
            <div className="relative w-full">
              <div className="absolute top-[17px] left-[50%] h-2 w-screen translate-x-[-50%] transform overflow-hidden">
                <div className="absolute bottom-0 top-0 left-0 h-2 w-full bg-brown-10"></div>
                <div className="absolute top-[-1px] left-0 h-4 w-80 bg-gradient-to-r from-white to-white-0"></div>
                <div className="absolute top-[-1px] right-0 h-4 w-80 bg-gradient-to-l from-white to-white-0"></div>
              </div>
              <div
                ref={wrapper}
                style={{ transform: `translateX(${-step * widthItem}px)` }}
                className="relative w-full transition-all duration-200"
              >
                <div className="flex w-max">
                  {roadmap.map((entry: RoadmapInterface, key: number) => (
                    <div
                      style={{ width: `${Math.min(widthWrapper, 440)}px` }}
                      className="relative gap-24 pr-20 sm:pr-40 md:pr-60"
                      key={key}
                    >
                      <Wrapper open={key === 0}>
                        <div
                          ref={item}
                          className="absolute top-0 left-0 w-full"
                        ></div>
                      </Wrapper>
                      <div className="mb-60 flex w-full justify-start sm:mb-80">
                        <div
                          className={`relative flex h-36 w-36 items-center justify-center rounded-full border-2 bg-white ${
                            step >= key ? "border-orange" : "border-brown-60"
                          }`}
                        >
                          <div
                            className={`absolute top-[50%] left-[50%] flex h-24 w-24 translate-x-[-50%] translate-y-[-50%] transform items-center justify-center rounded-full ${
                              step >= key ? "bg-orange" : "bg-brown-60"
                            }`}
                          >
                            <Wrapper open={step >= key}>
                              <MdCheck className="text-16 text-white" />
                            </Wrapper>
                          </div>
                        </div>
                      </div>
                      <div
                        className={`font-azo mb-24 w-full text-24 md:text-36 ${
                          step >= key ? "text-brown" : "text-brown-60"
                        }`}
                      >
                        {entry.title}
                      </div>
                      <div className=" font-regular w-full text-14 text-brown-60 sm:text-16 md:text-18">
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
