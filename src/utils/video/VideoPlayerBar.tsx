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
  onSeekMouseUp,
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
      <div className={`absolute left-0 bottom-0 w-full h-full ${audio ? "" : "opacity-0 hover:opacity-100"}`}>
        <div
          className={`absolute w-full left-0 bottom-0 h-80 bg-gradient-to-t from-grey-40 to-transparent ${
            audio ? "hidden" : ""
          }`}
        ></div>
        <div
          className={`absolute left-0 bottom-0 w-full p-10 h-50 grid items-center gap-10 ${
            audio ? "grid-cols-[auto,1fr,auto,auto]" : "grid-cols-[auto,1fr,auto,auto,auto]"
          }`}
        >
          <button
            onClick={() => setPlaying(!playing)}
            className={`w-30 h-30 rounded-4 group flex items-center justify-center ${
              light ? "hover:bg-grey-10" : "hover:bg-white-10"
            }`}
          >
            <Wrapper open={playing}>
              <IoMdPause className={`group-hover:text-purple text-20 ${light ? "text-black" : "text-white"}`} />
            </Wrapper>
            <Wrapper open={!playing}>
              <MdPlayArrow className={`group-hover:text-purple text-28 ${light ? "text-black" : "text-white"}`} />
            </Wrapper>
          </button>
          <div className="h-30 w-full grid grid-cols-1 gap-4 items-center relative group">
            <div className={`w-full  h-4 flex items-center justify-start ${light ? "bg-grey-20" : "bg-white-20"}`}>
              <div
                className={`group-hover:bg-purple h-4 ${light ? "bg-black" : "bg-white"}`}
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
              className="absolute cursor-pointer left-0 top-[50%] transform translate-y-[-50%] w-[calc(100%+18px)] mx-[-9px] player-seek"
            />
          </div>
          <div
            className={`cursor-pointer text-12 font-bold hover:opacity-100 opacity-60 ${
              light ? "text-black" : "text-white"
            }`}
          >
            {parseMinutes(played)} {duration !== Infinity ? `/ ${parseMinutes(duration)}` : ""}
          </div>
          <button
            onClick={() => setMuted(!muted)}
            className={`w-30 h-30 rounded-4 group  flex items-center justify-center ${
              light ? "hover:bg-grey-10" : "hover:bg-white-10"
            }`}
          >
            <Wrapper open={muted}>
              <ImVolumeMute2 className={`group-hover:text-purple text-20 ${light ? "text-black" : "text-white"}`} />
            </Wrapper>
            <Wrapper open={!muted}>
              <ImVolumeMute className={`group-hover:text-purple text-20 ${light ? "text-black" : "text-white"}`} />
            </Wrapper>
          </button>
          <Wrapper open={!audio}>
            <button
              onClick={() => setFullscreen(!fullscreen)}
              className="w-30 h-30 rounded-4 group hover:bg-white-10 flex items-center justify-center"
            >
              <MdFullscreen className="text-white group-hover:text-purple text-24" />
            </button>
          </Wrapper>
        </div>
      </div>
    </>
  )
}

export default VideoPlayerBar
