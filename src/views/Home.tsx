import Footer from "components/footer/Footer"
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
        <div className="w-full flex justify-center pb-[120px] lg:pb-[180px] relative">
          <div className="absolute bottom-0 left-[50%] transform translate-x-[-50%] w-screen h-[1200px] bg-gradient-to-t from-green-light-60 to-transparent"></div>
          <div className="w-full grid grid-cols-1 gap-[140px] lg:gap-[240px] relative">
            <HomeTop />
            <HomeRoadmap />
            <HomeLuck />
            <HomeTeam />
            <HomeFaq />
          </div>
        </div>
      </WrapperPage>
      <Footer />
    </>
  )
}

export default Home
