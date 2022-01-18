import { animated, useTransition } from "@react-spring/web"
import ModalBg from "components/modals/ModalBg"
import React from "react"

const Modal = ({ children, open, handler }: { children: any; open: boolean; handler: any }) => {
  const transition = useTransition(open, {
    config: { mass: 1, tension: 600, friction: 40, clamp: true, precision: 0.01, velocity: 0 },
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  return (
    <>
      {transition((style: any, item: boolean) => {
        return item ? (
          <animated.div
            style={style}
            className="z-50 fixed min-w-[330px] top-0 left-0 w-screen h-screen p-20 flex items-center"
          >
            <div className="w-full flex justify-center max-h-full overflow-y-auto rounded-4">
              <ModalBg handler={handler} />
              <div className="z-20 relative max-w-full">{children}</div>
            </div>
          </animated.div>
        ) : (
          <></>
        )
      })}
    </>
  )
}

export default Modal
