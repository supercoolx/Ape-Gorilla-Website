import Video from "assets/img/thumbnail.png"
import React from "react"
import { MdPlayCircleFilled } from "react-icons/md"
import Wrapper from "utils/wrapper/Wrapper"

const VideoPlayIcon = ({
  title,
  length
}: {
  title?: string
  length?: string
}) => {
  return (
    <>
      <div className="bg-purple z-30 flex h-full w-full items-center justify-center">
        <div className="absolute top-0 left-0 bottom-0 w-full">
          <img src={Video} alt="" />
        </div>
        <div className="flex w-full items-center justify-center">
          <div className="relative h-[54px] w-[54px] rounded-full bg-white shadow-md">
            <MdPlayCircleFilled className="absolute -top-8 -left-8 text-[72px] text-green-light" />
          </div>
          <Wrapper open={title ? true : false}>
            <div className="absolute top-10 left-10 text-14 font-bold text-white md:top-18 md:left-18">
              {title}
            </div>
          </Wrapper>
          <Wrapper open={length ? true : false}>
            <div className="absolute bottom-10 left-10 text-14 font-bold text-white opacity-40 md:bottom-18 md:left-18">
              {length}
            </div>
          </Wrapper>
        </div>
      </div>
    </>
  )
}

export default VideoPlayIcon
