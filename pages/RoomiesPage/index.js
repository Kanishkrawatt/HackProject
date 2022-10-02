import { data } from 'autoprefixer';
import React from 'react'
import styled from 'styled-components'
import Autherntication from '../../Components/Authentication';
import db from '../../db';
import ProfileFrame from '../../Components/ProfileFrame';
import {FilterDropDownMenu,FilterBar} from '../RoomsPage';
import Image from 'next/image';
import Link from 'next/link';
export const RoomiesPage = styled.div`
    display: flex;
    height: 100vh;
    width: auto;
    padding: 2rem 0rem;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
export const RoomiesDiv = styled.div`
    display: flex;
    flex-direction: column;
    height: 60vh;
    width: 70vw;
    margin: 0rem auto;
    border-radius: 2rem;
    justify-content: center;
    align-items: center;
    background-color: lightgrey;
`;

const RoomiesData= styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
  `;

function RoomiesPages(props) {
    const data = props.data;        
    return (
    <>
        <Autherntication />
        <RoomiesPage>
        {data.map((item,index) => {
            return (
                <RoomiesData key={index}>
                    <ProfileFrame data={item} />
                </RoomiesData>
            )})}
        </RoomiesPage>
    </>

  )
}


export async function getStaticProps() {
    const data = await db.collection("RoomiesData").get();
    const Alldata = data.docs.map((entry) => entry.data());
    return {
      props: {
        data: Alldata,
      },
    };
  }

export default RoomiesPages


