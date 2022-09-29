import React, { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
const Page = styled.div`
  display: flex;
  height: auto;
  min-height: 100vh;
  width: auto;
  padding: 5rem 0rem;
  flex-direction: row;
`;
const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  font-size: 2rem;
  font-weight: 600;
  color: #f9a826;
`;


import Card from "../Components/Card/card";
function RoomsPage() {
  const [data, setData] = React.useState([]);
  const [loader, setLoader] = React.useState(true);
  useEffect(() => {
    axios
      .get("/api/RoomData/getData")
      .then((res) => {
        setLoader(false);
        setData(JSON.stringify(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      {loader ? (
        <Loading>Loading...</Loading>
      ) : (
        <Page>
          <Card data={data} />
        </Page>
      )}
    </>
  );
}

export default RoomsPage;
