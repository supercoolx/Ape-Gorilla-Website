import PartnerDc from "assets/img/partners/dc.png"
import PartnerElite from "assets/img/partners/elite.png"
import PartnerJw from "assets/img/partners/jw.png"
import PartnerLoa from "assets/img/partners/loa.png"
import PartnerSchwarz from "assets/img/partners/schwarz.png"
import PartnerTge from "assets/img/partners/tge.png"
import PartnerW from "assets/img/partners/w.png"
import { openLink } from "libs/functions"
import { PartnerInterface } from "libs/interfaces"
import React, { useEffect, useRef, useState } from "react"
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"
import { useSwipeable } from "react-swipeable"

const HomePartners = () => {
  const wrapper = useRef<HTMLDivElement>(null)
  const item = useRef<HTMLDivElement>(null)

  const [step, setStep] = useState(0)

  const [widthItem, setWidthItem] = useState(440)
  const [widthWrapper, setWidthWrapper] = useState(440)

  const [partners] = useState<PartnerInterface[]>([
    { image: PartnerDc, link: "http://digitalcurrensy.io/" },
    { image: PartnerSchwarz, link: "https://www.schwarzenterprise.com" },
    { image: PartnerTge, link: "https://www.tgeglobalent.com" },
    { image: PartnerW, link: "" },
    { image: PartnerElite, link: "" },
    { image: PartnerJw, link: "" },
    { image: PartnerLoa, link: "" }
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
      setStep(partners.length - 1)
    } else if (step + offset >= partners.length) {
      setStep(0)
    } else {
      setStep(step + offset)
    }
  }

  return (
    <>
      <div {...swipeable} className="relative z-10 w-full mb-40">
        <div className="absolute top-0 bottom-0 left-[50%] w-screen translate-x-[-50%] transform bg-orange"></div>
        <div className="relative grid w-full grid-cols-1 py-40 gap-100 bg-orange sm:py-60 md:py-100">
          <div className="grid w-full grid-cols-1 gap-40 sm:gap-60">
            <div className="flex justify-start w-full">
              <div className="grid max-w-full grid-cols-1 gap-20 sm:gap-30">
                <div className="font-azo w-full text-left text-24 text-white sm:text-36 md:text-48 lg:text-[56px]">
                  PARTNERS
                </div>
                <div className="text-left text-14 text-white-60 sm:text-16 md:text-18">
                  We are officially partnered with the people of the Kingdom of Bhutan, and many other
                  specialists in the blockchain, art and technology. We will be announcing further partnerships here.
                </div>
              </div>
            </div>
            <div className="flex items-center gap-10">
              <button
                onClick={() => onStep(-1)}
                className="relative flex items-center justify-center h-50 w-80"
              >
                <div className="absolute top-0 left-0 w-full transform -skew-x-12 bg-white h-50 "></div>
                <MdKeyboardArrowLeft className="relative text-24 text-brown" />
              </button>
              <button
                onClick={() => onStep(1)}
                className="relative flex items-center justify-center h-50 w-80"
              >
                <div className="absolute top-0 left-0 w-full transform -skew-x-12 bg-white h-50 "></div>
                <MdKeyboardArrowRight className="relative text-24 text-brown" />
              </button>
            </div>
          </div>
          <div className="flex justify-center w-full">
            <div className="relative w-full">
              <div
                ref={wrapper}
                style={{ transform: `translateX(${-step * widthItem}px)` }}
                className="relative w-full transition-all duration-200"
              >
                <div className="flex w-max">
                  {partners.map((partner: PartnerInterface, key: number) => (
                    <button
                      onClick={(e) =>
                        partner.link ? openLink(e, partner.link) : ""
                      }
                      style={{ width: `${Math.min(widthWrapper, 440)}px` }}
                      className="relative pr-40"
                      key={key}
                    >
                      <div className="flex items-center justify-center w-full rounded-4 bg-white-20 p-30">
                        <img src={partner.image} alt="" className="h-[140px]" />
                      </div>
                    </button>
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

export default HomePartners
