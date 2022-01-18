import { DAppProvider } from "@usedapp/core"
import App from "App"
import { PropsProvider } from "contexts/PropsContext"
import React from "react"
import { CookiesProvider } from "react-cookie"
import { Web3ContextProvider } from "react-dapp-web3"
import ReactDOM from "react-dom"
import { ToastContainer } from "react-toastify"

import reportWebVitals from "./reportWebVitals"
import "react-toastify/dist/ReactToastify.css"
import "assets/styles/base/base.css"
import "assets/styles/base/global.css"
import "assets/styles/base/index.css"
import "assets/styles/base/theme.css"
import "assets/styles/css/fade.css"
import "assets/styles/css/fonts.css"

const main = async () => {
  ReactDOM.render(
    <>
      <DAppProvider config={{}}>
        <Web3ContextProvider>
          <CookiesProvider>
            <PropsProvider>
              <App />
            </PropsProvider>
          </CookiesProvider>
        </Web3ContextProvider>
      </DAppProvider>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        className="z-50"
      />
    </>,
    document.getElementById("app")
  )
}

reportWebVitals()
main()
