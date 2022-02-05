import { useEthers, useEtherBalance } from "@usedapp/core"
import { useProps } from "contexts/PropsContext"
import React, { useEffect, useState } from "react"
import { AiOutlineCaretUp } from "react-icons/ai"
import { MdKeyboardArrowDown } from "react-icons/md"
import Wrapper from "utils/wrapper/Wrapper"

const NavConnect = ({ platinum }: { platinum?: boolean }) => {
  const { address, setAddress, setBalance } = useProps()

  const { utils } = require("ethers")

  const { activateBrowserWallet, deactivate, account } = useEthers()

  const [openConnect, setOpenConnect] = useState(false)

  const [addr, setAddr] = useState("")

  const eth = useEtherBalance(addr)

  useEffect(() => {
    setAddr(address ? address : "")
  }, [address])

  useEffect(() => {
    setAddress(account ? account : "")
    setAddr(account ? account : "")
  }, [account])

  useEffect(() => {
    if (eth) {
      onEth(eth)
    } else {
      setBalance(0)
    }
  }, [eth])

  const onActivate = () => {
    activateBrowserWallet()
  }

  const onDeactivate = () => {
    deactivate()
  }

  const onEth = (value: any) => {
    const balanceString = utils.formatEther(value).substring(0, 7)
    const newBalance = Math.round(parseFloat(balanceString) * 10000) / 10000

    setBalance(newBalance)
  }

  const onDisconnect = () => {
    onDeactivate()
    setOpenConnect(false)
  }

  return (
    <>
      {addr ? (
        <div className="relative flex w-full md:w-auto">
          <button
            onClick={() => setOpenConnect(!openConnect)}
            className="relative z-30"
          >
            <div
              className={`absolute top-0 left-0 h-44 w-full -skew-x-12 transform sm:h-50 ${
                platinum
                  ? "bg-gradient-to-br from-[#c3cccf] via-[#9DADB0] to-[#c3cccf]"
                  : "bg-green-light"
              }`}
            ></div>
            <div className="font-azo relative flex h-44 w-full items-center gap-6 px-14 text-14 text-white sm:h-50 sm:px-28 sm:text-16 md:text-18">
              <span className="flex">
                <span className="font-azo truncate overflow-ellipsis text-14 text-white sm:text-16 md:text-18">
                  {addr.slice(0, 4)}
                </span>
                <span className="font-azo hidden truncate overflow-ellipsis text-14 text-white sm:flex sm:text-16 md:text-18">
                  ...{addr.slice(addr.length - 4, addr.length)}
                </span>
              </span>
              <MdKeyboardArrowDown
                className={`text-18 text-white transition-all duration-300 ${
                  openConnect ? "rotate-180 transform" : ""
                }`}
              />
            </div>
          </button>
          <Wrapper open={openConnect}>
            <div
              onClick={() => setOpenConnect(false)}
              className="fixed top-0 left-0 z-10 h-full w-full"
            ></div>
          </Wrapper>
          <button
            onClick={() => onDisconnect()}
            className={`absolute top-0 z-20 w-full transition-all duration-300 ${
              openConnect
                ? "opacity-1 top-44 left-[-10.5px] sm:top-[50px]"
                : "left-0 top-0 opacity-0"
            }`}
          >
            <div className="font-azo z-20 flex h-44 w-full -skew-x-12 transform items-center bg-white px-24 text-14 text-green sm:h-50 sm:px-28 sm:text-16 md:text-18">
              DISCONNECT
            </div>
          </button>
        </div>
      ) : (
        <button onClick={() => onActivate()} className="group relative">
          <div
            className={`absolute top-0 left-0 h-44 w-full -skew-x-12 transform sm:h-50 ${
              platinum
                ? "bg-gradient-to-br from-[#c3cccf] via-[#9DADB0] to-[#c3cccf]"
                : "bg-green-light"
            }`}
          ></div>
          <div className="font-azo relative flex h-44 w-full items-center px-16 text-14 text-white sm:h-50 sm:px-24 sm:text-16 md:px-28 md:text-18">
            CONNECT
          </div>
          <div className="absolute right-[50%] top-[100%] hidden w-[220px] translate-x-[50%] transform group-hover:flex">
            <div className="font-azo relative mt-14 flex rounded-full border-1 border-white bg-white-10 px-20 py-12 text-12 text-white">
              Connect your metamask wallet
              <AiOutlineCaretUp className="absolute top-[6px] left-[50%] translate-x-[-50%] translate-y-[-100%] transform text-24 text-white" />
            </div>
          </div>
        </button>
      )}
    </>
  )
}

export default NavConnect
