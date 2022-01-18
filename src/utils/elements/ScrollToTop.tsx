import { useProps } from "contexts/PropsContext"
import React, { useEffect } from "react"
import { useHistory } from "react-router"

const ScrollToTop = () => {
  const history = useHistory()
  const { setPath } = useProps()

  useEffect(() => {
    history.listen(() => {
      window.scrollTo(0, 0)
      updatePath()
    })
  }, [])

  function updatePath() {
    setPath(window.location.pathname)
  }

  return <></>
}

export default ScrollToTop
