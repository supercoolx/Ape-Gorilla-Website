import Ape1 from "assets/img/apes/ape_1.png"
import Ape10 from "assets/img/apes/ape_10.png"
import Ape2 from "assets/img/apes/ape_2.png"
import Ape3 from "assets/img/apes/ape_3.png"
import Ape4 from "assets/img/apes/ape_4.png"
import Ape5 from "assets/img/apes/ape_5.png"
import Ape6 from "assets/img/apes/ape_6.png"
import Ape7 from "assets/img/apes/ape_7.png"
import Ape8 from "assets/img/apes/ape_8.png"
import Ape9 from "assets/img/apes/ape_9.png"
import React, { useEffect, useState } from "react"

const HomeTopSlider = ({ flat, single }: { flat?: boolean; single?: boolean }) => {
  const [apesTop] = useState([Ape1, Ape2, Ape3, Ape4, Ape5])
  const [apesBottom] = useState([Ape6, Ape7, Ape8, Ape9, Ape10])

  const [offset, setOffset] = useState(0)

  useEffect(() => {
    handleScroll()

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleScroll = () => {
    const position = window.scrollY
    setOffset(position)
  }

  return (
    <>
      <div
        className={`w-full relative ${
          single
            ? "h-[200px] sm:h-[300px] mt-[100px] sm:mt-[160px]"
            : "h-[360px] sm:h-[500px] mt-[140px] sm:mt-[200px] mb-40 sm:mb-60"
        }`}
      >
        <div className="w-[calc(100vw+200px)] absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] mb-0 sm:mb-30 flex justify-center">
          <div className={`w-full grid grid-cols-1 gap-10 ${flat ? "" : "showcase"}`}>
            <div className="w-full overflow-x-hidden h-180 sm:h-[300px] relative">
              <div style={{ left: `${-offset}px` }} className="absolute top-0 flex space-x-10 w-max">
                {new Array(4).fill(1).map((entry: number, key: number) => (
                  <div className="flex space-x-10" key={key}>
                    {apesTop.map((creator: string, ke: number) => (
                      <img
                        src={creator}
                        alt=""
                        className="w-180 sm:w-300 h-180 sm:h-300 rounded-[40px] border-[3px] border-white shadow-md flex items-center justify-center"
                        key={ke}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
            {!single ? (
              <div className="w-full overflow-x-hidden h-180 sm:h-[300px] relative">
                <div style={{ right: `${-offset}px` }} className="absolute top-0 flex space-x-[10px] w-max">
                  {new Array(4).fill(1).map((entry: number, key: number) => (
                    <div className="flex space-x-[10px]" key={key}>
                      {apesBottom.map((creator: string, ke: number) => (
                        <img
                          src={creator}
                          alt=""
                          className="w-180 sm:w-300 h-180 sm:h-300 rounded-[40px] border-[3px] border-white shadow-md flex items-center justify-center"
                          key={ke}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeTopSlider
