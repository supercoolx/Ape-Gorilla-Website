import { openLink } from "libs/functions"
import React from "react"
import { MdKeyboardArrowRight } from "react-icons/md"

const FooterButton = ({ url, title }: { url: string; title: string }) => {
  return (
    <>
      <button
        onClick={(e) => openLink(e, url)}
        className="group relative flex w-full items-center"
      >
        <MdKeyboardArrowRight className="absolute top-[50%] left-[-24px] translate-y-[-50%] transform text-22 text-green-light opacity-0 transition-all duration-200 group-hover:left-[-4px] group-hover:opacity-100" />
        <div className="font-azo w-full pl-0 text-left text-14 text-green transition-all duration-200 group-hover:pl-20 group-hover:text-green-light sm:text-16 md:text-18">
          {title}
        </div>
      </button>
    </>
  )
}

export default FooterButton
