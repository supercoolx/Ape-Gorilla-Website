import BannerFooter from "assets/img/banner_footer.png"
import Bg from "assets/img/bg.png"
import Footer from "components/footer/Footer"
import Nav from "components/nav/Nav"
import WhitelistTop from "components/whitelist/WhitelistTop"
import WrapperPage from "components/wrapper/WrapperPage"
import { NftInterface } from "libs/interfaces"
import React, { useState } from "react"
import Wrapper from "utils/wrapper/Wrapper"

const Whitelist = () => {
  const [nfts, setNfts] = useState<NftInterface[]>([])

  return (
    <>
      <Nav />
      <div className="fixed top-0 left-0 w-full h-screen min-h-screen">
        <div className="absolute top-0 w-screen left-[50%] transform translate-x-[-50%]">
          <img src={Bg} alt="" className="h-screen min-h-screen object-cover opacity-60" />
        </div>
      </div>
      <div className="w-full relative pt-[100px] sm:pt-[160px] xl:pt-[240px] pb-80 xl:pb-[160px] flex items-center px-20 sm:px-30">
        <WrapperPage>
          <div className="w-full grid grid-cols-1 xl:grid-cols-[auto,1fr] gap-60 items-center justify-center">
            <div className="w-full flex justify-center xl:w-[500px] max-w-full 2xl:w-[600px] relative h-auto xl:h-full row-start-2 xl:row-start-1">
              <img
                src={BannerFooter}
                alt=""
                className="relative xl:absolute w-full max-w-full sm:max-w-[1200px] sm:w-[550px] 2xl:w-[650px] bottom-[-80px] xl:bottom-[-160px] xl:left-[-80px] transform xl:translate-x-[0px] translate-y-[14.4%] z-10"
              />
            </div>
            <WhitelistTop handler={setNfts} />
          </div>
        </WrapperPage>
      </div>
      <Wrapper open={nfts && nfts.length > 0}>
        <div className="w-full bg-green py-[120px] sm:py-[150px] relative flex justify-center">
          <div className="w-full max-w-screen-2xl grid grid-cols-1 gap-60">
            <div className="w-full text-white text-24 sm:text-36 font-azo">YOUR NFTS</div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-30 sm:gap-40 2xl:gap-x-80 2xl:gap-y-50">
              {nfts.map((nft: NftInterface, key: number) => (
                <div className="w-full" key={key}>
                  <div className="w-full flex justify-center mb-24">
                    <div className="w-200 sm:w-[360px] h-200 sm:h-[360px] relative border-[3px] border-white rounded-[40px] overflow-hidden">
                      <img src={nft.image} alt="" className="w-full " />
                    </div>
                  </div>
                  <div className="w-full mb-10 text-center text-24 font-azo text-white">APEGORILLA#{nft.id}</div>
                  <div className="w-full mb-24 text-center text-18 font-regular text-white-60 truncate overflow-ellipsis underline">
                    {nft.address}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Wrapper>
      <Footer />
    </>
  )
}

export default Whitelist
