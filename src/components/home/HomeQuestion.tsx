import { QuestionInterface } from "libs/interfaces"
import React, { useEffect, useRef, useState } from "react"
import { MdAdd, MdRemove } from "react-icons/md"

const HomeQuestion = ({
  index,
  question
}: {
  index: number
  question: QuestionInterface
}) => {
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
        className={`grid w-full grid-cols-1 bg-white-10 transition-all duration-200 ${
          open ? "pb-14 md:pb-26" : ""
        }`}
      >
        <div
          className={`grid w-full grid-cols-[36px,1fr,auto] items-center gap-20 border-white-10 px-18 py-14 md:px-32  md:py-26 ${
            open ? "border-b-1" : ""
          }`}
        >
          <div className="font-azo w-full text-18 text-white-60 md:text-24">
            0{index + 1}
          </div>
          <div className="font-azo w-full text-left text-16 text-white md:text-18 lg:text-24">
            {question.question}
          </div>
          {open ? (
            <MdRemove className="text-24 text-white-60" />
          ) : (
            <MdAdd className="text-24 text-white" />
          )}
        </div>
        <div
          ref={ref}
          style={{ maxHeight: `${height}px` }}
          className={`w-full overflow-hidden px-16 text-left text-16 text-white-60 transition-all duration-300 md:px-32 ${
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
