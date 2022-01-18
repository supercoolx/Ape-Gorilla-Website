import React from "react"
import { MdPauseCircleFilled, MdPlayCircleFilled } from "react-icons/md"

const VideoPlayerClean = ({ playing, setPlaying }: { playing: boolean; setPlaying: any }) => {
  return (
    <>
      <button
        onClick={() => setPlaying(!playing)}
        className="absolute z-20 left-0 bottom-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100"
      >
        <div className="w-[62px] h-[62px] shadow-md relative bg-white rounded-full">
          {playing ? (
            <MdPauseCircleFilled className="absolute -top-14 -left-14 text-[90px] text-green-light" />
          ) : (
            <MdPlayCircleFilled className="absolute -top-14 -left-14 text-[90px] text-green-light" />
          )}
        </div>
      </button>
    </>
  )
}

export default VideoPlayerClean
