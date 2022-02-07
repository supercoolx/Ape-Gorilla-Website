import React, { useEffect, useLayoutEffect, useRef, useState } from "react"
import ReactPlayer from "react-player"
import VideoPlayerBar from "utils/video/VideoPlayerBar"
import VideoPlayerClean from "utils/video/VideoPlayerClean"
import VideoPlayIcon from "utils/video/VideoPlayIcon"
import Wrapper from "utils/wrapper/Wrapper"

const VideoPlayer = ({
  video,
  pre,
  title,
  length,
  clean,
  audio,
  light
}: {
  video: string
  pre: boolean
  title?: string
  length?: string
  clean?: boolean
  audio?: boolean
  light?: boolean
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const player = useRef<ReactPlayer>(null)

  const [dimensions, setDimensions] = useState([0, 0])

  const [width, setWidth] = useState("100%")
  const [height, setHeight] = useState("0px")
  const [volume] = useState(1)
  const [muted, setMuted] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [fullscreen, setFullscreen] = useState(false)

  const [played, setPlayed] = useState(0)
  const [playedPercentage, setPlayedPercentage] = useState(0)
  const [duration, setDuration] = useState(0)

  const [seeking, setSeeking] = useState(false)

  useEffect(() => {
    setSize()
    document.addEventListener("keydown", (e) => escFunction(e), false)
  }, [])

  useEffect(() => {
    setSize()
  }, [fullscreen, dimensions, width, height])

  useLayoutEffect(() => {
    window.addEventListener("resize", updateSize)
    updateSize()
    return () => window.removeEventListener("resize", updateSize)
  }, [])

  const escFunction = (e: any) => {
    if (e.keyCode === 27) {
      setFullscreen(false)
    }
  }

  const updateSize = () => {
    setDimensions([window.innerWidth, window.innerHeight])
  }

  const setSize = () => {
    if (ref.current) {
      const heightMax = dimensions[1] - 100
      const wide = dimensions[0] * 9 > heightMax * 16

      const heightNormal = (ref.current.clientWidth * 9) / 16

      const heightFullscreen = wide
        ? heightMax
        : (ref.current.clientWidth / 16) * 9
      const widthFullscreen = wide
        ? (ref.current?.clientHeight / 9) * 16
        : dimensions[0]

      setHeight(`${fullscreen ? heightFullscreen : heightNormal}px`)
      setWidth(fullscreen ? `${widthFullscreen}px` : "100%")
    }
  }

  const onDuration = (state: any) => {
    setDuration(state)
  }

  const onProgress = (state: any) => {
    if (!seeking) {
      setPlayed(state.playedSeconds)
      setPlayedPercentage(state.played)
    }
  }

  const onSeekMouseDown = () => {
    setSeeking(true)
  }

  const onSeekMouseUp = (e: any) => {
    setSeeking(false)

    if (player.current) {
      player.current.seekTo(parseFloat(e.target.value))
    }
  }

  const onSeekChange = (e: any) => {
    setPlayedPercentage(e.target.value)
  }

  return (
    <>
      <div
        className={`light-r pre-r ${
          fullscreen
            ? "fixed top-0 left-0 z-50 flex h-screen w-screen items-center justify-center bg-black py-50"
            : "h-full w-full"
        }`}
      >
        <div
          ref={ref}
          style={{ width: width, height: audio ? "50px" : height }}
          className={`pre-r relative overflow-hidden rounded-4 ${
            light ? "bg-grey-3" : "bg-grey-10 dark:bg-white-10"
          }`}
        >
          <ReactPlayer
            ref={player}
            url={video}
            playing={playing}
            light={pre}
            volume={volume}
            muted={muted}
            playIcon={<VideoPlayIcon title={title} length={length} />}
            controls={false}
            width={width}
            height={audio ? "50px" : height}
            progressInterval={100}
            config={{
              youtube: {
                playerVars: { showinfo: 1 }
              },
              file: {
                forceVideo: !audio,
                forceAudio: audio
              }
            }}
            onDuration={(state) => onDuration(state)}
            onProgress={(state) => onProgress(state)}
          />
          {clean ? (
            <VideoPlayerClean playing={playing} setPlaying={setPlaying} />
          ) : (
            <VideoPlayerBar
              duration={duration}
              fullscreen={fullscreen}
              muted={muted}
              played={played}
              playedPercentage={playedPercentage}
              playing={playing}
              setFullscreen={setFullscreen}
              setMuted={setMuted}
              setPlaying={setPlaying}
              onSeekMouseDown={onSeekMouseDown}
              onSeekChange={onSeekChange}
              onSeekMouseUp={onSeekMouseUp}
            />
          )}
        </div>
        <Wrapper open={fullscreen}>
          <button
            onClick={() => setFullscreen(false)}
            className="absolute bottom-0 left-0 flex h-50 w-full items-center justify-center gap-10 p-20"
          >
            <div className="text-white-40">Press</div>
            <div className="flex h-24 items-center rounded-4 bg-white-10 px-8 text-14 font-bold text-white">
              ESC
            </div>
            <div className="text-white-40">to exit fullscreen mode</div>
          </button>
        </Wrapper>
      </div>
    </>
  )
}

export default VideoPlayer
