import Footer from "components/footer/Footer"
import HomeButhan from "components/home/HomeButhan"
import HomeFaq from "components/home/HomeFaq"
import HomeLuck from "components/home/HomeLuck"
import HomeRoadmap from "components/home/HomeRoadmap"
import HomeTeam from "components/home/HomeTeam"
import HomeTop from "components/home/HomeTop"
import Nav from "components/nav/Nav"
import WrapperPage from "components/wrapper/WrapperPage"
import React from "react"

const Home = () => {
  return (
    <>
      <Nav />
      <WrapperPage>
        <div className="relative flex w-full justify-center pb-[120px] lg:pb-[180px]">
          <div className="absolute bottom-0 left-[50%] h-[1200px] w-screen translate-x-[-50%] transform bg-gradient-to-t from-orange-60 to-transparent"></div>
          <div className="relative grid w-full grid-cols-1 gap-[140px] lg:gap-[240px]">
            <HomeTop />
            <HomeButhan />
            <HomeRoadmap />
            <HomeLuck />
            <HomeTeam />
            {/* <HomePartners /> */}
            <HomeFaq />
          </div>
        </div>
      </WrapperPage>
      <Footer />
    </>
  )
}

export default Home
