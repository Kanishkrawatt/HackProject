import { useState } from "react";
import db from "../db/index";
import Image from "next/image";
import Footer from "../Components/Footer";
import Nevbar from "../Components/Nevbar/nevbar";
import { SubHeading } from "../Components/Card/cardComponents";
import {
  HomePage,
  BannerDiv,
  Banner,
  HomeTitle,
  SideBannerdiv,
  SideBanner,
  Title,
  InfoPanel,
  DataBanner,
} from "../Components/HomePage/HomepageComponents";
import Link from "next/link";
// eslint-disable-next-line @next/next/no-img-element
function Home(props) {
  const [data, setData] = useState(props.data);
  const [city, setCity] = useState(0);
  const [pg, setPg] = useState(0);
  const [beds, setBeds] = useState(0);
  return (
    <section className="home">
      <HomePage>
        <BannerDiv>
          <Banner
            style={{
              backgroundImage: "url(/MainImage.jpg)",
              backgroundSize: "cover",
            }}
          >
            <HomeTitle>Roomies</HomeTitle>
          </Banner>
          <SideBannerdiv>
            <Link href={"/ChoseOption"}>
              <SideBanner style={{ backgroundColor: "#ffd672" }}>
                <Title>Find </Title>
                <Image
                  src={"/Search.png"}
                  width={"100"}
                  height={"100"}
                  alt="log"
                />
              </SideBanner>
            </Link>
            <Link href={"/create"}>
              <SideBanner style={{ backgroundColor: "#ffd672" }}>
                <Title>Register </Title>
                <Image
                  src={"/register.png"}
                  width={"100"}
                  height={"100"}
                  alt="log"
                />
              </SideBanner>
            </Link>
          </SideBannerdiv>
        </BannerDiv>
        <InfoPanel style={{ backgroundColor: "#9ADE7B" }}>
          <Title style={{ fontSize: "1rem" }}>{city} City</Title>
          <Title style={{ fontSize: "1rem" }}>{pg} PG&apos;s</Title>
          <Title style={{ fontSize: "1rem" }}>{beds} Beds</Title>
        </InfoPanel>
        <BannerDiv
          style={{
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "10rem",
          }}
        >
          <Title style={{ fontSize: "3rem", marginTop: "6rem" }}>
          </Title>
          <BannerDiv>
            <DataBanner>
              <Image src={"/1.png"} width={"550"} height={"550"} alt="img" />
            </DataBanner>
            <DataBanner style={{ fontSize: "2rem" }}>
              Start living your best life from day one
              <SubHeading style={{fontSize:"1rem",color:"gray",marginTop:"2rem"}}>Bring a box full of hopes, dreams, ambitions… and of course, your personal belongings. Everything else - furniture, appliances, food - has already been taken care of.</SubHeading>
            </DataBanner>
          </BannerDiv>
          <BannerDiv style={{ marginTop: "6rem" }}>
            <DataBanner style={{ fontSize: "2rem" }}>
              Step into a room that has room for everything
              <SubHeading style={{fontSize:"1rem",color:"gray",marginTop:"2rem"}}>Bring a box full of hopes, dreams, ambitions… and of course, your personal belongings. Everything else - furniture, appliances, food - has already been taken care of.</SubHeading>              
            </DataBanner>
            <DataBanner>
              <Image src={"/3.png"} width={"550"} height={"550"} alt="img" />
            </DataBanner>
          </BannerDiv>
          <BannerDiv style={{ marginTop: "6rem" }}>
            <DataBanner>
              <Image src={"/2.png"} width={"550"} height={"550"} alt="img" />
            </DataBanner>
            <DataBanner style={{ fontSize: "2rem" }}>
              Don&quot;t come expecting &quot;hostel-PG food&quot;
              <SubHeading style={{fontSize:"1rem",color:"gray",marginTop:"2rem"}}>Bring a box full of hopes, dreams, ambitions… and of course, your personal belongings. Everything else - furniture, appliances, food - has already been taken care of.</SubHeading>

            </DataBanner>
          </BannerDiv>
          <BannerDiv style={{ marginTop: "6rem" }}>
            <DataBanner style={{ fontSize: "2rem" }}>
              Take your daily list of chores. And tear it up
              <SubHeading style={{fontSize:"1rem",color:"gray",marginTop:"2rem"}}>Bring a box full of hopes, dreams, ambitions… and of course, your personal belongings. Everything else - furniture, appliances, food - has already been taken care of.</SubHeading>
            </DataBanner>
            <DataBanner>
              <Image src={"/4.png"} width={"550"} height={"550"} alt="img" />
            </DataBanner>
          </BannerDiv>
        </BannerDiv>
      </HomePage>
      <Footer />
    </section>
  );
}
export async function getStaticProps(context) {
  let data = await db.collection("RoomsData").get();
  let Alldata = data.docs.map((entry) => entry.data());
  return {
    props: { Alldata },
    revalidate: 1,
  };
}

export default Home;
