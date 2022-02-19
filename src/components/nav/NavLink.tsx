import { useProps } from "contexts/PropsContext"
import React from "react"
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"
import { Link } from "react-router-dom"

const NavLink = ({ url, title }: { url: string; title: string }) => {
  const { path } = useProps()

  return (
    <>
      <div className="flex w-full justify-center">
        <Link to={url} className="group relative max-w-full">
          <div
            className={`absolute top-[50%] left-[-50px] flex translate-y-[-50%] transform transition-all duration-200 group-hover:opacity-100 ${
              path === url ? "opacity-100" : "opacity-0"
            }`}
          >
            <MdKeyboardArrowRight className="text-24 text-orange" />
          </div>
          <div
            className={`absolute top-[50%] right-[-50px] flex translate-y-[-50%] transform transition-all duration-200 group-hover:opacity-100 ${
              path === url ? "opacity-100" : "opacity-0"
            }`}
          >
            <MdKeyboardArrowLeft className="text-24 text-orange" />
          </div>
          <div
            className={`font-azo w-full text-22 leading-[110%] transition-all duration-200 group-hover:text-orange sm:text-[24px] md:text-[36px] ${
              path === url ? "text-orange" : "text-white"
            }`}
          >
            {title}
          </div>
        </Link>
      </div>
    </>
  )
}

export default NavLink
