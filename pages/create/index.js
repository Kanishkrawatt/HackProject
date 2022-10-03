import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Autherntication from "../../Components/Authentication";

export const CreateDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
  min-height: 100vh;
  width: auto;
  color: #000000;
  flex-direction: column;
  margin: 2rem;
  margin-top: 4rem;
  border-radius: 2rem;
  font-family: 'Noto Sans Mono', monospace;
`;

export const CreateForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
`;
export const CreateInput = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  height: 7vh;
  background-color:lightgrey;
  width: 82vw;
  margin: 1rem;
  border-radius: 1rem;
  border: 2px solid lightgrey;
  &:focus {
    outline: none;
  }
`;
export const InputText = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  height: 1rem;
  width: 5vw;
  border-radius: 2rem;
  transform: translateX(2rem);
  
`;
export const CreateButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10vh;
  width: 82vw;
  background-color: lightgrey;
  margin: 1rem;
  border-radius: 2rem;
  border: 2px solid lightgrey;
  &:focus {
    outline: none;
  }
`;
export const InputDiv = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: center;
  flex-direction: column;
`;

export const CreateTextArea = styled.textarea`
  display: flex;
  resize: none;
  align-items: center;
  justify-content: center;
  padding: 2rem 2rem;
  height: 20vh;
  width: 82vw;
  background-color:lightgrey;
  margin: 1rem;
  border-radius: 2rem;
  border: 2px solid lightgrey;
  &:focus {
    outline: none;
  }
`;
function Admin() {
  const [data, setdata] = useState({
    price: "",
    image: "",
    content: "",
    heading: "",
    subheading: "",
    Features: "",
    Amenities: "",
  });

  function submitfunc(e) {
    e.preventDefault();
    let Data = {
      Heading: data.heading,
      SubHeading: data.subheading,
      Image: data.image,
      Features: data.Features.split(" "),
      Amenities: data.Amenities.split(" "),
      Price: data.price,
      Content: data.content,
    };
    axios.post("/api/RoomData", Data);

    setdata({
      price: "",
      image: "",
      content: "",
      heading: "",
      subheading: "",
      Features: "",
      Amenities: "",
    });
  }

  return (<>
    <Autherntication />
    <CreateDiv>
      <form onSubmit={submitfunc}>
        <InputDiv style={{ flexDirection: "row" }}>
          <InputDiv>
            <InputText>Heading</InputText>
            <CreateInput
              type="text"
              value={data.heading}
              style={{ width: "40vw" }}
              onChange={(e) => setdata({ ...data, heading: e.target.value })}
            />
          </InputDiv>
          <InputDiv>
            <InputText>SubHeading</InputText>
            <CreateInput
              type="text"
              style={{ width: "40vw" }}
              value={data.subheading}
              onChange={(e) => setdata({ ...data, subheading: e.target.value })}
            />
          </InputDiv>
        </InputDiv>
        <InputDiv style={{ flexDirection: "row" }}>
          <InputDiv>
            <InputText>Image</InputText>
            <CreateInput
              type="text"
              style={{ width: "40vw" }}
              value={data.image}
              onChange={(e) => setdata({ ...data, image: e.target.value })}
            />
          </InputDiv>
          <InputDiv>
            <InputText>Price</InputText>
            <CreateInput
              type="text"
              style={{ width: "40vw" }}
              value={data.price}
              onChange={(e) => setdata({ ...data, price: e.target.value })}
            />
          </InputDiv>
        </InputDiv>
        <InputDiv>
          <InputText>Content</InputText>
          <CreateTextArea
            type="text"
            value={data.content}
            onChange={(e) => setdata({ ...data, content: e.target.value })}
          />
        </InputDiv>

        <InputDiv>
          <InputText>Features</InputText>
          <CreateInput
            type="text"
            value={data.Features}
            onChange={(e) => setdata({ ...data, Features: e.target.value })}
          />
        </InputDiv>
        <InputDiv>
          <InputText>Amenities</InputText>
          <CreateInput
            type="text"
            value={data.Amenities}
            onChange={(e) => setdata({ ...data, Amenities: e.target.value })}
          />
        </InputDiv>
        <CreateButton type="submit" style={{fontWeight:"bold"}}>Submit</CreateButton>
      </form>
    </CreateDiv>
    </>
  );
}

export default Admin;
