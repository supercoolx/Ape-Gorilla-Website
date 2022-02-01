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
    { image: "", id: 3 },
  ])

  useEffect(() => {
    if (!ready) {
      history.push(URL.HOME)
    }
  }, [ready])

  return (
    <>
      <Nav platinum={platinum} />
      <div className="w-full relative pt-[80px] pb-80 flex items-center px-20 sm:px-30">
        <WrapperPage>
          <div className="w-full flex justify-center items-center py-80 sm:py-100 min-h-[calc(100vh-100px)]">
            <div className="w-[1220px] max-w-full grid grid-cols-1 gap-60 md:gap-80 lg:gap-[150px]">
              <MintTop platinum={platinum} />
            </div>
          </div>
        </WrapperPage>
      </div>
      <div className="hidden w-full bg-green relative justify-center py-[120px] sm:py-[160px] px-20 sm:px-30 overflow-hidden">
        <div className="absolute bottom-0 left-[50%] transform translate-x-[-50%] w-screen h-[900px] bg-gradient-to-t from-green-light-60 to-green"></div>
        <div className="absolute bottom-[100%] w-full h-60 bg-gradient-to-t from-green to-transparent"></div>
        <div className="w-full max-w-screen-2xl relative grid grid-cols-1 gap-60 sm:gap-100">
          <div className="w-full flex justify-center">
            <div className="w-[700px] max-w-full grid grid-cols-1 gap-30">
              <div className="w-full font-azo text-center text-white text-32 sm:text-[42px] md:text-[52px] lg:text-[60px]">
                COMMUNITY{" "}
                <span className="font-azo text-green-light text-32 sm:text-[42px] md:text-[52px] lg:text-[60px]">
                  MASTERMINDS
                </span>
              </div>
              <div className="w-full text-white-60 text-center text-18">
              On a mission to building a community surrounded around helping and empowering each other with access to high-level events, web3.0 training, software, and games.
              </div>
            </div>
          </div>
          <div className="hidden w-full justify-center">
            <div className="max-w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-30 sm:gap-40 2xl:gap-x-80 2xl:gap-y-50">
              {specials.map((special: SpecialInterface, key: number) => (
                <div className="w-full" key={key}>
                  <div className="w-full flex justify-center mb-24">
                    <div className="w-200 sm:w-[330px] h-200 sm:h-[330px] relative border-[3px] border-white rounded-[40px] overflow-hidden">
                      <img src={special.image} alt="" className="w-full " />
                    </div>
                  </div>
                  <div className="w-full mb-10 text-center text-24 font-azo text-white">APEGORILLA#{special.id}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="hidden w-full bg-white relative justify-center py-[20px] sm:py-[140px] px-20 sm:px-30">
        <div className="w-full max-w-screen-2xl relative grid grid-cols-1 xl:grid-cols-[2fr,3fr] gap-40">
          <div className="w-full h-full relative flex justify-center row-start-2 xl:row-start-1">
            <img
              src={BannerFooter}
              alt=""
              className="relative xl:absolute z-20 bottom-[-120px] sm:bottom-[-140px] w-[500px] max-w-full transform translate-y-[14.4%]"
            />
          </div>
          <div className="w-full flex justify-center xl:justify-end">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-40">
              <div className="w-full flex justify-center">
                <div className="w-120 max-w-full grid grid-cols-1">
                  <div className="w-120 h-120 bg-green-light rounded-[50px] mb-30 flex items-center justify-center">
                    <Paw className="w-44 h-44 text-white" />
                  </div>
                  <div className="w-full mb-8 text-green font-azo text-24 text-center">11,337</div>
                  <div className="w-full text-center text-green-60 text-18">Supplies</div>
                </div>
              </div>
              <div className="w-full flex justify-center">
                <div className="w-120 max-w-full grid grid-cols-1">
                  <div className="w-120 h-120 bg-green-light rounded-[50px] mb-30 flex items-center justify-center">
                    <MdStars className="text-white text-[44px]" />
                  </div>
                  <div className="w-full mb-8 text-green font-azo text-24 text-center">400+</div>
                  <div className="w-full text-center text-green-60 text-18">Items</div>
                </div>
              </div>
              <div className="w-full flex justify-center">
                <div className="w-120 max-w-full grid grid-cols-1">
                  <div className="w-120 h-120 bg-green-light rounded-[50px] mb-30 flex items-center justify-center">
                    <MdStar className="text-white text-[44px]" />
                  </div>
                  <div className="w-full mb-8 text-green font-azo text-24 text-center">100+</div>
                  <div className="w-full text-center text-green-60 text-18">Specials</div>
                </div>
              </div>
              <div className="w-full flex justify-center">
                <div className="w-120 max-w-full grid grid-cols-1">
                  <div className="w-120 h-120 bg-green-light rounded-[50px] mb-30 flex items-center justify-center">
                    <img src={Logo} className="w-44" alt="" />
                  </div>
                  <div className="w-full mb-8 text-green font-azo text-24 text-center">50+</div>
                  <div className="w-full text-center text-green-60 text-18">Legendary</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden w-full bg-green relative justify-center py-[120px] sm:py-[160px] overflow-hidden">
        <div className="absolute bottom-0 left-[50%] transform translate-x-[-50%] w-screen h-[900px] bg-gradient-to-t from-green-light-60 to-green"></div>
        <div className="w-full max-w-screen-2xl relative">
          <HomeFaq />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Mint
