import { useEthers, useInterval } from "@usedapp/core"
import SpinnerCirc from "assets/img/spinner_circ.png"
import SpinnerCircPlat from "assets/img/spinner_circ_plat.png"
import { ReactComponent as SpinnerText } from "assets/img/spinner_text.svg"
import HomeTopSlider from "components/home/HomeTopSlider"
import ModalMint from "components/modals/ModalMint"
import { useProps } from "contexts/PropsContext"
import React, { useEffect, useState } from "react"
import { MdRemove, MdAdd } from "react-icons/md"
import { toast } from "react-toastify"

const MintTop = ({ platinum }: { platinum: boolean }) => {
  const { address, balance, contract, web3, setAddress } = useProps()

  const [open, setOpen] = useState(false)

  const [minted, setMinted] = useState(0)
  const [total] = useState(2000)
  const [price] = useState(0.22)

  const [count, setCount] = useState(1)
  const [max] = useState(22)

  const { activateBrowserWallet, account } = useEthers()

  const [mounted, setMounted] = useState(true)

  useEffect(() => {
    setMounted(true)
    onLoad()

    return () => {
      setMounted(false)
    }
  }, [contract])

  useEffect(() => {
    setAddress(account ? account : "")
  }, [account])

  useInterval(() => {
    onLoad()
  }, 30000)

  const onLoad = async () => {
    if (contract) {
      const newMinted = await contract.methods.totalSupply().call()

      console.log(newMinted)

      if (mounted) {
        setMinted(newMinted)
      }
    }
  }

  const onMint = async () => {
    if (!address) {
      activateBrowserWallet()
      toast.error("Please login")
      return
    }

    // let networkId = window.ethereum.networkVersion
    // if (networkId !== 1) {
    //   toast.error("Switch to Ethereum Mainnet")
    //   return
    // }

    if (balance === undefined) {
      toast.error("Insufficient balance to mint")
      return
    }

    if (!(count >= 1 && count <= max)) {
      toast.error(`Select between 1 and ${max} nft's to mint`)
      return
    }

    const isOpen = await contract.methods.platinumSaleIsOpen().call()

    if (isOpen) {
      await onPlatinumSale()
    }
    else {
      toast.error("Sale is not Open!")
    }
  }

  const onPlatinumSale = async () => {
    const mint_fee = await contract.methods.mintCost().call()
    const balance = await contract.methods.balanceOf(address).call()
    if (Math.floor(balance) + Math.floor(count) > 22) {
      toast.error('Maximum of 22 Mints per Address')
      return
    }

    const message = web3.utils.soliditySha3("0x15f8Fc209A1c97a40e64Bf14C8c7D1D9c0541D0f", account)
    const sign = await web3.eth.accounts.sign(
      message,
      "603c13734233792745d50a6c9c0a55a075ad8b919d3c57d024e72a98a2d86353"
    )

    const r = sign["r"]
    const s = sign["s"]
    const v = sign["v"]

    const gas = await contract.methods
      .platinumSaleMint(count, v, r, s)
      .estimateGas({ from: address, value: mint_fee * count })
      .then((res: any) => res)
      .catch((err: any) => {
        console.log(err)
      })

    if (!gas) {
      toast.error(`Not enough funds in wallet to mint ${count} NFT${count === 1 ? "" : "'s"}`)
      return
    }

    const method = await contract.methods
      .platinumSaleMint(count, v, r, s)
      .send({ from: address, value: mint_fee * count, gas: gas })
      .then((res: any) => res)
      .catch((err: any) => {
        console.log(err)
      })

    if (!method) {
      toast.error("Was not able to complete the transaction")
    } else {
      setOpen(true)
    }
  }

  const onActivate = () => {
    activateBrowserWallet()
  }

  return (
    <>
      <div className="w-full flex justify-center">
        <div className="w-[660px] max-w-full grid grid-cols-1">
          <div className="w-full flex items-center justify-center mb-40 relative">
            <div className="relative">
              <img src={platinum ? SpinnerCircPlat : SpinnerCirc} alt="" className="w-[180px] h-[180px]" />
              <div className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]">
                <SpinnerText className="animate-spin-slow w-[124px] h-[124px]" />
              </div>
            </div>
          </div>
          <div className="w-full mb-30 md:mb-40 text-white font-azo text-32 sm:text-[44px] md:text-[50px] lg:text-[64px] font-osb text-center leading-[110%]">
            THE APE GORILLA MINTING IS LIVE!
          </div>
          <div className="w-full grid grid-cols-1 gap-16 mb-40 md:mb-60">
            <div className="w-full flex items-center justify-between flex-wrap gap-12">
              <div className="text-white-60 text-14 sm:text-16 font-regular">
                {Math.floor((minted / total) * 100)}% already minted
              </div>
              <div className="text-white-60 text-14 sm:text-16 font-regular">{total - minted} left to mint</div>
            </div>
            <div className="w-full h-8 bg-white-10 relative">
              <div
                style={{ width: `${Math.floor((minted / total) * 100)}%` }}
                className={`absolute top-0 left-0 h-8 ${
                  platinum ? "bg-gradient-to-br from-[#c3cccf] via-[#9DADB0] to-[#c3cccf]" : "bg-green-light"
                }`}
              ></div>
              <div
                style={{ left: `${Math.floor((minted / total) * 100)}%` }}
                className={`absolute top-[50%] transform translate-y-[-50%] w-2 h-20 ${
                  platinum ? "bg-gradient-to-br from-[#c3cccf] via-[#9DADB0] to-[#c3cccf]" : "bg-green-light"
                }`}
              ></div>
            </div>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-[1fr,auto,1fr] items-center gap-24 mb-60">
            <button className="relative flex w-full items-center justify-between px-28">
              <div className="absolute top-0 left-0 bg-white-20 w-full h-60 transform -skew-x-12 "></div>
              <div className="h-60 relative text-white-60 text-14 sm:text-16 md:text-18 flex items-center">Price</div>
              <div className="h-60 relative text-white font-bold text-14 sm:text-16 md:text-18 flex items-center">
                {price} ETH
              </div>
            </button>
            {address ? (
              <>
                <div className="px-20 h-60 relative">
                  <div className="absolute top-0 left-0 bg-white w-full h-60 transform -skew-x-12 "></div>
                  <div className="flex items-center justify-center gap-16 relative h-60">
                    <button
                      onClick={() => setCount(Math.max(1, count - 1))}
                      className="w-30 h-30 flex items-center justify-center"
                    >
                      <MdRemove className="text-green text-24" />
                    </button>
                    <div className="text-green text-18 min-w-[40px] text-center font-bold">{count}</div>
                    <button
                      onClick={() => setCount(Math.min(max, count + 1))}
                      className="w-30 h-30 flex items-center justify-center"
                    >
                      <MdAdd className="text-green text-24" />
                    </button>
                  </div>
                </div>
                <button onClick={() => onMint()} className="relative">
                  <div
                    className={`absolute top-0 left-0 w-full h-60 transform -skew-x-12 ${
                      platinum ? "bg-gradient-to-br from-[#c3cccf] via-[#9DADB0] to-[#c3cccf]" : "bg-green-light"
                    }`}
                  ></div>
                  <div className="w-full h-60 relative px-28 text-white font-azo text-14 sm:text-16 md:text-18 flex items-center justify-center">
                    MINT NOW
                  </div>
                </button>
              </>
            ) : (
              <button onClick={() => onActivate()} className="w-full col-span-1 md:col-span-2 relative">
                <div
                  className={`absolute top-0 left-0  w-full h-60 transform -skew-x-12 ${
                    platinum ? "bg-gradient-to-br from-[#c3cccf] via-[#9DADB0] to-[#c3cccf]" : "bg-green-light"
                  }`}
                ></div>
                <div className="w-full h-60 relative px-28 text-white font-azo text-14 sm:text-16 md:text-18 flex items-center justify-center">
                  CONNECT
                </div>
              </button>
            )}
          </div>
          <HomeTopSlider flat={true} single={true} />
        </div>
      </div>
      <ModalMint count={count} open={open} handler={setOpen} />
    </>
  )
}

export default MintTop
