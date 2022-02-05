import Nav from "components/nav/Nav"
import React from "react"

const NotFound = () => {
  return (
    <>
      <Nav />
      <div className="fixed top-0 left-0 flex h-full w-full items-center justify-center text-16 font-semibold text-white">
        Not Found
      </div>
    </>
  )
}

export default NotFound
