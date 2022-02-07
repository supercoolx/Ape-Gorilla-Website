import React from "react"

const WrapperPage = ({ children }: { children: any }) => {
  return (
    <>
      <div className="flex w-full justify-center px-20 sm:px-30">
        <div className="w-full max-w-screen-2xl">{children}</div>
      </div>
    </>
  )
}

export default WrapperPage
