import { useState } from "react";
import db from "../db";
import Footer from "../Components/Footer";
import {HomePage,BannerDiv,Banner,HomeTitle,SideBannerdiv,SideBanner,Title,InfoPanel,DataBanner} from "../Components/HomePage/HomepageComponents"

function Home(props) {
  return (
    <section className="home">
      <HomePage>
        <BannerDiv>
          <Banner>
            <HomeTitle>Hommies</HomeTitle>
          </Banner>
          <SideBannerdiv>
            <SideBanner>
              <Title>Find PG</Title>
            </SideBanner>
            <SideBanner>
              <Title>Register PG</Title>
            </SideBanner>
          </SideBannerdiv>
        </BannerDiv>
        <InfoPanel>
          <Title style={{ fontSize: "1rem" }}>City</Title>
          <Title style={{ fontSize: "1rem" }}>PG&apos;s</Title>
          <Title style={{ fontSize: "1rem" }}>Beds</Title>
        </InfoPanel>
        <BannerDiv style={{ flexDirection: "column", alignItems: "center",marginBottom:"10rem" }}>
          <Title style={{ fontSize: "3rem", marginTop: "6rem" }}>
            Top Cities
          </Title>
          <BannerDiv >
            <DataBanner >Image</DataBanner>
            <DataBanner >Data</DataBanner>
          </BannerDiv>
          <BannerDiv style={{marginTop:"6rem"}}>
            <DataBanner >Image</DataBanner>
            <DataBanner >Data</DataBanner>
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
  );
}
export async function getStaticProps(context) {
  let data = await db.collection("RoomsData").get();
  let Alldata = data.docs.map((entry) => entry.data());
  return {
    props: { Alldata }, // will be passed to the page component as props
    revalidate: 1,
  };
}

export default Home;
