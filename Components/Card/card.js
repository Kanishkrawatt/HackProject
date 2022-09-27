import Link from "next/link";
import React from "react";
import styled from "styled-components";

import {
  CardDiv,
  CardImg,
  CardAbout,
  Heading,
  SubHeading,
  Amenities,
  Price,
  Fair,
  Button,
  Page,
  Features,
} from "./cardComponents";

function card(props) {
  let data =JSON.parse(props.data);
  return (
    <Page>
      {data.map((item, index) => (
        <CardDiv key={index} image={item.Image}>
          <CardImg className="img" src={item.Image} />
          <CardAbout>
            <Heading className="heading">{item.Heading}</Heading>
            <SubHeading>{item.SubHeading}</SubHeading>
            <Features>
              {item.Features.map((item, index) => (
                <p key={index}>{item} &nbsp;&nbsp;&nbsp;</p>
              ))}
            </Features>

            <Amenities>
              <SubHeading style={{ margin: "0rem" }}>Amenities</SubHeading>
              <Features style={{ padding: "0rem" }}>
                {item.Amenities.map((Aitem, Aindex) => (
                  <Button key={Aindex} style={{ borderRadius: "2rem" }}>
                    {Aitem}
                  </Button>
                ))}
              </Features>
            </Amenities>
            <Price>
              <Price style={{ flexDirection: "column" }}>
                Price
                <Fair>{item.Price}</Fair>
              </Price>
              <Amenities style={{flexDirection:"row"}}>
              <Button
                bgcolor="#f9a826"
                style={{
                  padding: "0.75rem 1.75rem",
                  maxWidth: "20%",
                  width: "auto",
                  border: "none",
                  color: "white",
                }}
              >
                visit
              </Button>
              <Link
                href={{
                  pathname: "/RoomsDetail",
                  query: {
                    data: JSON.stringify(item),
                  },
                }}
              >
                <Button
                  style={{
                    padding: "0.75rem 1.75rem",
                    width: "auto",
                    border: "1px solid #f9a826",
                    color: "#f9a826",
                  }}
                >
                  ShowMore
                </Button>
              </Link>
              </Amenities>
            </Price>
          </CardAbout>
        </CardDiv>
      ))}
    </Page>
  );
}

export default card;
