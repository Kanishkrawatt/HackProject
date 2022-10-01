import Link from "next/link";
import React, { useEffect, useState } from "react";

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

function Card(props) {
  const [fakeData, setfakeData] = useState(true);
  let SkeletonData = [
    { Features: [], Amenities: [] },
    { Features: [], Amenities: [] },
    { Features: [], Amenities: [] },
  ];
  
  useEffect(() => {
    if(props.data){
      setfakeData(false)
    }
  }, [props.data])
  let Data = props.data || JSON.stringify(SkeletonData);
  let data = JSON.parse(Data);
  return (
    <Page>
      {data.map((item, index) => (
        <CardDiv key={index} fakeData={fakeData} image={item.Image}>
          <CardImg fakeData={fakeData} className="img" src={item.Image} />
          <CardAbout fakeData={fakeData}>
            <Heading fakeData={fakeData} className="heading">
              {item.Heading}
            </Heading>
            <SubHeading wid={true} fakeData={fakeData}>{item.SubHeading}</SubHeading>
            <Features
              fakeData={fakeData}
            >
              {item.Features.map((item, index) => item + " ")}
            </Features>

            <Amenities >
              <SubHeading fakeData={fakeData} wid={false}>Amenities</SubHeading>
              <Features fakeData={fakeData} style={{ padding: "0rem" }}>
                {item.Amenities.map((Aitem, Aindex) => (
                  <Button
                    fakeData={fakeData}
                    key={Aindex}
                    style={{ borderRadius: "2rem" }}
                  >
                    {Aitem}
                  </Button>
                ))}
              </Features>
            </Amenities>
            <Price fakeData={fakeData}>
              <Price style={{ flexDirection: "column" }}>
                <Fair fakeData={fakeData}>{item.Price}</Fair>
              </Price>
              <Amenities fakeData={fakeData} style={{ flexDirection: "row" }}>
                <Button
                  fakeData={fakeData}
                  bgcolor="#f9a826"
                  color="white"
                  style={{
                    padding: "0.75rem 1.75rem",
                    maxWidth: "20%",
                    border: "none",
                  }}
                >
                  visit
                </Button>
                <Link
                  href={{
                    pathname: `/RoomsDetail/${item.id}`,
                  }}
                >
                  <Button
                    fakeData={fakeData}
                    color="#f9a826"
                    borderCol="#f9a826"
                    style={{
                      padding: "0.75rem 1.75rem",
                      width: "auto",
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

export default Card;
