import React from 'react'
import Footer from '../Components/Footer'
import Image from 'next/image'
import {HomePage,BannerDiv,Banner,HomeTitle,SideBannerdiv,SideBanner,Title,InfoPanel,DataBanner} from "../Components/HomePage/HomepageComponents"


function about() {
  return (
    <section id ="about">
    <HomePage>
        <BannerDiv style={{ flexDirection: "column", alignItems: "center",marginBottom:"10rem" }}>
          <Title style={{ fontSize: "3rem", marginTop: "6rem" }}>About
          </Title>
          <BannerDiv >
            <DataBanner style={{width:"82%"}}>
            <Image src={"/housing.png"} height={400} width={600} alt="img" />

            </DataBanner>
          </BannerDiv>
          <BannerDiv style={{marginTop:"6rem"}}>
            <DataBanner >Image</DataBanner>
            <DataBanner >Data</DataBanner>
          </BannerDiv>
          <BannerDiv style={{marginTop:"6rem"}}>
            <DataBanner >Image</DataBanner>
            <DataBanner >Data</DataBanner>
          </BannerDiv>
        </BannerDiv>
      </HomePage>
      <Footer/>
    </section>
  )
}

export default about