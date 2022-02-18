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
      <div className="min-h-screen fixed top-0 left-0 h-screen w-full">
        <div className="absolute top-0 left-[50%] w-screen translate-x-[-50%] transform">
          <img
            src={Bg}
            alt=""
            className="min-h-screen h-screen object-cover opacity-60"
          />
        </div>
      </div>
      <div className="relative flex w-full items-center px-20 pt-[100px] pb-80 sm:px-30 sm:pt-[160px] xl:pt-[240px] xl:pb-[160px]">
        <WrapperPage>
          <div className="grid w-full grid-cols-1 items-center justify-center gap-60 xl:grid-cols-[auto,1fr]">
            <div className="relative row-start-2 flex h-auto w-full max-w-full justify-center xl:row-start-1 xl:h-full xl:w-[500px] 2xl:w-[600px]">
              <img
                src={BannerFooter}
                alt=""
                className="relative bottom-[-80px] z-10 w-full max-w-full translate-y-[14.4%] transform sm:w-[550px] sm:max-w-[1200px] xl:absolute xl:bottom-[-160px] xl:left-[-80px] xl:translate-x-[0px] 2xl:w-[650px]"
              />
            </div>
            <WhitelistTop handler={setNfts} />
          </div>
        </WrapperPage>
      </div>
      <Wrapper open={nfts && nfts.length > 0}>
        <div className="relative flex w-full justify-center bg-brown py-[120px] sm:py-[150px]">
          <div className="grid w-full max-w-screen-2xl grid-cols-1 gap-60">
            <div className="font-azo w-full text-24 text-white sm:text-36">
              YOUR NFTS
            </div>
            <div className="grid w-full grid-cols-1 gap-30 sm:gap-40 md:grid-cols-2 lg:grid-cols-3 2xl:gap-x-80 2xl:gap-y-50">
              {nfts.map((nft: NftInterface, key: number) => (
                <div className="w-full" key={key}>
                  <div className="mb-24 flex w-full justify-center">
                    <div className="relative h-200 w-200 overflow-hidden rounded-[40px] border-[3px] border-white sm:h-[360px] sm:w-[360px]">
                      <img src={nft.image} alt="" className="w-full " />
                    </div>
                  </div>
                  <div className="font-azo mb-10 w-full text-center text-24 text-white">
                    APEGORILLA#{nft.id}
                  </div>
                  <div className="font-regular mb-24 w-full truncate overflow-ellipsis text-center text-18 text-white-60 underline">
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
