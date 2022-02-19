import React from "react"
import { MdKeyboardArrowRight } from "react-icons/md"
import { Link } from "react-router-dom"

const FooterLink = ({ url, title }: { url: string; title: string }) => {
  return (
    <>
      <Link to={url} className="group relative flex w-full items-center">
        <MdKeyboardArrowRight className="absolute top-[50%] left-[-24px] translate-y-[-50%] transform text-22 text-orange opacity-0 transition-all duration-200 group-hover:left-[-4px] group-hover:opacity-100" />
        <div className="font-azo w-full pl-0 text-14 text-brown transition-all duration-200 group-hover:pl-20 group-hover:text-orange sm:text-16 md:text-18">
          {title}
        </div>
      </Link>
    </>
  )
}

export default FooterLink
