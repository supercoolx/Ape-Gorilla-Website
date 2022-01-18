import React from "react"
import { MdKeyboardArrowRight } from "react-icons/md"
import { Link } from "react-router-dom"

const FooterLink = ({ url, title }: { url: string; title: string }) => {
  return (
    <>
      <Link to={url} className="w-full relative group flex items-center">
        <MdKeyboardArrowRight className="absolute text-green-light text-22 opacity-0 group-hover:opacity-100 top-[50%] transform translate-y-[-50%] left-[-24px] group-hover:left-[-4px] transition-all duration-200" />
        <div className="w-full text-14 sm:text-16 md:text-18 font-azo text-green group-hover:text-green-light pl-0 group-hover:pl-20 transition-all duration-200">
          {title}
        </div>
      </Link>
    </>
  )
}

export default FooterLink
