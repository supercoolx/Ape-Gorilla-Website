import { useProps } from "contexts/PropsContext"
import React, { useEffect, useState } from "react"

const WhitelistTimer = () => {
  const { duration, ready } = useProps()

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
      {!ready ? (
        <div className="mb-20 flex w-full justify-start md:mb-30">
          <div className="grid grid-cols-2 gap-10 sm:gap-20 md:gap-30 lg:grid-cols-4">
            <div className="grid w-[130px] max-w-full grid-cols-1 gap-2 lg:w-[160px]">
              <div className="font-azo w-full text-48 leading-[110%] text-white sm:text-[64px] md:text-[80px] lg:text-[96px]">
                {days}
              </div>
              <div className="font-regular w-full text-16 text-white-60 sm:text-18 md:text-24">
                DAYS
              </div>
            </div>
            <div className="grid w-[130px] max-w-full grid-cols-1 gap-2 lg:w-[160px]">
              <div className="font-azo w-full text-48 leading-[110%] text-white sm:text-[64px] md:text-[80px] lg:text-[96px]">
                {hours}
              </div>
              <div className="font-regular w-full text-16 text-white-60 sm:text-18 md:text-24">
                HOURS
              </div>
            </div>
            <div className="grid w-[130px] max-w-full grid-cols-1 gap-2 lg:w-[160px]">
              <div className="font-azo w-full text-48 leading-[110%] text-white sm:text-[64px] md:text-[80px] lg:text-[96px]">
                {minutes}
              </div>
              <div className="font-regular w-full text-16 text-white-60 sm:text-18 md:text-24">
                MINUTES
              </div>
            </div>
            <div className="grid w-[130px] max-w-full grid-cols-1 gap-2 lg:w-[160px]">
              <div className="font-azo w-full text-48 leading-[110%] text-white sm:text-[64px] md:text-[80px] lg:text-[96px]">
                {seconds}
              </div>
              <div className="font-regular w-full text-16 text-white-60 sm:text-18 md:text-24">
                SECONDS
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  )
}

export default WhitelistTimer
