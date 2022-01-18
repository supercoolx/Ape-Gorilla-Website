import React from "react"

const WrapperPage = ({ children }: { children: any }) => {
  return (
    <>
      <div className="w-full justify-center flex px-20 sm:px-30">
        <div className="w-full max-w-screen-2xl">{children}</div>
      </div>
    </>
  )
}

export default WrapperPage
