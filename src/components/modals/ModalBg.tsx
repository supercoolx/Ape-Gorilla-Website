import React from "react"
import { MdClose } from "react-icons/md"

const ModalBg = ({ handler }: { handler: any }) => {
  return (
    <>
      <button
        onClick={() => handler(false)}
        className="fixed top-[-100px] left-0 z-10 h-[calc(100vh+200px)] w-screen bg-green-90 backdrop-blur-md backdrop-filter"
      ></button>
      <button
        onClick={() => handler(false)}
        className="fixed top-30 right-30 z-40"
      >
        <MdClose className="text-24 text-white" />
      </button>
    </>
  )
}

export default ModalBg
