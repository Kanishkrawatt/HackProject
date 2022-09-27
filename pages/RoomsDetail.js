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
  width: 60%;
  margin:0 auto;
  min-height: 100vh;
  height: auto;

`;

function RoomsDetail(props) {
  const data = JSON.parse(props.data);
  return (
    <DetailsPage>
      <Heading style={{margin:"2rem 0rem",marginBottom:"0rem",justifyContent:"center",display:"flex"}}>{data.Heading}</Heading>
      <SubHeading style={{justifyContent:"center",marginBottom:"2rem",display:"flex"}}>{data.SubHeading}</SubHeading>
      <CardImg style={{width:"60%"}} src={data.Image} />
      <SubHeading style={{marginLeft:"0rem",marginTop:"4rem",fontSize:"1.2rem"}}>Starts from</SubHeading>
      <Price style={{margin:"1rem 0rem"}}>
        <Fair style={{fontSize:"1.5rem"}}>{data.Price}</Fair>
      </Price>
      <SubHeading>{data.Content}</SubHeading>
    </DetailsPage>
  );
}

export async function getStaticProps(context) {
  return {
    props: {
      data: context.query.data, //pass it to the page props
    },
  };
}

export default RoomsDetail;
