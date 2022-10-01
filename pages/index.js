import { useState } from "react";
import db from "../db";
import Image from "next/image";
import Footer from "../Components/Footer";
import Nevbar from "../Components/Nevbar/nevbar";
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
      <Nevbar />
      <HomePage>
        <BannerDiv>
          <Banner style={{backgroundImage:"url(/MainImage.jpg)",backgroundSize:"cover"}}>
            <HomeTitle>Hommies</HomeTitle>
          </Banner>
          <SideBannerdiv>
            <Link href={"/ChoseOption"}>
              <SideBanner>
                <Title>
                  Find{" "}
                  <Image
                    src={"/enter.png"}
                    width={"30"}
                    height={"30"}
                    alt="log"
                  />
                </Title>
              </SideBanner>
            </Link>
            <Link href={"/create"}>
              <SideBanner>
                <Title>
                  Register{" "}
                  <Image
                    src={"/enter.png"}
                    width={"30"}
                    height={"30"}
                    alt="log"
                  />
                </Title>
                <Image
                    src={"/register.png"}
                    width={"30"}
                    height={"30"}
                    alt="log"
                  />
              </SideBanner>
            </Link>
          </SideBannerdiv>
        </BannerDiv>
        <InfoPanel>
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
            Top Cities
          </Title>
          <BannerDiv>
            <DataBanner>
              <Image src={"/1.png"} width={"550"} height={"550"} alt="img" />
            </DataBanner>
            <DataBanner style={{fontSize:"2rem"}}>Start living your best life from day one</DataBanner>
          </BannerDiv>
          <BannerDiv style={{ marginTop: "6rem" }}>
            <DataBanner style={{fontSize:"2rem"}}>
              Don&quot;t come expecting &quot;hostel-PG food&quot;
            </DataBanner>
            <DataBanner>
              <Image src={"/2.png"} width={"550"} height={"550"} alt="img" />
            </DataBanner>
          </BannerDiv>
          <BannerDiv style={{ marginTop: "6rem" }}>
            <DataBanner>
              <Image src={"/3.png"} width={"550"} height={"550"} alt="img" />
            </DataBanner>
            <DataBanner style={{fontSize:"2rem"}}>
              Step into a room that has room for everything
            </DataBanner>
          </BannerDiv>
          <BannerDiv style={{ marginTop: "6rem" }}>
            <DataBanner style={{fontSize:"2rem"}}>
              Take your daily list of chores. And tear it up
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
    props: { Alldata }, // will be passed to the page component as props
    revalidate: 1,
  };
}

export default Home;
