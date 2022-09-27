import React from "react";
import styled from "styled-components";
import {
  CardImg,
  Fair,
  Heading,
  Price,
  SubHeading,
} from "../Components/Card/cardComponents";
export const DetailsPage = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 5rem;
  width: 100%;
  min-height: 100vh;
  height: auto;
  align-items: center;
`;

function RoomsDetail(props) {
  const data = JSON.parse(props.data);
  return (
    <DetailsPage>
      <Heading style={{margin:"2rem"}}>{data.Heading}</Heading>
      <CardImg style={{margin:"2rem"}} src={data.Image} />
      <SubHeading>{data.Content}</SubHeading>
      <Price style={{margin:"2rem"}}>
        <Fair style={{fontSize:"2rem"}}>{data.Price}</Fair>
      </Price>
    </DetailsPage>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      data: context.query.data, //pass it to the page props
    },
  };
}

export default RoomsDetail;
