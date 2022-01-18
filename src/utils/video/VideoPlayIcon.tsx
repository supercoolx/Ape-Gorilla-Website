import Video from "assets/img/video.jpg"
import React from "react"
import { MdPlayCircleFilled } from "react-icons/md"
import Wrapper from "utils/wrapper/Wrapper"

const VideoPlayIcon = ({ title, length }: { title?: string; length?: string }) => {
  return (
    <>
      <div className="w-full h-full z-30 flex items-center justify-center bg-purple">
        <div className="w-full absolute top-0 left-0 bottom-0">
          <img src={Video} alt="" />
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="w-40 h-40 shadow-md rounded-full relative">
            <MdPlayCircleFilled className="absolute -top-4 -left-4 text-48 text-white" />
          </div>
          <Wrapper open={title ? true : false}>
            <div className="text-white font-bold text-14 absolute top-10 md:top-18 left-10 md:left-18">{title}</div>
          </Wrapper>
          <Wrapper open={length ? true : false}>
            <div className="text-white opacity-40 font-bold text-14 absolute bottom-10 md:bottom-18 left-10 md:left-18">
              {length}
            </div>
          </Wrapper>
        </div>
      </div>
    </>
  )
}

export default VideoPlayIcon
