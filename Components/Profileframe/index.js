import Link from "next/link";
import React from "react";
import styled from "styled-components";

const BlogFrameDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f2f2f2;
  height: 65vh;
  min-width: 40vh;
  width: 25%;
  border-radius: 3rem;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  max-height: 65vh;
  color: black;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  font-family: "Rum Raisin", sans-serif;
  line-height: 1.2;
  @media (max-width: 684px) {
    width: 80%;
    min-width: 80%;
  }
`;

const BlogImg = styled.img`
  height: 75%;
  width: 100%;
  z-index: 3;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  object-fit: cover;
  /*  Add Data on hover */
  &:hover {
    cursor: pointer;
    opacity: 0.5;
    filter: blur(4px);
  }
`;
const BlogTitle = styled.h1`
  font-size: 1.25rem;
  padding: 2rem 2rem 1rem;
  cursor: pointer;
`;

const StarRating = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
`;
const Star = styled.div`
  font-size: 1.5rem;
  color: #ffd700;
`;
const EmptyStar = styled.div`
  font-size: 1.5rem;
  color: #d3d3d3;
  &:hover {
    color: #ffd700;
  }
`;
const BlogInfo = styled.div`
  display: flex;
  position: absolute;
  height: 49vh;
  min-width: 40vh;
  width: 22%;
  align-items: center;
  justify-content: space-evenly;
  z-index: 2;
  padding: 0 2rem 2rem;
  font-size: 1rem;
  font-weight: 400;
  color: #000;
  cursor: pointer;
`;

const StarRatings = ({ rating }) => {
  const stars = [];
  rating = rating > 5 ? 5 : rating;
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<Star>★</Star>);
    } else {
      stars.push(<EmptyStar>☆</EmptyStar>);
    }
  }
  return <StarRating>{stars}</StarRating>;
};

const BlogDate = styled.p`
  font-size: 0.75rem;
  padding: 0 2rem 0rem;
`;

function ProfileFrame(props) {
  let item = props.data;
  return (
    <BlogFrameDiv>
      <BlogInfo>{item.content}</BlogInfo>
      <BlogImg src={item.Image} alt={item.title} placeholder="blur" />
      <Link href={`/RoomiesDetail/${item.id}`}>
        <BlogTitle>
          {item.Name}
          <BlogDate>{"12 oct"}</BlogDate>
        </BlogTitle>
      </Link>
      <StarRatings rating={"2"} />
    </BlogFrameDiv>
  );
}

export default ProfileFrame;
