import React from 'react'
import PageSegment from '../../PageSegment'
import { homeObjOne, homeObjTwo, homeObjThree } from './Data'

export default function Home() {
  return (
    <>
      <PageSegment {...homeObjOne} />
      <PageSegment {...homeObjTwo} />
      <PageSegment {...homeObjThree} />
    </>
  )
}
