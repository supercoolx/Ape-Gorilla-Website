import Nav from "components/nav/Nav"
import React from "react"

const NotFound = () => {
  return (
    <>
      <Nav />
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center text-white text-16 font-semibold">
        Not Found
      </div>
    </>
  )
}

export default NotFound
