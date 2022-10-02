import React, { useEffect } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import db from "../../db";
import {
  CardImg,
  Fair,
  Heading,
  Price,
  SubHeading,
  Features,
  Amenities,
  Button,
} from "../../Components/Card/cardComponents";
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
} from "../../Components/HomePage/HomepageComponents";
export const DetailsPage = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5rem;
  width: 100%;
  min-height: 100vh;
  height: auto;
  padding: 0rem 5rem;
`;

const MapPage = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  right: 10rem;
  top: 0rem;
  align-items: center;
  height: 100vh;
  width: 30vw;
  margin: 2rem;
  padding: 2rem;
`;
const FirstHalf = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  min-height: 100vh;
  height: auto;
  justify-content: center;
  /* align-items: center; */
`;
function RoomsDetail(props) {
  const [data] = props.data;
  return (
    <DetailsPage>
      <FirstHalf>
        <Heading
          style={{
            margin: "2rem 0rem",
            marginBottom: "0rem",
            justifyContent: "center",
            display: "flex",
            fontSize: "3rem",
          }}
        >
          {data.Heading}
        </Heading>
        <Title
          style={{ fontSize: "1rem", marginBottom: "1rem", color: "grey" }}
        >
          {data.SubHeading}
        </Title>

        <CardImg style={{ width: "100%" }} src={data.Image} />
        {/* <Banner style={{ width: "100%", height: "50vh", margin: "2rem 0rem" }}>
          Caresol
        </Banner> */}
        <SubHeading
          color="black"
          style={{ marginTop: "4rem", fontSize: "1.2rem", color: "grey" }}
        >
          Starts from
        </SubHeading>
        <Price style={{ margin: "1rem 0rem" }}>
          <Fair style={{ fontSize: "1.5rem", width: "auto"}}>
            {data.Price}
          </Fair>
        </Price>
        <Amenities>
          <SubHeading wid={false}>Amenities</SubHeading>
          <Features style={{ padding: "0rem" }}>
            {data.Amenities.map((Aitem, Aindex) => (
              <Button key={Aindex} style={{ borderRadius: "2rem" }}>
                {Aitem}
              </Button>
            ))}
          </Features>
        </Amenities>
        <SubHeading color="black">{data.Content}</SubHeading>
      </FirstHalf>
      <MapPage>
        <iframe
          src={data.map}
          width={"100%"}
          height={"100%"}
          referrerpolicy="no-referrer-when-downgrade"
        />
      </MapPage>
    </DetailsPage>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;
  const data = await db.collection("RoomsData").where("id", "==", id).get();
  const Alldata = data.docs.map((entry) => entry.data());
  console.log(Alldata);
  return {
    props: {
      data: Alldata,
    },
  };
}

export default RoomsDetail;
