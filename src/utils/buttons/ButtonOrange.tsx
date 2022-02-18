import { openLink } from "libs/functions"
import React from "react"

const ButtonOrange = ({
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
          className={`absolute top-0 left-0 h-60 w-full -skew-x-12 transform bg-orange transition-all duration-200 group-hover:bg-white ${
            small ? "h-44" : "h-60"
          }`}
        ></div>
        <div
          className={`font-azo relative flex h-60 w-full items-center justify-center px-28 text-14 text-white transition-all duration-200 group-hover:text-orange sm:text-16 md:text-18 ${
            small ? "h-44" : "h-60"
          }`}
        >
          {title}
        </div>
      </button>
    </>
  )
}

export default ButtonOrange
