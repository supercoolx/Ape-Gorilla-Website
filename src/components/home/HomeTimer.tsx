import { useProps } from "contexts/PropsContext"
import React, { useEffect, useState } from "react"

const HomeTimer = () => {
  const { duration } = useProps()

  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    setDays(duration.days())
    setHours(duration.hours())
    setMinutes(duration.minutes())
    setSeconds(duration.seconds())
  }, [duration])

  return (
    <>
      <div className="w-full flex justify-center xl:justify-start">
        <div className="grid grid-cols-4 gap-10 sm:gap-20 md:gap-30">
          <div className="w-[70px] lg:w-[80px] max-w-full grid grid-cols-1 gap-2">
            <div className="w-full text-white font-azo text-36 sm:text-48 leading-[110%]">{days}</div>
            <div className="w-full text-white-60 font-regular text-12 sm:text-18">Days</div>
          </div>
          <div className="w-[70px] lg:w-[80px] max-w-full grid grid-cols-1 gap-2">
            <div className="w-full text-white font-azo text-36 sm:text-48 leading-[110%]">{hours}</div>
            <div className="w-full text-white-60 font-regular text-12 sm:text-18">Hours</div>
          </div>
          <div className="w-[70px] lg:w-[80px] max-w-full grid grid-cols-1 gap-2">
            <div className="w-full text-white font-azo text-36 sm:text-48 leading-[110%]">{minutes}</div>
            <div className="w-full text-white-60 font-regular text-12 sm:text-18">Minutes</div>
          </div>
          <div className="w-[70px] lg:w-[80px] max-w-full grid grid-cols-1 gap-2">
            <div className="w-full text-white font-azo text-36 sm:text-48 leading-[110%]">{seconds}</div>
            <div className="w-full text-white-60 font-regular text-12 sm:text-18">Seconds</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeTimer
