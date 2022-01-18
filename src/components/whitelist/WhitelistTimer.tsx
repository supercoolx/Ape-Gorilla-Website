import { useProps } from "contexts/PropsContext"
import React, { useEffect, useState } from "react"

const WhitelistTimer = () => {
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
      <div className="w-full flex justify-start mb-40 md:mb-60">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-20 md:gap-30">
          <div className="w-[130px] lg:w-[160px] max-w-full grid grid-cols-1 gap-2">
            <div className="w-full text-white font-azo text-48 sm:text-[64px] md:text-[80px] lg:text-[96px] leading-[110%]">
              {days}
            </div>
            <div className="w-full text-white-60 font-regular text-16 sm:text-18 md:text-24">DAYS</div>
          </div>
          <div className="w-[130px] lg:w-[160px] max-w-full grid grid-cols-1 gap-2">
            <div className="w-full text-white font-azo text-48 sm:text-[64px] md:text-[80px] lg:text-[96px] leading-[110%]">
              {hours}
            </div>
            <div className="w-full text-white-60 font-regular text-16 sm:text-18 md:text-24">HOURS</div>
          </div>
          <div className="w-[130px] lg:w-[160px] max-w-full grid grid-cols-1 gap-2">
            <div className="w-full text-white font-azo text-48 sm:text-[64px] md:text-[80px] lg:text-[96px] leading-[110%]">
              {minutes}
            </div>
            <div className="w-full text-white-60 font-regular text-16 sm:text-18 md:text-24">MINUTES</div>
          </div>
          <div className="w-[130px] lg:w-[160px] max-w-full grid grid-cols-1 gap-2">
            <div className="w-full text-white font-azo text-48 sm:text-[64px] md:text-[80px] lg:text-[96px] leading-[110%]">
              {seconds}
            </div>
            <div className="w-full text-white-60 font-regular text-16 sm:text-18 md:text-24">SECONDS</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WhitelistTimer
