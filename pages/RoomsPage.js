import React, { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { InfoPanel, Title } from "../Components/HomePage/HomepageComponents";
import Card from "../Components/Card/card";
import db from "../db";
import Image from "next/image";


// Components
const Page = styled.div`
  display: flex;
  height: auto;
  min-height: 100vh;
  width: auto;
  padding: 2rem 0rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
`;

export const FilterBar = styled(InfoPanel)`
  margin: 0rem 2rem;
  height: 8vh;
`;

export const FilterDropDownMenu = styled(Title)`
   background-color: white;
   padding:0.75rem;
   flex-direction: row;
   border-radius: 2rem;
`;

function RoomsPage({ data }) {
  const [loader, setLoader] = React.useState(false);
  return (
    <>
      {loader ? (
        <Page>
          <Card />
        </Page>
      ) : (
        <Page>
          <FilterBar>
            <FilterDropDownMenu style={{ fontSize: "1rem" }}>Location <Image src={"/downarrOW.png"} width={"30"} height={"30"} alt="log" /></FilterDropDownMenu>
            <FilterDropDownMenu style={{ fontSize: "1rem" }}>Budget <Image src={"/downarrOW.png"} width={"30"} height={"30"} alt="log" /></FilterDropDownMenu>
            <FilterDropDownMenu style={{ fontSize: "1rem" }}>Occupation <Image src={"/downarrOW.png"} width={"30"} height={"30"} alt="log" /></FilterDropDownMenu>
            <FilterDropDownMenu style={{ fontSize: "1rem" }}>Gender <Image src={"/downarrOW.png"} width={"30"} height={"30"} alt="log" /></FilterDropDownMenu>
            <FilterDropDownMenu style={{ fontSize: "1rem" }}>Amenities <Image src={"/downarrOW.png"} width={"30"} height={"30"} alt="log" /></FilterDropDownMenu>
            | 
            <FilterDropDownMenu style={{ fontSize: "1rem" }}>Amenities <Image src={"/downarrOW.png"} width={"30"} height={"30"} alt="log" /></FilterDropDownMenu>
          </FilterBar>
          <Card data={JSON.stringify(data)} />
        </Page>
      )}
    </>
  );
}
export async function getStaticProps(context) {
  const data = await db.collection("RoomsData").get();
  const Alldata = data.docs.map((entry) => entry.data());
  return {
    props: {
      data: Alldata,
    },
  };
}

export default RoomsPage;
