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
        <Page>
        <Card />
        </Page>
      ) : (
        <Page>
          <Card data={data} />
        </Page>
      )}
    </>
  );
}

export default RoomsPage;
