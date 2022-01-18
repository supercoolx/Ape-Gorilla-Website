import React from "react"
import { MdClose } from "react-icons/md"

const ModalBg = ({ handler }: { handler: any }) => {
  return (
    <>
      <button
        onClick={() => handler(false)}
        className="z-10 fixed top-[-100px] left-0 w-screen h-[calc(100vh+200px)] bg-green-90 backdrop-filter backdrop-blur-md"
      ></button>
      <button onClick={() => handler(false)} className="z-40 fixed top-30 right-30">
        <MdClose className="text-24 text-white" />
      </button>
    </>
  )
}

export default ModalBg
