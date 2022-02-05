import { parseMinutes } from "libs/functions"
import React from "react"
import { ImVolumeMute, ImVolumeMute2 } from "react-icons/im"
import { IoMdPause } from "react-icons/io"
import { MdFullscreen, MdPlayArrow } from "react-icons/md"
import Wrapper from "utils/wrapper/Wrapper"

const VideoPlayerBar = ({
  audio,
  duration,
  fullscreen,
  muted,
  light,
  played,
  playedPercentage,
  playing,
  setFullscreen,
  setMuted,
  setPlaying,
  onSeekMouseDown,
  onSeekChange,
  onSeekMouseUp
}: {
  audio?: boolean
  duration: number
  fullscreen: boolean
  muted: boolean
  light?: boolean
  played: number
  playedPercentage: number
  playing: boolean
  setFullscreen: any
  setMuted: any
  setPlaying: any
  onSeekMouseDown: any
  onSeekChange: any
  onSeekMouseUp: any
}) => {
  return (
    <>
      <div
        className={`absolute left-0 bottom-0 h-full w-full ${
          audio ? "" : "opacity-0 hover:opacity-100"
        }`}
      >
        <div
          className={`from-grey-40 absolute left-0 bottom-0 h-80 w-full bg-gradient-to-t to-transparent ${
            audio ? "hidden" : ""
          }`}
        ></div>
        <div
          className={`absolute left-0 bottom-0 grid h-50 w-full items-center gap-10 p-10 ${
            audio
              ? "grid-cols-[auto,1fr,auto,auto]"
              : "grid-cols-[auto,1fr,auto,auto,auto]"
          }`}
        >
          <button
            onClick={() => setPlaying(!playing)}
            className={`group flex h-30 w-30 items-center justify-center rounded-4 ${
              light ? "hover:bg-grey-10" : "hover:bg-white-10"
            }`}
          >
            <Wrapper open={playing}>
              <IoMdPause
                className={`group-hover:text-purple text-20 ${
                  light ? "text-black" : "text-white"
                }`}
              />
            </Wrapper>
            <Wrapper open={!playing}>
              <MdPlayArrow
                className={`group-hover:text-purple text-28 ${
                  light ? "text-black" : "text-white"
                }`}
              />
            </Wrapper>
          </button>
          <div className="group relative grid h-30 w-full grid-cols-1 items-center gap-4">
            <div
              className={`flex  h-4 w-full items-center justify-start ${
                light ? "bg-grey-20" : "bg-white-20"
              }`}
            >
              <div
                className={`group-hover:bg-purple h-4 ${
                  light ? "bg-black" : "bg-white"
                }`}
                style={{ width: `${playedPercentage * 100}%` }}
              ></div>
            </div>
            <input
              type="range"
              min={0}
              max={0.999999}
              step="any"
              value={playedPercentage}
              onMouseDown={onSeekMouseDown}
              onChange={(e) => onSeekChange(e)}
              onMouseUp={(e) => onSeekMouseUp(e)}
              className="player-seek absolute left-0 top-[50%] mx-[-9px] w-[calc(100%+18px)] translate-y-[-50%] transform cursor-pointer"
            />
          </div>
          <div
            className={`cursor-pointer text-12 font-bold opacity-60 hover:opacity-100 ${
              light ? "text-black" : "text-white"
            }`}
          >
            {parseMinutes(played)}{" "}
            {duration !== Infinity ? `/ ${parseMinutes(duration)}` : ""}
          </div>
          <button
            onClick={() => setMuted(!muted)}
            className={`group flex h-30 w-30  items-center justify-center rounded-4 ${
              light ? "hover:bg-grey-10" : "hover:bg-white-10"
            }`}
          >
            <Wrapper open={muted}>
              <ImVolumeMute2
                className={`group-hover:text-purple text-20 ${
                  light ? "text-black" : "text-white"
                }`}
              />
            </Wrapper>
            <Wrapper open={!muted}>
              <ImVolumeMute
                className={`group-hover:text-purple text-20 ${
                  light ? "text-black" : "text-white"
                }`}
              />
            </Wrapper>
          </button>
          <Wrapper open={!audio}>
            <button
              onClick={() => setFullscreen(!fullscreen)}
              className="group flex h-30 w-30 items-center justify-center rounded-4 hover:bg-white-10"
            >
              <MdFullscreen className="group-hover:text-purple text-24 text-white" />
            </button>
          </Wrapper>
        </div>
      </div>
    </>
  )
}

export default VideoPlayerBar
