import { openLink } from "libs/functions"
import React from "react"

const ButtonWhite = ({
  title,
  link,
  small
}: {
  title: string
  link: string
  small?: boolean
}) => {
  return (
    <>
      <button
        onClick={(e) => openLink(e, link)}
        className="group relative w-full sm:w-auto"
      >
        <div
          className={`absolute top-0 left-0 w-full -skew-x-12 transform bg-white transition-all duration-200 group-hover:bg-brown ${
            small ? "h-44" : "h-60"
          }`}
        ></div>
        <div
          className={`font-azo relative flex w-full items-center justify-center px-28 text-14 text-brown transition-all duration-200 group-hover:text-white sm:text-16 md:text-18 ${
            small ? "h-44" : "h-60"
          }`}
        >
          {title}
        </div>
      </button>
    </>
  )
}

export default ButtonWhite
