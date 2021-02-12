import React from 'react'
import PageSegment from '../../PageSegment'
import Footer from '../footer/Footer'
import { homeObjOne, homeObjTwo } from './Data'

export default function Home() {
  return (
    <>
      <PageSegment {...homeObjOne} />
      <PageSegment {...homeObjTwo} />
    </>
  )
}
