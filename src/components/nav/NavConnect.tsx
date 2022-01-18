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
        <div className="w-full md:w-auto flex relative">
          <button onClick={() => setOpenConnect(!openConnect)} className="relative z-30">
            <div
              className={`absolute top-0 left-0 w-full h-44 sm:h-50 transform -skew-x-12 ${
                platinum ? "bg-gradient-to-br from-[#c3cccf] via-[#9DADB0] to-[#c3cccf]" : "bg-green-light"
              }`}
            ></div>
            <div className="w-full h-44 sm:h-50 relative px-14 sm:px-28 text-white font-azo text-14 sm:text-16 md:text-18 flex items-center gap-6">
              <span className="flex">
                <span className="text-white text-14 sm:text-16 md:text-18 overflow-ellipsis truncate font-azo">
                  {addr.slice(0, 4)}
                </span>
                <span className="hidden sm:flex text-white text-14 sm:text-16 md:text-18 overflow-ellipsis truncate font-azo">
                  ...{addr.slice(addr.length - 4, addr.length)}
                </span>
              </span>
              <MdKeyboardArrowDown
                className={`text-white text-18 transition-all duration-300 ${
                  openConnect ? "transform rotate-180" : ""
                }`}
              />
            </div>
          </button>
          <Wrapper open={openConnect}>
            <div onClick={() => setOpenConnect(false)} className="z-10 fixed top-0 left-0 w-full h-full"></div>
          </Wrapper>
          <button
            onClick={() => onDisconnect()}
            className={`z-20 w-full absolute transition-all duration-300 top-0 ${
              openConnect ? "top-44 sm:top-[50px] opacity-1 left-[-10.5px]" : "left-0 top-0 opacity-0"
            }`}
          >
            <div className="z-20 w-full bg-white h-44 sm:h-50 transform -skew-x-12 px-24 sm:px-28 text-green font-azo text-14 sm:text-16 md:text-18 flex items-center">
              DISCONNECT
            </div>
          </button>
        </div>
      ) : (
        <button onClick={() => onActivate()} className="relative group">
          <div
            className={`absolute top-0 left-0 w-full h-44 sm:h-50 transform -skew-x-12 ${
              platinum ? "bg-gradient-to-br from-[#c3cccf] via-[#9DADB0] to-[#c3cccf]" : "bg-green-light"
            }`}
          ></div>
          <div className="w-full h-44 sm:h-50 relative px-16 sm:px-24 md:px-28 text-white font-azo text-14 sm:text-16 md:text-18 flex items-center">
            CONNECT
          </div>
          <div className="absolute group-hover:flex hidden right-[50%] transform translate-x-[50%] top-[100%] w-[220px]">
            <div className="text-12 bg-white-10 rounded-full px-20 py-12 text-white relative flex font-azo border-1 border-white mt-14">
              Connect your metamask wallet
              <AiOutlineCaretUp className="text-white text-24 absolute top-[6px] left-[50%] transform translate-x-[-50%] translate-y-[-100%]" />
            </div>
          </div>
        </button>
      )}
    </>
  )
}

export default NavConnect
