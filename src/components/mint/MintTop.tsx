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
  const [total] = useState(1337)
  const [price] = useState(0.22)

  const [count, setCount] = useState(1)
  const [max] = useState(333)

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
      toast.error("Unsufficient balance to mint")
      return
    }

    if (!(count >= 1 && count <= max)) {
      toast.error(`Select between 1 and ${max} nft's to mint`)
      return
    }

    const state = await contract.methods.saleState().call()

    if (state === "1") {
      const url = "https://apegorilla.github.io/whitelist.json"

      const json = await fetch(url)
        .then((res: any) => res.json())
        .catch(() => {
          toast.error("Error retrieving whitelist addresses")
        })

      if (json) {
        const found = json
          .map((entry: any) => entry.toLowerCase())
          .includes(address.toLowerCase(), 0)

        if (found) {
          await onPreSale()
        } else {
          toast.error(
            "Metamask account not whitelisted, you are not allowed to mint!"
          )
        }
      }
    } else if (state === "2") {
      await onPublicSale()
    } else {
      toast.error("Sale is not Open!")
    }
  }

  const onPreSale = async () => {
    const message = web3.utils.soliditySha3(
      "0xBBE16255534D78530229Cb0D01DEFD11652A1D84",
      account
    )

    const sign = await web3.eth.accounts.sign(
      message,
      "603c13734233792745d50a6c9c0a55a075ad8b919d3c57d024e72a98a2d86353"
    )

    const r = sign["r"]
    const s = sign["s"]
    const v = sign["v"]
    const mint_fee = await contract.methods.mintCost().call()

    if (Math.floor(balance) + Math.floor(count) > 3) {
      toast.error("Maximum of 3 Mints per Address")
      return
    }

    if (Math.floor(balance) + Math.floor(count) > 3) {
      toast.error("Maximum of 3 Mints per Address")
      return
    }

    const state = await contract.methods.platinumSaleIsOpen().call()

    const gas = undefined

    if (!gas) {
      toast.error(
        `Not enough funds in wallet to mint ${count} NFT${
          count === 1 ? "" : "'s"
        }`
      )
      return
    }

    const url = ""

    if (state) {
      const json = await fetch(url)
        .then((res: any) => res.json())
        .catch(() => {
          toast.error("Error retrieving whitelist addresses")
        })

      if (json) {
        //const found = json.map((entry: any) => entry.toLowerCase()).includes(address.toLowerCase(), 0)
        const found = true

        if (found) {
          await onPlatinumSale()
        } else {
          toast.error(
            "Metamask account not on Platinum List, you are not allowed to mint!"
          )
        }
      }
    } else {
      toast.error("Platinum Sale is not open!")
    }
  }

  const onPlatinumSale = async () => {
    const message = web3.utils.soliditySha3(
      "0xA724dfda9fB36f346745Bd39Ee9b182C3E40dEef",
      account
    )
    const sign = await web3.eth.accounts.sign(
      message,
      "603c13734233792745d50a6c9c0a55a075ad8b919d3c57d024e72a98a2d86353"
    )

    const r = sign["r"]
    const s = sign["s"]
    const v = sign["v"]
    const mint_fee = await contract.methods.mintCost().call()

    if (Math.floor(balance) + Math.floor(count) > 22) {
      toast.error("Maximum of 22 Mints per Address")
      return
    }

    const gas = await contract.methods
      .platinumSaleMint(count, v, r, s)
      .estimateGas({ from: address, value: mint_fee * count })
      .then((res: any) => res)
      .catch((err: any) => {
        console.log(err)
      })

    if (!gas) {
      toast.error(
        `Not enough funds in wallet to mint ${count} NFT${
          count === 1 ? "" : "'s"
        }`
      )
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

  const onPublicSale = () => {
    console.log("Public Sale")
  }

  const onActivate = () => {
    activateBrowserWallet()
  }

  return (
    <>
      <div className="flex w-full justify-center">
        <div className="grid w-[660px] max-w-full grid-cols-1">
          <div className="relative mb-40 flex w-full items-center justify-center">
            <div className="relative">
              <img
                src={platinum ? SpinnerCircPlat : SpinnerCirc}
                alt=""
                className="h-[180px] w-[180px]"
              />
              <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] transform">
                <SpinnerText className="h-[124px] w-[124px] animate-spin-slow" />
              </div>
            </div>
          </div>
          <div className="font-azo font-osb mb-30 w-full text-center text-32 leading-[110%] text-white sm:text-[44px] md:mb-40 md:text-[50px] lg:text-[64px]">
            THE APE GORILLA MINTING IS LIVE!
          </div>
          <div className="mb-40 grid w-full grid-cols-1 gap-16 md:mb-60">
            <div className="flex w-full flex-wrap items-center justify-between gap-12">
              <div className="font-regular text-14 text-white-60 sm:text-16">
                {Math.floor((minted / total) * 100)}% already minted
              </div>
              <div className="font-regular text-14 text-white-60 sm:text-16">
                {total - minted} left to mint
              </div>
            </div>
            <div className="relative h-8 w-full bg-white-10">
              <div
                style={{ width: `${Math.floor((minted / total) * 100)}%` }}
                className={`absolute top-0 left-0 h-8 ${
                  platinum
                    ? "bg-gradient-to-br from-[#c3cccf] via-[#9DADB0] to-[#c3cccf]"
                    : "bg-green-light"
                }`}
              ></div>
              <div
                style={{ left: `${Math.floor((minted / total) * 100)}%` }}
                className={`absolute top-[50%] h-20 w-2 translate-y-[-50%] transform ${
                  platinum
                    ? "bg-gradient-to-br from-[#c3cccf] via-[#9DADB0] to-[#c3cccf]"
                    : "bg-green-light"
                }`}
              ></div>
            </div>
          </div>
          <div className="mb-60 grid w-full grid-cols-1 items-center gap-24 md:grid-cols-[1fr,auto,1fr]">
            <button className="relative flex w-full items-center justify-between px-28">
              <div className="absolute top-0 left-0 h-60 w-full -skew-x-12 transform bg-white-20 "></div>
              <div className="relative flex h-60 items-center text-14 text-white-60 sm:text-16 md:text-18">
                Price
              </div>
              <div className="relative flex h-60 items-center text-14 font-bold text-white sm:text-16 md:text-18">
                {price} ETH
              </div>
            </button>
            {address ? (
              <>
                <div className="relative h-60 px-20">
                  <div className="absolute top-0 left-0 h-60 w-full -skew-x-12 transform bg-white "></div>
                  <div className="relative flex h-60 items-center justify-center gap-16">
                    <button
                      onClick={() => setCount(Math.max(1, count - 1))}
                      className="flex h-30 w-30 items-center justify-center"
                    >
                      <MdRemove className="text-24 text-green" />
                    </button>
                    <div className="min-w-[40px] text-center text-18 font-bold text-green">
                      {count}
                    </div>
                    <button
                      onClick={() => setCount(Math.min(max, count + 1))}
                      className="flex h-30 w-30 items-center justify-center"
                    >
                      <MdAdd className="text-24 text-green" />
                    </button>
                  </div>
                </div>
                <button onClick={() => onMint()} className="relative">
                  <div
                    className={`absolute top-0 left-0 h-60 w-full -skew-x-12 transform ${
                      platinum
                        ? "bg-gradient-to-br from-[#c3cccf] via-[#9DADB0] to-[#c3cccf]"
                        : "bg-green-light"
                    }`}
                  ></div>
                  <div className="font-azo relative flex h-60 w-full items-center justify-center px-28 text-14 text-white sm:text-16 md:text-18">
                    MINT NOW
                  </div>
                </button>
              </>
            ) : (
              <button
                onClick={() => onActivate()}
                className="relative col-span-1 w-full md:col-span-2"
              >
                <div
                  className={`absolute top-0 left-0  h-60 w-full -skew-x-12 transform ${
                    platinum
                      ? "bg-gradient-to-br from-[#c3cccf] via-[#9DADB0] to-[#c3cccf]"
                      : "bg-green-light"
                  }`}
                ></div>
                <div className="font-azo relative flex h-60 w-full items-center justify-center px-28 text-14 text-white sm:text-16 md:text-18">
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
