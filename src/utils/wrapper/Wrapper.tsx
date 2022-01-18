import React from "react"

const Wrapper = ({ children, open }: { children: any; open: boolean }) => {
  return <>{open ? children : ""}</>
}

export default Wrapper
