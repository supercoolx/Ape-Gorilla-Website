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
      <div className="flex w-full justify-center xl:justify-start">
        <div className="grid grid-cols-4 gap-10 sm:gap-20 md:gap-30">
          <div className="grid w-[70px] max-w-full grid-cols-1 gap-2 lg:w-[80px]">
            <div className="font-azo w-full text-36 leading-[110%] text-white sm:text-48">
              {days}
            </div>
            <div className="font-regular w-full text-12 text-white-60 sm:text-18">
              Days
            </div>
          </div>
          <div className="grid w-[70px] max-w-full grid-cols-1 gap-2 lg:w-[80px]">
            <div className="font-azo w-full text-36 leading-[110%] text-white sm:text-48">
              {hours}
            </div>
            <div className="font-regular w-full text-12 text-white-60 sm:text-18">
              Hours
            </div>
          </div>
          <div className="grid w-[70px] max-w-full grid-cols-1 gap-2 lg:w-[80px]">
            <div className="font-azo w-full text-36 leading-[110%] text-white sm:text-48">
              {minutes}
            </div>
            <div className="font-regular w-full text-12 text-white-60 sm:text-18">
              Minutes
            </div>
          </div>
          <div className="grid w-[70px] max-w-full grid-cols-1 gap-2 lg:w-[80px]">
            <div className="font-azo w-full text-36 leading-[110%] text-white sm:text-48">
              {seconds}
            </div>
            <div className="font-regular w-full text-12 text-white-60 sm:text-18">
              Seconds
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeTimer
