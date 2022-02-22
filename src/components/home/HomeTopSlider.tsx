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

const HomeTopSlider = ({
  flat,
  single
}: {
  flat?: boolean
  single?: boolean
}) => {
  const [apesTop] = useState([Ape1, Ape2, Ape3, Ape4, Ape5])
  const [apesBottom] = useState([Ape6, Ape7, Ape8, Ape9, Ape10])

  const [offset, setOffset] = useState(0)

  useEffect(() => {
    handleScroll()

    window.addEventListener("scroll", handleScroll)

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
        className={`relative w-full ${
          single
            ? "mt-[100px] h-[200px] sm:mt-[160px] sm:h-[300px]"
            : "mt-[140px] mb-40 h-[360px] sm:mt-[200px] sm:mb-60 sm:h-[500px]"
        }`}
      >
        <div className="absolute top-[50%] left-[50%] mb-0 flex w-[calc(100vw+200px)] translate-x-[-50%] translate-y-[-50%] transform justify-center sm:mb-30">
          <div
            className={`grid w-full grid-cols-1 gap-10 ${
              flat ? "" : "showcase"
            }`}
          >
            <div className="relative h-180 w-full overflow-x-hidden sm:h-[300px]">
              <div
                style={{ left: `${-offset}px` }}
                className="absolute top-0 flex w-max space-x-10"
              >
                {new Array(4).fill(1).map((entry: number, key: number) => (
                  <div className="flex space-x-10" key={key}>
                    {apesTop.map((creator: string, ke: number) => (
                      <img
                        src={creator}
                        alt=""
                        className="flex h-180 w-180 items-center justify-center rounded-[40px] border-[3px] border-white shadow-md sm:h-300 sm:w-300"
                        key={ke}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
            {!single ? (
              <div className="relative h-180 w-full overflow-x-hidden sm:h-[300px]">
                <div
                  style={{ right: `${-offset}px` }}
                  className="absolute top-0 flex w-max space-x-[10px]"
                >
                  {new Array(4).fill(1).map((entry: number, key: number) => (
                    <div className="flex space-x-[10px]" key={key}>
                      {apesBottom.map((creator: string, ke: number) => (
                        <img
                          src={creator}
                          alt=""
                          className="flex h-180 w-180 items-center justify-center rounded-[40px] border-[3px] border-white shadow-md sm:h-300 sm:w-300"
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
