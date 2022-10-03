import React from 'react'
import styled from 'styled-components'
import { Banner,BannerDiv,HomePage } from '../../Components/HomePage/HomepageComponents'
import Link from 'next/link'

function ChoseOption() {
  return (<HomePage>
  <Banner style={{height:"10vh"}}>Find</Banner>
  <BannerDiv>
    <Link href="/RoomsPage"><Banner style={{backgroundColor:"#FFF5E4",color:"black"}}>PG </Banner></Link>
    <Link href="/RoomiesPage"><Banner style={{backgroundColor:"#FFF5E4",color:"Black"}}>Roommate</Banner></Link>
    </BannerDiv>
  </HomePage>
  )
}

export default ChoseOption