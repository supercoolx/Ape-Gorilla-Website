import SpinnerCirc from "assets/img/spinner_circ.png"
import React, { useEffect, useRef, useState } from "react"
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"
import { useSwipeable } from "react-swipeable"

const HomePartners = () => {
  const wrapper = useRef<HTMLDivElement>(null)
  const item = useRef<HTMLDivElement>(null)

  const [step, setStep] = useState(0)

  const [widthItem, setWidthItem] = useState(440)
  const [widthWrapper, setWidthWrapper] = useState(440)

  const [roadmap] = useState([
    SpinnerCirc,
    SpinnerCirc,
    SpinnerCirc,
    SpinnerCirc,
    SpinnerCirc,
    SpinnerCirc,
    SpinnerCirc,
    SpinnerCirc
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
        className="relative z-10 mb-40 mt-[-130px] w-full lg:mt-[-230px] xl:mt-[-240px]"
      >
        <div className="absolute top-0 bottom-0 left-[50%] w-screen translate-x-[-50%] transform bg-green-light"></div>
        <div className="relative grid w-full grid-cols-1 gap-100 bg-green-light py-40 sm:py-60 md:py-100">
          <div className="grid w-full grid-cols-1 gap-40 sm:gap-60 lg:grid-cols-[1fr,auto]">
            <div className="flex w-full justify-start">
              <div className="grid w-[550px] max-w-full grid-cols-1 gap-20 sm:gap-30 xl:w-[650px]">
                <div className="font-azo w-full text-left text-24 text-white sm:text-36 md:text-48 lg:text-[56px]">
                  PARTNERS
                </div>
                <div className="text-left text-14 text-white-60 sm:text-16 md:text-18">
                  We will be officially partnering with the people of the
                  Kingdom of Bhutan and will provide our holders greater access
                  to networking, education on technology topics within our
                  unique community.
                </div>
              </div>
            </div>
            <div className="flex items-center gap-10">
              <button
                onClick={() => onStep(-1)}
                className="relative flex h-50 w-80 items-center justify-center"
              >
                <div className="absolute top-0 left-0 h-50 w-full -skew-x-12 transform bg-white "></div>
                <MdKeyboardArrowLeft className="relative text-24 text-green" />
              </button>
              <button
                onClick={() => onStep(1)}
                className="relative flex h-50 w-80 items-center justify-center"
              >
                <div className="absolute top-0 left-0 h-50 w-full -skew-x-12 transform bg-white "></div>
                <MdKeyboardArrowRight className="relative text-24 text-green" />
              </button>
            </div>
          </div>
          <div className="flex w-full justify-center">
            <div className="relative w-full">
              <div
                ref={wrapper}
                style={{ transform: `translateX(${-step * widthItem}px)` }}
                className="relative w-full transition-all duration-200"
              >
                <div className="flex w-max">
                  {roadmap.map((entry: string, key: number) => (
                    <div
                      style={{ width: `${Math.min(widthWrapper, 440)}px` }}
                      className="relative pr-40"
                      key={key}
                    >
                      <div className="flex w-full items-center justify-center rounded-4 bg-white-20 p-30">
                        <img src={entry} alt="" />
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

export default HomePartners