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
  flex-direction: column;
  gap: 5rem;
  width: 100%;
  height: 90vh;
  padding: 0rem 5rem;
  margin-top: 4rem;
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
  flex-direction: row;
  width: auto;
  height: auto;
  gap: 4rem;
  justify-content: center;
  /* align-items: center; */
`;
const SecondHalf = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  height: auto;
  gap: 4rem;
`;
function RoomsDetail(props) {
  const [data] = props.data;
  return (
    <DetailsPage>
      <Heading
        style={{
          margin: "2rem 0rem",
          marginBottom: "0rem",
          justifyContent: "center",
          display: "flex",
          fontSize: "3rem",
        }}
      >
        {data.Name}
      </Heading>
      <FirstHalf>
        <CardImg style={{ width: "50vw", height: "50vh" }} src={data.Image} />
        <SecondHalf>
          <SubHeading color="black">{data.content}</SubHeading>
          <FirstHalf>
          {data.Traits.map((Aitem, Aindex) => (
              <Button key={Aindex} style={{ borderRadius: "2rem" }}>
                {Aitem}
              </Button>
            ))}
            </FirstHalf>
        </SecondHalf>
      </FirstHalf>
    </DetailsPage>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;
  const data = await db.collection("RoomiesData").where("id", "==", id).get();
  const Alldata = data.docs.map((entry) => entry.data());
  console.log(Alldata);
  return {
    props: {
      data: Alldata,
    },
  };
}

export default RoomsDetail;
