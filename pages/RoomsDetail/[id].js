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
  width: 100%;
  min-height: 100vh;
  height: auto;
  padding: 5rem;
`;

const MapPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  width: 100vw;
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
  console.log(data);
  return (
    <DetailsPage>
      <FirstHalf>
        <Heading
          style={{
            margin: "2rem 0rem",
            marginBottom: "0rem",
            justifyContent: "center",
            display: "flex",
          }}
        >
          {data.Heading}
        </Heading>
        <Title style={{ fontSize: "1rem", marginBottom: "1rem" }}>
          {data.SubHeading}
        </Title>
        <Features>{data.Features.map((item, index) => item + " ")}</Features>

        {/* <CardImg style={{width:"100%"}} src={data.Image} /> */}
        <Banner style={{ width: "100%", height: "50vh", margin: "2rem 0rem" }}>
          Caresol
        </Banner>
        <SubHeading
          color="black"
          style={{ marginTop: "4rem", fontSize: "1.2rem" }}
        >
          Starts from
        </SubHeading>
        <Price style={{ margin: "1rem 0rem" }}>
          <Fair style={{ fontSize: "1.5rem", width: "auto" }}>
            {data.Price}
          </Fair>
        </Price>
        <Amenities >
              <SubHeading wid={false}>Amenities</SubHeading>
              <Features style={{ padding: "0rem" }}>
                {data.Amenities.map((Aitem, Aindex) => (
                  <Button
                    key={Aindex}
                    style={{ borderRadius: "2rem" }}
                  >
                    {Aitem}
                  </Button>
                ))}
              </Features>
            </Amenities>
        <SubHeading color="black">{data.Content}</SubHeading>
        {/* <MapPage><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.9544354118584!2d77.13929505105075!3d28.720907682296502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0170e8096b31%3A0x9a906c658b08a033!2sVivekananda%20Institute%20of%20Professional%20Studies!5e0!3m2!1sen!2sin!4v1664389023041!5m2!1sen!2sin" width={"100%"} height={"100%"} referrerpolicy="no-referrer-when-downgrade" /></MapPage> */}
      </FirstHalf>
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