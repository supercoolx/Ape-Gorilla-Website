import { QuestionInterface } from "libs/interfaces"
import React, { useEffect, useRef, useState } from "react"
import { MdAdd, MdRemove } from "react-icons/md"

const HomeQuestion = ({ index, question }: { index: number; question: QuestionInterface }) => {
  const ref = useRef<HTMLDivElement>(null)

  const [height, setHeight] = useState(0)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (ref.current) {
      setHeight(open ? ref.current.scrollHeight : 0)
    }
  }, [open])

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className={`w-full grid grid-cols-1 bg-white-10 transition-all duration-200 ${open ? "pb-14 md:pb-26" : ""}`}
      >
        <div
          className={`w-full grid grid-cols-[36px,1fr,auto] gap-20 items-center px-18 md:px-32 py-14 md:py-26  border-white-10 ${
            open ? "border-b-1" : ""
          }`}
        >
          <div className="w-full font-azo text-white-60 text-18 md:text-24">0{index + 1}</div>
          <div className="w-full text-16 md:text-18 lg:text-24 font-azo text-white text-left">{question.question}</div>
          {open ? <MdRemove className="text-white-60 text-24" /> : <MdAdd className="text-24 text-white" />}
        </div>
        <div
          ref={ref}
          style={{ maxHeight: `${height}px` }}
          className={`w-full overflow-hidden transition-all duration-300 text-16 text-white-60 text-left px-16 md:px-32 ${
            open ? "mt-14 md:mt-26" : ""
          }`}
        >
          {question.answer}
        </div>
      </button>
    </>
  )
}

export default HomeQuestion
