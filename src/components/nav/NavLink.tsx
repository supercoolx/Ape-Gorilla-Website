import { useProps } from "contexts/PropsContext"
import React from "react"
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"
import { Link } from "react-router-dom"

const NavLink = ({ url, title }: { url: string; title: string }) => {
  const { path } = useProps()

  return (
    <>
      <div className="w-full flex justify-center">
        <Link to={url} className="relative max-w-full group">
          <div
            className={`absolute top-[50%] transform translate-y-[-50%] group-hover:flex left-[-50px] ${
              path === url ? "flex" : "hidden"
            }`}
          >
            <MdKeyboardArrowRight className="text-green-light text-24" />
          </div>
          <div
            className={`absolute top-[50%] transform translate-y-[-50%] group-hover:flex right-[-50px] ${
              path === url ? "flex" : "hidden"
            }`}
          >
            <MdKeyboardArrowLeft className="text-green-light text-24" />
          </div>
          <div
            className={`w-full group-hover:text-green-light text-22 sm:text-[24px] md:text-[36px] font-azo leading-[110%] ${
              path === url ? "text-green-light" : "text-white"
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
