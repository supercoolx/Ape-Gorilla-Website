import React from "react"
import { MdPauseCircleFilled, MdPlayCircleFilled } from "react-icons/md"

const VideoPlayerClean = ({
  playing,
  setPlaying
}: {
  playing: boolean
  setPlaying: any
}) => {
  return (
    <>
      <button
        onClick={() => setPlaying(!playing)}
        className="absolute left-0 bottom-0 z-20 flex h-full w-full items-center justify-center opacity-0 hover:opacity-100"
      >
        <div className="relative h-[62px] w-[62px] rounded-full bg-white shadow-md">
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
