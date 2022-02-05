import Bg from "assets/img/bg.png"
import BgPlat from "assets/img/bg_plat.png"
import WrapperRouter from "components/wrapper/WrapperRouter"
import { useProps } from "contexts/PropsContext"
import { URL } from "libs/constants"
import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import RoutesLanding from "router/routes/RoutesLanding"
import ScrollToTop from "utils/elements/ScrollToTop"

const App = () => {
  const { loading, path } = useProps()

  if (loading) {
    return <></>
  }

  const onBg = () => {
    return path === URL.PLATINUM ? (
      <img
        src={BgPlat}
        alt=""
        className="absolute top-0 left-0 h-full w-full object-cover opacity-30"
      />
    ) : (
      <img
        src={Bg}
        alt=""
        className="absolute top-0 left-0 h-full w-full object-cover"
      />
    )
  }

  return (
    <>
      <div className="w-full min-w-[300px]">
        <div className="fixed top-0 left-0 h-screen w-full bg-brown">
          {onBg()}
        </div>
        <div className="relative w-full overflow-hidden">
          <Router>
            <ScrollToTop />
            <WrapperRouter>
              {RoutesLanding.map((props) => props.component)}
            </WrapperRouter>
          </Router>
        </div>
      </div>
    </>
  )
}

export default App
