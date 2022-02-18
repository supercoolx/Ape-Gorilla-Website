import BannerFooter from "assets/img/banner_footer.png"
import Logo from "assets/img/logo.png"
import { ReactComponent as Paw } from "assets/img/paw.svg"
import Footer from "components/footer/Footer"
import HomeFaq from "components/home/HomeFaq"
import MintTop from "components/mint/MintTop"
import Nav from "components/nav/Nav"
import WrapperPage from "components/wrapper/WrapperPage"
import { useProps } from "contexts/PropsContext"
import { URL } from "libs/constants"
import { SpecialInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"
import { MdStar, MdStars } from "react-icons/md"
import { useHistory } from "react-router-dom"

const Mint = ({ platinum }: { platinum: boolean }) => {
  const { ready } = useProps()

  const history = useHistory()

  const [specials] = useState<SpecialInterface[]>([
    { image: "", id: 1 },
    { image: "", id: 2 },
    { image: "", id: 3 }
  ])

  useEffect(() => {
    if (!ready && !platinum) {
      history.push(URL.HOME)
    }
  }, [ready])

  return (
    <>
      <Nav platinum={platinum} />
      <div className="relative flex w-full items-center px-20 pt-[80px] pb-80 sm:px-30">
        <WrapperPage>
          <div className="flex min-h-[calc(100vh-100px)] w-full items-center justify-center py-80 sm:py-100">
            <div className="grid w-[1220px] max-w-full grid-cols-1 gap-60 md:gap-80 lg:gap-[150px]">
              <MintTop platinum={platinum} />
            </div>
          </div>
        </WrapperPage>
      </div>
      <div className="relative hidden w-full justify-center overflow-hidden bg-brown py-[120px] px-20 sm:py-[160px] sm:px-30">
        <div className="absolute bottom-0 left-[50%] h-[900px] w-screen translate-x-[-50%] transform bg-gradient-to-t from-orange-60 to-brown"></div>
        <div className="absolute bottom-[100%] h-60 w-full bg-gradient-to-t from-brown to-transparent"></div>
        <div className="relative grid w-full max-w-screen-2xl grid-cols-1 gap-60 sm:gap-100">
          <div className="flex w-full justify-center">
            <div className="grid w-[700px] max-w-full grid-cols-1 gap-30">
              <div className="font-azo w-full text-center text-32 text-white sm:text-[42px] md:text-[52px] lg:text-[60px]">
                COMMUNITY{" "}
                <span className="font-azo text-32 text-orange sm:text-[42px] md:text-[52px] lg:text-[60px]">
                  MASTERMINDS
                </span>
              </div>
              <div className="w-full text-center text-18 text-white-60">
                On a mission to building a community surrounded around helping
                and empowering each other with access to high-level events,
                web3.0 training, software, and games.
              </div>
            </div>
          </div>
          <div className="hidden w-full justify-center">
            <div className="grid max-w-full grid-cols-1 gap-30 sm:gap-40 md:grid-cols-2 xl:grid-cols-3 2xl:gap-x-80 2xl:gap-y-50">
              {specials.map((special: SpecialInterface, key: number) => (
                <div className="w-full" key={key}>
                  <div className="mb-24 flex w-full justify-center">
                    <div className="relative h-200 w-200 overflow-hidden rounded-[40px] border-[3px] border-white sm:h-[330px] sm:w-[330px]">
                      <img src={special.image} alt="" className="w-full " />
                    </div>
                  </div>
                  <div className="font-azo mb-10 w-full text-center text-24 text-white">
                    APEGORILLA#{special.id}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="relative hidden w-full justify-center bg-white py-[20px] px-20 sm:py-[140px] sm:px-30">
        <div className="relative grid w-full max-w-screen-2xl grid-cols-1 gap-40 xl:grid-cols-[2fr,3fr]">
          <div className="relative row-start-2 flex h-full w-full justify-center xl:row-start-1">
            <img
              src={BannerFooter}
              alt=""
              className="relative bottom-[-120px] z-20 w-[500px] max-w-full translate-y-[14.4%] transform sm:bottom-[-140px] xl:absolute"
            />
          </div>
          <div className="flex w-full justify-center xl:justify-end">
            <div className="grid grid-cols-1 gap-40 sm:grid-cols-2 md:grid-cols-4">
              <div className="flex w-full justify-center">
                <div className="grid w-120 max-w-full grid-cols-1">
                  <div className="mb-30 flex h-120 w-120 items-center justify-center rounded-[50px] bg-orange">
                    <Paw className="h-44 w-44 text-white" />
                  </div>
                  <div className="font-azo mb-8 w-full text-center text-24 text-brown">
                    11,337
                  </div>
                  <div className="text-brown-60 w-full text-center text-18">
                    Supplies
                  </div>
                </div>
              </div>
              <div className="flex w-full justify-center">
                <div className="grid w-120 max-w-full grid-cols-1">
                  <div className="mb-30 flex h-120 w-120 items-center justify-center rounded-[50px] bg-orange">
                    <MdStars className="text-[44px] text-white" />
                  </div>
                  <div className="font-azo mb-8 w-full text-center text-24 text-brown">
                    400+
                  </div>
                  <div className="text-brown-60 w-full text-center text-18">
                    Items
                  </div>
                </div>
              </div>
              <div className="flex w-full justify-center">
                <div className="grid w-120 max-w-full grid-cols-1">
                  <div className="mb-30 flex h-120 w-120 items-center justify-center rounded-[50px] bg-orange">
                    <MdStar className="text-[44px] text-white" />
                  </div>
                  <div className="font-azo mb-8 w-full text-center text-24 text-brown">
                    100+
                  </div>
                  <div className="text-brown-60 w-full text-center text-18">
                    Specials
                  </div>
                </div>
              </div>
              <div className="flex w-full justify-center">
                <div className="grid w-120 max-w-full grid-cols-1">
                  <div className="mb-30 flex h-120 w-120 items-center justify-center rounded-[50px] bg-orange">
                    <img src={Logo} className="w-44" alt="" />
                  </div>
                  <div className="font-azo mb-8 w-full text-center text-24 text-brown">
                    50+
                  </div>
                  <div className="text-brown-60 w-full text-center text-18">
                    Legendary
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative hidden w-full justify-center overflow-hidden bg-brown py-[120px] sm:py-[160px]">
        <div className="absolute bottom-0 left-[50%] h-[900px] w-screen translate-x-[-50%] transform bg-gradient-to-t from-orange-60 to-brown"></div>
        <div className="relative w-full max-w-screen-2xl">
          <HomeFaq />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Mint
