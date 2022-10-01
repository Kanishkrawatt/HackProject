import React from 'react'
import styled from 'styled-components'
import { Banner,BannerDiv,HomePage } from '../../Components/HomePage/HomepageComponents'
import Link from 'next/link'

function ChoseOption() {
  return (<HomePage>
  <Banner style={{height:"10vh"}}>Find</Banner>
  <BannerDiv>
    <Link href="/RoomsPage"><Banner>PG </Banner></Link>
    <Link href="/RoomiesPage"><Banner>Roommate</Banner></Link>
    </BannerDiv>
  </HomePage>
  )
}

export default ChoseOption