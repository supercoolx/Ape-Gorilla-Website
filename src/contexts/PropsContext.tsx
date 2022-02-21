import { loadContract } from "api/web3"
import { createCtx } from "contexts/Context"
import { useInterval } from "libs/functions"
import { getterAddress, setterAddress } from "libs/functions/cookies"
import moment from "moment-timezone"
import React, { createContext, useEffect, useState } from "react"
import { useCookies } from "react-cookie"
import Web3 from "web3"

type PropsContextType = {
  address: string
  authenticated: boolean
  balance: number
  contract: any
  duration: moment.Duration
  loading: boolean
  path: string
  ready: boolean
  route: boolean
  token: any
  web3: any
  whitelist: boolean
  setAddress: any
  setBalance: any
  setPath: any
}

export const [useProps, CtxProvider] = createCtx<PropsContextType>()

export const PropsContext = createContext<PropsContextType | undefined>(
  undefined
)

export const PropsProvider = ({ children }: { children: React.ReactNode }) => {
  const { ethereum } = window

  const [address, setAddress] = useState(getterAddress())
  const [authenticated] = useState(false)
  const [balance, setBalance] = useState(0)
  const [contract, setContract] = useState<any>()
  const [duration, setDuration] = useState(moment.duration(0, "milliseconds"))
  const [loading, setLoading] = useState(false)
  const [path, setPath] = useState(window.location.pathname)
  const [route] = useState(
    parseInt(process.env.REACT_APP_ADMIN ?? "") ? true : false
  )
  const [token] = useCookies(["auth"])
  const [web3] = useState(new Web3(ethereum))
  const [whitelist] = useState(true)

  const [interval] = useState(1000)

  const [date] = useState(
    moment.tz("2022/02/022 14:22", "America/New_York").valueOf()
  )
  const [diff, setDiff] = useState(date - moment().valueOf())
  const [ready, setReady] = useState(Math.floor(diff / 1000) < 0)

  useEffect(() => {
    if (Math.floor(diff / 1000) >= 0) {
      setDuration(moment.duration(diff, "milliseconds"))
    } else {
      setReady(true)
    }

    setLoading(false)
  }, [diff])

  useEffect(() => {
    setterAddress(address)
  }, [address])

  useEffect(() => {
    onContract()
  }, [web3])

  useInterval(() => {
    setDiff(diff - interval)
  }, 1000)

  const onContract = async () => {
    const newContract = await loadContract(web3.eth)
    newContract.setProvider(web3.currentProvider)
    setContract(newContract)
  }

  return (
    <>
      <CtxProvider
        value={{
          address,
          authenticated,
          balance,
          contract,
          duration,
          loading,
          path,
          ready,
          route,
          token,
          web3,
          whitelist,
          setAddress,
          setBalance,
          setPath
        }}
      >
        {children}
      </CtxProvider>
    </>
  )
}

export default PropsProvider
